import styles from "./EmailField.module.scss";

const EmailField = ({ register, errors }) => {
  return (
    <label htmlFor="email" className={styles.emailField}>
      Email address
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid email address",
          },
        })}
        id="email"
        type="text"
        placeholder="example@example.com"
      />
      {errors.email && (
        <div className={styles.error}>{errors.email.message}</div>
      )}
    </label>
  );
};

export default EmailField;
