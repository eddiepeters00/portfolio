import * as icons from "../../assets/images";
import Card from "../../components/Card/Card";
import { TechStack } from "../../components/TechStack/TechStack";

const languages = [
  { name: "Javascript", src: icons.js_svg },
  { name: "TypeScript", src: icons.ts_svg },
  { name: "React.js", src: icons.react_svg },
  { name: "Next.js", src: icons.next },
  { name: "Node.js", src: icons.node_svg },
  { name: "Tanstack Query", src: icons.tanstack },
  { name: "CSS", src: icons.css_svg },
  { name: "Tailwind", src: icons.tailwind },
  { name: "HTML", src: icons.html_svg },
  { name: "Java", src: icons.java },
  { name: "C#", src: icons.csharp },
  { name: "ASP.NET", src: icons.aspnet },
];

const databases = [
  { name: "MongoDB", src: icons.mongoDB },
  { name: "PostgreSQL", src: icons.postgres },
  { name: "MySQL", src: icons.mysql },
  { name: "MSSQL", src: icons.mssql },
  { name: "Firebase", src: icons.firebase },
];

function About() {
  return (
    <Card.Grid>
      <Card id="about">
        <Card.Title>About me</Card.Title>
        <Card.Content>
          <Card.Description>
            Hey there! 👋 I'm Eddie Peters, a full-stack JS developer based in
            Malmö, Sweden. My journey into programming began at Malmö University
            in 2020, where I discovered my passion for coding and
            problem-solving. After i realized my passion was in webb i switched
            to Grit Academy to persue my dreams of becoming a fullstack
            developer.
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

        <TechStack technologies={languages} />
        <TechStack title="Databases" technologies={databases} />
      </Card>
    </Card.Grid>
  );
}

export default About;
