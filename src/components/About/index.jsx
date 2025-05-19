import "./About.css";
import Hole from "../../ui/Hole";
import { skills } from "../../data";
import CardUi from "../../assets/CardUi";

const About = () => {
  return (
    <section id="about">
      <div className="card section__wrapper">
        <Hole />
        <div className="column left__column">
          <h3 className="skill__title">My Skills</h3>
          <div className="skill__container">
            {skills.map((skill, index) => (
              <div className="skill__group" key={index}>
                {skill.data.map((list, key) => (
                  <div className="blur__overlay skill" key={key}>
                    <div className="skill__logo">
                      <img src={list.logo} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <CardUi className="card__ui-item" color={"var(--color-primary)"} />
        </div>
        <div className="column right__column">
          <h2 className="shine">About Me</h2>
          <h1 className="title">
            Hi, I’m <span className="color__primary">Muhammad Fahad Siddiqui</span>
          </h1>
          <p className="text__muted description">
            a passionate frontend developer currently in the early stages of my
            development journey. With a strong foundation in HTML, CSS,
            JavaScript, React.js, Next.js, and the MERN stack, I enjoy building
            responsive and user-friendly web interfaces. I’ve completed several
            personal and practice projects that reflect my commitment to
            learning and problem-solving. My focus is on writing clean and
            scalable code while continuously improving my skills and
            understanding of modern web development. I'm eager to contribute to
            real-world projects, collaborate with teams, and grow as a developer
            through new challenges and opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
