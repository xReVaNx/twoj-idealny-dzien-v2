import style from "./Kontakt.module.scss";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

const Kontakt = () => {
  return (
    <div className={style.container}>
      <a href="https://www.instagram.com/twoj.idealny.dzien/" target="_blank">
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100086100522846"
        target="_blank"
      >
        <FaFacebook />
      </a>
      <a href="mailto:twoj-idealny-dzien@gmail.com">
        <FaEnvelope />
      </a>
    </div>
  );
};

export default Kontakt;
