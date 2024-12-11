"use client";

import { Button } from "@mui/material";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";

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
  const [open, setOpen] = useState("true");
  //temp
  const session = true;
  const isAdmin = true;
  return (
    <div className="{style.container}">
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}{" "}
            <Button className={styles.logout}>Logout</Button>{" "}
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      {/* <Button onClick={() => setOpen((prev) => !prev)}>Menu</Button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )} */}
    </div>
  );
};

export default Links;
