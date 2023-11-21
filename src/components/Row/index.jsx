import styles from "./Row.module.css";

export default function Row({ children, alignItemCenter }) {
  return (
    <div
      className={`${styles.row} ${
        alignItemCenter ? styles.alignItemCenter : ""
      }`}
    >
      {children}
    </div>
  );
}
