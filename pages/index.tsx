import style from "./HomePage.module.scss";
import WelcomeSection from "../src/Components/WelcomeSection/WelcomeSection";

const HomePage = () => {
  return (
    <div className={style.container}>
      <WelcomeSection />
    </div>
  );
};

export default HomePage;
