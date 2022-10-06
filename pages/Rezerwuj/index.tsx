import style from "./ReservePage.module.scss";
import { DUMMY_SERVICES } from "../../src/data/DUMMY_SERVICES";
import ServiceItem from "../../src/Components/ServiceItem/ServiceItem";

const ReservePage = () => {
  return (
    <div className={style.container}>
      <h1>Nasze usługi</h1>
      <div className={style.services}>
        {DUMMY_SERVICES.map((item: any) => {
          return (
            <ServiceItem
              key={item.name}
              name={item.name}
              img={item.img}
              time={item.time}
              startPrice={item.startPrice}
              composition={item.composition}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ReservePage;
