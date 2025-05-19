import { useEffect, useState } from "react";
import "odometer/themes/odometer-theme-default.css";
import "./Facts.css";
import Odomater from "react-odometerjs";

const Facts = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setExperience(1);
      setProjects(5);
      setClients(1);
    }, 3000);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex__center flex__container">
      <div className="fact__item">
        <div className="flex__center">
          <Odomater value={experience} className="title" />
        </div>
        <p className="label">Years Of Experience</p>
      </div>

      <div className="fact__item">
        <div className="flex__center">
          <Odomater value={projects} className="title" />
        </div>
        <p className="label">Completed Projects</p>
      </div>

      <div className="fact__item">
        <div className="flex__center">
          <Odomater value={clients} className="title" />
        </div>
        <p className="label">Practice Clients</p>
      </div>
    </div>
  );
};

export default Facts;
