import style from "./Header.module.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Image from "next/image";
import mobileLogo from "../../../public/Assets/Images/logoMobileWhite.svg";
import Logo from "../../../public/Assets/Images/logoWhite.svg";

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.logoContainer}>
        <div className={style.mobileLogo}>
          <Image src={mobileLogo} />
        </div>
        <div className={style.logo}>
          <span>
            <Image src={Logo} />
          </span>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
