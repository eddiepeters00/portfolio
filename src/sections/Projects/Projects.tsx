import {
  css_svg,
  html_svg,
  js_svg,
  node_svg,
  react_svg,
} from "../../assets/images";
import Card from "../../components/Card/Card";
import { TechStack } from "../../components/TechStack/TechStack";

const techStack = [
  { name: "Javascript", src: js_svg },
  { name: "React.js", src: react_svg },
  { name: "Node.js", src: node_svg },
  { name: "CSS", src: css_svg },
  { name: "HTML", src: html_svg },
];

function Projects() {
  return (
    <Card.Grid>
      <Card>
        <Card.Title>Spotify App</Card.Title>
        <Card.Content>
          <Card.Description>
            Streamline your Spotify experience with this innovative app designed
            to effortlessly filter through your playlists.
          </Card.Description>
          <Card.Description>
            I created this app with Spotifys API to handle my very long spotify
            playlists. I came up with the idea one day when i felt like only
            listen to rock songs from one of my playlists that consists of
            several different genres.
          </Card.Description>
          <Card.Description>
            <TechStack
              title="Technologies used in this project"
              technologies={techStack}
            />
          </Card.Description>
        </Card.Content>
      </Card>

      <Card>
        <Card.Title>Spotify App</Card.Title>
        <Card.Content>
          <Card.Description>
            Streamline your Spotify experience with this innovative app designed
            to effortlessly filter through your playlists.
          </Card.Description>
          <Card.Description>
            I created this app with Spotifys API to handle my very long spotify
            playlists. I came up with the idea one day when i felt like only
            listen to rock songs from one of my playlists that consists of
            several different genres.
          </Card.Description>
          <Card.Description>
            <TechStack
              title="Technologies used in this project"
              technologies={techStack}
            />
          </Card.Description>
        </Card.Content>
      </Card>

      <Card>
        <Card.Title>Spotify App</Card.Title>
        <Card.Content>
          <Card.Description>
            Streamline your Spotify experience with this innovative app designed
            to effortlessly filter through your playlists.
          </Card.Description>
          <Card.Description>
            I created this app with Spotifys API to handle my very long spotify
            playlists. I came up with the idea one day when i felt like only
            listen to rock songs from one of my playlists that consists of
            several different genres.
          </Card.Description>
          <Card.Description>
            <TechStack
              title="Technologies used in this project"
              technologies={techStack}
            />
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Grid>
  );
}

export default Projects;
