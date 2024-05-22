import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import EmailField from "../../Reusable/FormFields/EmailField/EmailField";
import PasswordField from "../../Reusable/FormFields/PasswordField/PasswordField";
import FormHeader from "../../Reusable/FormHeader/FormHeader";
import styles from "./Login.module.scss";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.login}>
      <FormHeader title="Welcome 👋" subtitle="Please login here" />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <EmailField register={register} errors={errors} />
        <PasswordField register={register} errors={errors} />
        <div className={styles.userAuth}>
          <Link to="/signup">
            <p>Signup</p>
          </Link>
          <Link to="/forgot-password">
            <p>Forgot Password?</p>
          </Link>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
