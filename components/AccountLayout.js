import styles from "../styles/account-layout.module.css";
import Nav from "./Nav";

const AccountLayout = ({ children }) => {
  const { layout } = styles;

  return (
    <main className={layout}>
      <Nav />
      {children}
    </main>
  );
};

export default AccountLayout;
