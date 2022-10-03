import style from "./FooterSection.module.scss";

const FooterSection = (props: any) => {
  return (
    <div className={style.container}>
      <h2>{props.title}</h2>
      <ul>
        {props.list[0].map((item: any) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      {props.lastElement ? "" : <div className={style.stripe}></div>}
    </div>
  );
};

export default FooterSection;
