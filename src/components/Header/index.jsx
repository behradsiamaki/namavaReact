import styles from "./Header.module.css";
import Container from "../Container";
import Logo from "../../assets/images/logo.svg";
import Row from "../Row";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Row alignItemCenter>
          <div className={styles.logo}>
            <img src={Logo} />
          </div>
          <ul className={styles.marginLeftAuto}>
            <li>
              <Link to="/">خانه</Link>
            </li>
            <li>
              <Link to="/">فیلم ها</Link>
            </li>
            <li>
              <Link to="/">سریال ها</Link>
            </li>
            <li>
              <Link to="/">دسته بندی</Link>
            </li>
          </ul>
          <ul className={styles.leftSide}>
            <li>
              <Link>خرید اشتراک</Link>
            </li>
            <li className={styles.loginBtn}>
              <Link>ورود/ ثبت نام</Link>
            </li>
          </ul>
        </Row>
      </Container>
    </header>
  );
}
