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
        <Link href="/oferta">Oferta</Link>
        <Link href="/Galeria">Galeria</Link>
        <Link href="/O-nas">O nas</Link>
        <Link href="/Kontakt">Kontakt</Link>
      </ul>
    </div>
  );
};

export default Navbar;
