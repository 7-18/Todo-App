import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { taskAddAsync } from "../redux/actions/taskActions";
import { FormStyled, Input, InputBtn } from "../styles/FormStyles";

export const Form = ({ theme }) => {
  const dispatch = useDispatch();
  const [values, handleInputChange, reset] = useForm({
    title: "",
    checked: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(taskAddAsync(values));
    reset();
  };

  return (
    <FormStyled className={theme} onSubmit={handleSubmit}>
      <div>
        <InputBtn type="submit"></InputBtn>
        <Input
          type="text"
          placeholder="Create a new todo..."
          value={values.title}
          name="title"
          onChange={handleInputChange}
        />
      </div>
    </FormStyled>
  );
};
