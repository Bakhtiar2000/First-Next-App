import Styles from "./About.module.css";

export const metadata = {
  title: "First Next App/ About",
  description: "This is my about page",
};

const AboutPage = () => {
  return <div className={Styles.heading}>About</div>;
};

export default AboutPage;
