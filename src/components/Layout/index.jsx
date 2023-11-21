import { Link } from "react-router-dom";
import Header from "../Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
