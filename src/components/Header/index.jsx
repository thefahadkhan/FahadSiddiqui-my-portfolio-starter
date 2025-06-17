import "./Header.css";
import HeaderTitle from "../../ui/HeaderTitle";
import { profile1 } from "../../assets";
import CodeBlock from "../../ui/CodeBlock";
import Facts from "../../ui/Facts";
import SocialHandles from "../../ui/SocialHandles";
import BreathCircle from "../../ui/BreathCircle";

const code = `const developer = {
 firstName: "Fahad",
 lastName: "Siddiqui",
 aka: "FahadCodes",
 hobby: repeat = () => {
     // eat();
     // sleep();
     // code();
     // repeat();
 }
}`;
const Header = () => {
  return (
    <header id="header">
      <BreathCircle />
      <div className="section__wrapper">
        <div className="grid upper">
          <div className="column">
            <HeaderTitle />
          </div>
        </div>
        <div className="card grid lower">
          <CodeBlock language={"javascript"} code={code} />
          <div>
            <p className="text__muted description">
              <p className="text__muted description">
                I tackle user experience challenges and create integrity-driven solutions that aim to deliver smooth and responsive web
                experiences.
              </p>
            </p>
            <Facts />
            <SocialHandles />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
