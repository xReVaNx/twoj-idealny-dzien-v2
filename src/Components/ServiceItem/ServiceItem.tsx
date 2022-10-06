import style from "./ServiceItem.module.scss";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import { Button } from "@nextui-org/react";

const ServiceItem = (props: any) => {
  return (
    <div className={style.container}>
      <div className={style.flipCardInner}>
        <div className={style.flipCardFront}>
          <Image src={props.img} alt="image" height={286} width={420} />
          <div className={style.content}>
            <h2>{props.name}</h2>
            <h3>od {props.startPrice}zł</h3>
            <div className={style.reserve}>
              <h4>Zobacz szczegóły</h4>
              <MdArrowForwardIos />
            </div>
          </div>
        </div>
        <div className={style.flipCardBack}>
          <ul>
            {props.composition ? (
              props.composition.map((item: string) => {
                return <li key={item}>{item}</li>;
              })
            ) : (
              <p>Na tą chwilę nie możemy podać szczegółów ;(</p>
            )}
          </ul>
          <Button color="gradient" size="lg" bordered>
            Zarezerwuj
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
