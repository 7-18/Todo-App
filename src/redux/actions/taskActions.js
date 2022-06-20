import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { typesToDo } from "../types/types";

const taskAddSync = (task) => {
  return {
    type: typesToDo.add,
    payload: task,
  };
};

export const taskAddAsync = (task) => {
  return (dispatch) => {
    addDoc(collection(db, "Tasks"), task)
      .then((doc) => {
        dispatch(taskAddSync(task));
        dispatch(taskListAsync());
      })
      .catch((error) => {
        console.log("Task don't add", error);
      });
  };
};

const taskListSync = (tasks) => {
  return {
    type: typesToDo.list,
    payload: tasks,
  };
};

export const taskListAsync = () => {
  return async (dispatch) => {
    const dbTasks = collection(db, "Tasks")
    const q = query(dbTasks, orderBy("checked", "desc"))
    const tasks = await getDocs(q)
    const taskList = [];
    tasks.forEach((task) => {
      taskList.push({
        ...task.data(),
      });
    });
    dispatch(taskListSync(taskList));
  };
};

const taskEditSync = (newTask) => {
  return {
    type: typesToDo.edit,
    payload: newTask,
  };
};

export const taskEditAsync = (upTask) => {
  return async (dispatch) => {
    const tasks = collection(db, "Tasks");
    const q = query(tasks, where("title", "==", upTask.title));
    const data = await getDocs(q);
    let id = "";
    data.forEach(async (task) => {
      id = task.id;
    })
    const docRef = doc(db, "Tasks", id);
    await updateDoc(docRef, upTask)
      .then(() => {
        dispatch(taskEditSync(upTask));
      })
      .catch((error) => {
        console.log("Task don't checked", error);
      });
      dispatch(taskListAsync());
    }
}

const taskDeleteSync = (title) => {
  return {
    type: typesToDo.delete,
    payload: title,
  };
};

export const taskDeleteAsync = (title) => {
  return async (dispatch) => {
    const tasks = collection(db, "Tasks");
    const q = query(tasks, where("title", "==", title));
    const data = await getDocs(q);
    data.forEach((task) => {
      deleteDoc(doc(db, "Tasks", task.id));
    });
    dispatch(taskDeleteSync(title));
  };
}