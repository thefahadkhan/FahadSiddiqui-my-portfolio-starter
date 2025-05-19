import "./ProjectCard.css";

const ProjectCard = ({ title, image, category, description, stacks }) => {
  return (
    <div className="card project__card">
      <div className="project__card-top">
        <div className="picture">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="project__card-bottom">
        <div className="flex project__info">
          <div className="img">
            <img src={image} alt="" />
          </div>
          <div>
            <h3 className="title">{title}</h3>
            <p className="text__muted category">{category}</p>
          </div>
        </div>
        <p className="text__muted description">{description}</p>
        <div className="flex stacks">
          {stacks.map((stack, index) => (
            <div className="stack" key={index}>
              <img src={stack.logo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
