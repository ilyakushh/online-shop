import styles from "./NameField.module.scss";

const NameField = ({ register, errors, placeholder, name }) => {
  return (
    <label className={styles.nameField}>
      {placeholder}
      <input
        {...register(name, {
          required: `${placeholder} is required`,
          pattern: {
            value: /^[A-Za-z][a-z]*$/,
            message: "First name should contain only letters",
          },
        })}
        type="text"
        placeholder={placeholder}
      />
      {errors.firstName && (
        <div className={styles.error}>{errors[name].message}</div>
      )}
    </label>
  );
};

export default NameField;
