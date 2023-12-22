import Dropdown from "../Dropdown/dropdown";
import data from "../../data/projects-data";

export default function Projects() {
  return (
    <section className="projects">
      <h2 id="projects">Mes projets</h2>
      <div className="dropdown-wrapper">
        {data.map((item, bar) => {
          return <Dropdown key={bar} data={item} />;
        })}
      </div>
    </section>
  );
}
 