import styles from "./hero.module.css";
// import Image from "next/image";


const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <svg viewBox="0 0 12 12" preserveAspectRatio="none">
          <g>
            <path
              d=" 
              M 0 0 
              C 12 3, 8 8, 7 9 
              S 5 11, 5 12
              H 0 
              Z "
            />
          </g>
        </svg>
      </div>
      <div className={styles.brand}>
      </div>
      <div className={styles.container}>
        <h1 className={styles.heading}>NextJS Boilerplate</h1>
      </div>
    </section>
  );
};

export default Hero;
