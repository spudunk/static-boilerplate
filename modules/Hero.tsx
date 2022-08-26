import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.heading}>NextJS Boilerplate</h1>
      </div>
    </section>
  )
}

export default Hero