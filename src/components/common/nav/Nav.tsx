import { useState } from "react";
import navJson from "./nav.json";
import { Link } from "react-router-dom";
import styles from "./nav.module.scss";

interface Nav {
  index: number;
  path: string;
  label: string;
  searchValue: string;
  isActive: boolean;
}


function Nav() {
  const [navMenu, setnavMenu] = useState<Nav[]>(navJson);

  const navLinks = navMenu.map((nav: Nav) => {
    return (
      <Link to={nav.path} key={nav.index}>
        <small className="text-base font-normal leading-none">{nav.label}</small>
      </Link>
    )
  })

  return <div className={styles.nav}>{navLinks}</div>;
}

export { Nav };
