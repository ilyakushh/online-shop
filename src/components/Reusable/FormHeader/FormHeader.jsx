import styles from "./FormHeader.module.scss";

const FormHeader = ({ title, subtitle }) => {
  return (
    <div className={styles.formHeader}>
      {" "}
      <h2>{title}</h2>
      <span>{subtitle}</span>
    </div>
  );
};

export default FormHeader;
