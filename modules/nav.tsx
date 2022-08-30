import styles from "./nav.module.css";

const Navbar = () => {
  return (
    <header className={styles.section}>
      <nav className={styles.container}>
        <ul className={styles.navigation}>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar