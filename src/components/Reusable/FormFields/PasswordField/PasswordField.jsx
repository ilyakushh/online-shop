import styles from "./PasswordField.module.scss";

const PasswordField = ({ register, errors }) => {
  return (
    <label htmlFor="password" className={styles.passwordField}>
      Password
      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters",
          },
        })}
        id="password"
        type="password"
        placeholder="Enter your password"
      />
      {errors.password && (
        <div className={styles.error}>{errors.password.message}</div>
      )}
    </label>
  );
};

export default PasswordField;
