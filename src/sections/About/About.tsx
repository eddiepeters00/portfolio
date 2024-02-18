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

function About() {
  return (
    <Card style={{ scrollMarginBlock: "10rem" }}>
      <Card.Title>About me</Card.Title>
      <Card.Content>
        <Card.Description>
          Hey there! 👋 I'm Eddie Peters, a full-stack JS developer based in
          Malmö, Sweden. My journey into programming began at Malmö University
          in 2020, where I discovered my passion for coding and problem-solving.
          After i realized my passion was in webb i switched to Grit Academy to
          persue my dreams of becoming a fullstack developer.
        </Card.Description>
        <Card.Description>
          Fast forward to 2024, and here I am - a proud graduate from Grit
          Academy with a degree in Frontend webbdevelopment ready to work with
          skilled and talented people.
        </Card.Description>
        <Card.Description>
          Beyond coding, you'll find me sipping on a cup of coffee ☕, playing
          the drums 🥁, or listening to some good music 🎵. I also enjoy
          snowboarding 🏂, skateboarding 🛹, climbing 🧗‍♂️ and discgolf 🥏
        </Card.Description>
      </Card.Content>

      <TechStack technologies={techStack} />
    </Card>
  );
}

export default About;
