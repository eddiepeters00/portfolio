import { styles } from "../../assets/styles/styles";
import {
  css_svg,
  html_svg,
  js_svg,
  node_svg,
  react_svg,
  ts_svg,
} from "../../assets/images";
import Card from "../../components/Card/Card";

function About() {
  return (
    <Card style={{ scrollMarginBlock: "10rem" }}>
      <Card.Title>About me</Card.Title>
      <Card.Content>
        <Card.Description>
          Hi, I'm Eddie Peters, a full-stack JS developer based in Malmö,
          Sweden. My journey into programming began at Malmö University in 2020,
          where I discovered my passion for coding and problem-solving.
        </Card.Description>
        <Card.Description>
          Outside of coding, you'll find me enjoying a good cup of coffee ☕,
          playing the drums 🥁, listening to some good music 🎵, and pursuing
          outdoor activities like snowboarding 🏂, skateboarding 🛹, rock
          climbing 🧗‍♂️, and disc golf 🥏.
        </Card.Description>
      </Card.Content>

      <div
        style={{
          backgroundColor: "black",
          marginTop: "4rem",
          color: "whiteSmoke",
          padding: "2rem",
          boxShadow: styles.neon,
          width: "100%",
          maxWidth: "1000px",
          justifySelf: "center",
        }}
      >
        <h3 style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>Techstack</h3>

        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          }}
        >
          <div
            style={{
              display: "grid",
              placeItems: "center",
              backgroundColor: "hsl(220deg 40% 21% / 80%)",
            }}
          >
            <img style={{ maxWidth: "100%", padding: "1rem" }} src={js_svg} />
            <span style={{ padding: ".5rem" }}>JavaScript</span>
          </div>
          <div
            style={{
              display: "grid",
              placeItems: "center",
              backgroundColor: "hsl(220deg 40% 21% / 80%)",
            }}
          >
            <img style={{ maxWidth: "100%", padding: "1rem" }} src={ts_svg} />
            <span style={{ padding: ".5rem" }}>TypeScript</span>
          </div>

          <div
            style={{
              display: "grid",
              placeItems: "center",
              backgroundColor: "hsl(220deg 40% 21% / 80%)",
            }}
          >
            <img style={{ maxWidth: "100%", padding: "1rem" }} src={css_svg} />
            <span style={{ padding: ".5rem" }}>CSS</span>
          </div>

          <div
            style={{
              display: "grid",
              placeItems: "center",
              backgroundColor: "hsl(220deg 40% 21% / 80%)",
            }}
          >
            <img style={{ maxWidth: "100%", padding: "1rem" }} src={html_svg} />
            <span style={{ padding: ".5rem" }}>HTML</span>
          </div>

          <div
            style={{
              display: "grid",
              placeItems: "center",
              backgroundColor: "hsl(220deg 40% 21% / 80%)",
            }}
          >
            <img
              style={{ maxWidth: "100%", padding: "1rem" }}
              src={react_svg}
            />
            <span style={{ padding: ".5rem" }}>React.js</span>
          </div>

          <div
            style={{
              display: "grid",
              placeItems: "center",
              backgroundColor: "hsl(220deg 40% 21% / 80%)",
            }}
          >
            <img style={{ maxWidth: "100%", padding: "1rem" }} src={node_svg} />
            <span style={{ padding: ".5rem" }}>Node.js</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default About;
