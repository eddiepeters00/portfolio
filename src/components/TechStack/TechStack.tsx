import { colors } from "../../assets/colors/colors";
import { styles } from "../../assets/styles/styles";

type Props = {
  title?: string;
  technologies: { name: string; src: string }[];
};
export const TechStack = ({ title = "TechStack", technologies }: Props) => {
  return (
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
        {title}
      </h3>

      <div
        style={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
        }}
      >
        {technologies.map((tech) => (
          <div
            style={{
              display: "grid",
              placeItems: "center",
              backgroundColor: "hsl(220deg 40% 21% / 80%)",
            }}
          >
            <img style={{ maxWidth: "100%", padding: "1rem" }} src={tech.src} />
            <span style={{ padding: ".5rem" }}>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
