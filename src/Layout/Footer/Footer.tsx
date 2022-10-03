import style from "./Footer.module.scss";
import FooterSection from "../../Components/FooterSection/FooterSection";
import { DUMMY_FOOTER } from "../../data/DUMMY_FOOTER";

const Footer = () => {
  let numberOfElement: number = 0;

  return (
    <div className={style.container}>
      {DUMMY_FOOTER.map((item: any) => {
        numberOfElement += 1;
        return (
          <FooterSection
            key={Object.keys(item)}
            title={Object.keys(item)}
            list={Object.values(item)}
            lastElement={numberOfElement == DUMMY_FOOTER.length ? true : false}
          />
        );
      })}
    </div>
  );
};

export default Footer;
