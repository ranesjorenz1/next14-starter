import React from "react";
import Image from "next/image";
import Links from "./links/Links";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.logo}
        src="/static/logo.png"
        alt="Alvarado Furniture & Upholstery Service"
        width={85}
        height={75}
      />
      <Links />
    </div>
  );
};

export default Navbar;
