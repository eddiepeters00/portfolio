import {
  css_svg,
  html_svg,
  js_svg,
  node_svg,
  react_svg,
  ts_svg,
} from "../../assets/images";
import Card from "../../components/Card/Card";
import { TechStack } from "../../components/TechStack/TechStack";

const techStack = [
  { name: "Javascript", src: js_svg },
  { name: "TypeScript", src: ts_svg },
  { name: "React.js", src: react_svg },
  { name: "Node.js", src: node_svg },
  { name: "CSS", src: css_svg },
  { name: "HTML", src: html_svg },
];

function Projects() {
  return (
    <Card.Grid>
      <Card>
        <Card.Title>Title</Card.Title>
      </Card>
      <Card>
        <Card.Title>Title</Card.Title>
        <Card.Description>
          <TechStack
            title="Technologies used in this project"
            technologies={techStack}
          />
        </Card.Description>
      </Card>

      <Card url="">
        <Card.Title>Here is a card with a long title</Card.Title>
        <Card.Description>
          This is a description of one of my projects with a superlongword in
          the very long description
        </Card.Description>
      </Card>

      <Card url="">
        <Card.Title>Here is a card</Card.Title>
        <Card.Description>This is a description</Card.Description>
      </Card>
    </Card.Grid>
  );
}

export default Projects;
