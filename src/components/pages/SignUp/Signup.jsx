import { useForm } from "react-hook-form";
import EmailField from "../../Reusable/FormFields/EmailField/EmailField";
import NameField from "../../Reusable/FormFields/NameField/NameField";
import PasswordField from "../../Reusable/FormFields/PasswordField/PasswordField";
import FormHeader from "../../Reusable/FormHeader/FormHeader";
import styles from "./Signup.module.scss";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });
  const onSubmit = (data) => console.log(data);
  return (
    <div className={styles.signup}>
      <FormHeader title="Create new account" subtitle="Please enter details" />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <NameField
          register={register}
          errors={errors}
          name="firstName"
          placeholder="First Name"
        />
        <NameField
          register={register}
          errors={errors}
          name="lastName"
          placeholder="Last Name"
        />

        <EmailField register={register} errors={errors} />
        <PasswordField register={register} errors={errors} />
        <label>
          <input
            type="checkbox"
            {...register("terms", {
              required: "You must accept the Terms & Conditions",
            })}
          />
          I agree to the
          <strong> Terms & Conditions</strong>
          {errors.terms && (
            <div className={styles.error}>{errors.terms.message}</div>
          )}
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
