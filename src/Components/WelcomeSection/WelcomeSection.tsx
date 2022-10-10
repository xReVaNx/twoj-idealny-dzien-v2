import style from "./WelcomeSection.module.scss";
import { Button } from "@nextui-org/react";

const WelcomeSection = () => {
  return (
    <div className={style.container}>
      <div className={style.messageBox}>
        <h1>Twój idealny dzień</h1>
        <p>Upiększamy twój ważny dzień, abyś miał niezapomniane wspomnienia.</p>
        <button>Zaczynamy!</button>
      </div>
    </div>
  );
};

export default WelcomeSection;
