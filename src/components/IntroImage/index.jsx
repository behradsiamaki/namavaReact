import styles from "./IntroImage.module.css";
import Container from "../Container";

export default function IntroImage() {
  return (
    <div className={styles.introImage}>
      <img src="https://static.namava.ir/Content/Upload/Images/f32758c4-d1d3-4023-bb78-896ccfc0ecf4.jpg?anchor=middlecenter&crop=auto&scale=both&w=1920&h=900" />
      <div className={styles.container}>
        <div className={styles.logoIntroImage}>
          <img src="https://static.namava.ir/Content/Upload/Images/57587e55-970f-4c37-b15d-8847024c3207.png" />
          <h2>شبکه مخفی زنان</h2>
          <ul>
            <li>
              <span className={styles.limitAge}>۱۵+</span>
            </li>
            <li>
              <span>۱۴۰۱</span>
            </li>
            <li>
              <span>۸۸٪</span>
            </li>
          </ul>
          <button className={styles.prevBtnIntroImage}>پیش نمایش</button>
          <button className={styles.partsBtnIntroImage}>قسمت ها</button>
        </div>
      </div>
    </div>
  );
}
