import Image from "next/image";
import styles from "./about.module.css";
const AboutPage = () => {
  return (
    <div>
      <div className={styles.aboutImage}>
        <Image src="/static/about.jpg" alt="About Us" fill />
      </div>
    </div>
  );
};
export default AboutPage;
