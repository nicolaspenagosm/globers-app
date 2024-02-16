import FileUpload from "../../FileUpload";
import { useAppDispatch } from "../../store";
import { signUp } from "../../store/auth-slice/auth-actions";

const Login: React.FC = () => {
    const dispatch = useAppDispatch();
  return (
    <section>
      <FileUpload></FileUpload>
      <button
        onClick={() => {
   
        }}
      >
        Test
      </button>
    </section>
  );
};

export default Login;
