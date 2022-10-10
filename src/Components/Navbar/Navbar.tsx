import style from "./Navbar.module.scss";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.hamburgerMenu}>
        <Hamburger direction="left" rounded size={48} />
      </div>
      <ul>
        <Link href="/">Strona Główna</Link>
        <Link href="/Plany-i-cennik">Plany i cennik</Link>
        <Link href="/Portfolio">Portfolio</Link>
        <Link href="/Rezerwuj">Rezerwuj</Link>
        <Link href="/Kontakt">Kontakt</Link>
      </ul>
    </div>
  );
};

export default Navbar;
