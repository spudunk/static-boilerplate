import styles from "./footer.module.css";

const Footer = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        &copy;2022 Christopher Hicks
      </div>
    </section>
  );
};

export default Footer;
