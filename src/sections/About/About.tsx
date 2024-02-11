import { styles } from "../../assets/styles/styles";
import { colors } from "../../assets/colors/colors";
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

      <div
        style={{
          backgroundColor: "black",
          marginTop: "4rem",
          color: colors.textColor.gray,
          padding: "2rem",
          boxShadow: styles.neon,
          width: "100%",
          maxWidth: "1000px",
          justifySelf: "center",
        }}
      >
        <h3
          style={{
            fontSize: "1.5rem",
            marginBottom: "2rem",
            color: colors.textColor.white,
          }}
        >
          Techstack
        </h3>

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
