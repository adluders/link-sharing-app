import styles from "../styles/account-layout.module.css";
import Nav from "./Nav";

const AccountLayout = ({ children }) => {
  const { layout, contentWrapper } = styles;

  return (
    <main className={layout}>
      <Nav />
      <section className={contentWrapper}>{children}</section>
    </main>
  );
};

export default AccountLayout;
