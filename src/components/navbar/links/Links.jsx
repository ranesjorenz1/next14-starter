// import { link } from "fs";
import Link from "next/link";
import styles from "./links.module.css";
const Links = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Product",
      path: "/product",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className={styles.links}>
      {links.map((link) => (
        <Link href={link.path} key={links.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
