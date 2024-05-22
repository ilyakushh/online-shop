import { useForm } from "react-hook-form";
import EmailField from "../../Reusable/FormFields/EmailField/EmailField";
import styles from "./ForgotPassword.module.scss";
import FormHeader from "../../Reusable/FormHeader/FormHeader";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });
  const onSubmit = (data) => console.log(data);
  return (
    <div className={styles.forgotPassword}>
      <FormHeader
        title="Forgot Password"
        subtitle="Enter your registered email address. we’ll send you a code to reset your
        password."
      />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <EmailField register={register} errors={errors} />
        <button type="submit">Send OTP</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
