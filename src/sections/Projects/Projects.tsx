import emotionStyled from "@emotion/styled";
import * as icons from "../../assets/images";
import Card from "../../components/Card/Card";
import { TechStack } from "../../components/TechStack/TechStack";
import { styles } from "../../assets/styles/styles";
import Link from "../../components/Link/Link";

const climbTrackerTechStack = [
  { name: "TypeScript", src: icons.ts_svg },
  { name: "Next.js", src: icons.next },
  { name: "Node.js", src: icons.node_svg },
  { name: "MongoDB", src: icons.mongoDB },
  { name: "Tailwind", src: icons.tailwind },
  { name: "Google Maps API", src: icons.google_maps },
  { name: "Tanstack query", src: icons.tanstack },
  { name: "HTML", src: icons.html_svg },
];

const spotifyTechStack = [
  { name: "Javascript", src: icons.js_svg },
  { name: "React.js", src: icons.react_svg },
  { name: "Node.js", src: icons.node_svg },
  { name: "Spotify API", src: icons.spotify },
  { name: "CSS", src: icons.css_svg },
  { name: "HTML", src: icons.html_svg },
];

const jokesAppTechStack = [
  { name: "C#", src: icons.csharp },
  { name: "ASP.NET", src: icons.aspnet },
  { name: "MSSQL", src: icons.mssql },
  { name: "Bootstrap", src: icons.bootstrap },
  { name: "CSS", src: icons.css_svg },
  { name: "HTML", src: icons.html_svg },
];

const signInTechStack = [
  { name: "JavaScript", src: icons.js_svg },
  { name: "Node.js", src: icons.node_svg },
  { name: "MySQL", src: icons.mysql },
  { name: "Bootstrap", src: icons.bootstrap },
  { name: "Tanstack table", src: icons.tanstack },
  { name: "HTML", src: icons.html_svg },
  { name: "CSS", src: icons.css_svg },
];

const devRoom = [
  { name: "TypeScript", src: icons.ts_svg },
  { name: "Firebase", src: icons.firebase },
  { name: "HTML", src: icons.html_svg },
  { name: "CSS", src: icons.css_svg },
];

const calculator = [
  { name: "JavaScript", src: icons.js_svg },
  { name: "TypeScript", src: icons.ts_svg },
  { name: "HTML", src: icons.html_svg },
  { name: "CSS", src: icons.css_svg },
];
const droneZoneTechStack = [
  { name: "Java", src: icons.java },
  { name: "Android studio", src: icons.android },
  { name: "Python", src: icons.python },
  { name: "C++", src: icons.cplusplus },
  { name: "Firebase", src: icons.firebase },
];

const ProjectHeader = emotionStyled.h2({
  color: "black",
  fontSize: "3rem",
  textAlign: "center",
  marginTop: "25%",
  marginBottom: "15%",
  lineHeight: "0",
  textShadow: styles.neon,
  textDecoration: "underline",
  textDecorationStyle: "wavy",
});

const Projects = () => {
  return (
    <div id="projects">
      <ProjectHeader>Projects</ProjectHeader>

      <Card.Grid>
        <Card>
          <Card.Title>ClimbTracker</Card.Title>
          <Card.Content>
            <Card.Description>
              Your ultimate companion for tracking your climbing progress!
              Whether you're a seasoned climber or just starting out,
              ClimbTracker is designed to help you reach new heights and conquer
              your climbing goals.
            </Card.Description>
            <Card.Description>
              The key features include logging climbing attempts, monitoring
              improvements, finding nearby gyms, registering with Google
              accounts, and unlocking achievements.
            </Card.Description>
            <Link
              variant="secondary"
              size="medium"
              href="https://github.com/eddiepeters00/ClimbTracker"
              target="_blank"
            >
              Check it out on GitHub!
            </Link>
            <TechStack
              title="Technologies used in this project"
              technologies={climbTrackerTechStack}
            />
          </Card.Content>
        </Card>

        <Card>
          <Card.Title>Spotify App</Card.Title>
          <Card.Content>
            <Card.Description>
              Streamline your Spotify experience with this innovative app
              designed to effortlessly filter through your playlists.
            </Card.Description>
            <Card.Description>
              I created this app with Spotifys API to handle my very long
              spotify playlists. I came up with the idea one day when i felt
              like only listen to rock songs from one of my playlists that
              consists of several different genres.
            </Card.Description>
            <Link
              variant="secondary"
              size="medium"
              href="https://github.com/eddiepeters00/spotifyApp"
              target="_blank"
            >
              Check it out on GitHub!
            </Link>
            <TechStack
              title="Technologies used in this project"
              technologies={spotifyTechStack}
            />
          </Card.Content>
        </Card>

        <Card>
          <Card.Title>Jokes App</Card.Title>
          <Card.Content>
            <Card.Description>
              This web application is built using C# and ASP.NET, following the
              Model-View-Controller (MVC) pattern. This app is a platform where
              users can sign in, create, view, edit, and delete jokes. It
              provides a fun and interactive space for users to share their
              humor with others.
            </Card.Description>
            <Card.Description>
              This is my first application created with C# and ASP.NET.
            </Card.Description>
            <Link
              variant="secondary"
              size="medium"
              href="https://github.com/eddiepeters00/JokesApp"
              target="_blank"
            >
              Check it out on GitHub!
            </Link>
            <TechStack
              title="Technologies used in this project"
              technologies={jokesAppTechStack}
            />
          </Card.Content>
        </Card>

        <Card>
          <Card.Title>React signin/register app</Card.Title>
          <Card.Content>
            <Card.Description>
              My first react app. A sign-in/register application with an Express
              server and a mysql database. Frontend is built with Bootstrap and
              Tanstack table.
            </Card.Description>

            <Link
              variant="secondary"
              size="medium"
              href="https://github.com/eddiepeters00/React-sign-in-app"
              target="_blank"
            >
              Check it out on GitHub!
            </Link>
            <TechStack
              title="Technologies used in this project"
              technologies={signInTechStack}
            />
          </Card.Content>
        </Card>

        <Card>
          <Card.Title>DevRoom - Social media app</Card.Title>
          <Card.Content>
            <Card.Description>
              This application allows users to share posts, explore feeds, and
              view other users' profiles. Built with TypeScript, HTML, and CSS,
              this app provides a seamless and interactive experience for social
              networking.
            </Card.Description>
            <Link
              variant="secondary"
              size="medium"
              href="https://github.com/eddiepeters00/Social-media-app"
              target="_blank"
            >
              Check it out on GitHub!
            </Link>
            <TechStack
              title="Technologies used in this project"
              technologies={devRoom}
            />
          </Card.Content>
        </Card>

        <Card>
          <Card.Title>Calculator</Card.Title>
          <Card.Content>
            <Card.Description>
              If you haven't built a calculator app, can you really call
              yourself a programmer?
            </Card.Description>
            <Link
              variant="secondary"
              size="medium"
              href="https://github.com/eddiepeters00/Calculator-app"
              target="_blank"
            >
              Check it out on GitHub!
            </Link>
            <TechStack
              title="Technologies used in this project"
              technologies={calculator}
            />
          </Card.Content>
        </Card>

        <Card>
          <Card.Title>DroneZone</Card.Title>
          <Card.Content>
            <Card.Description>
              This system comprises an Android app to monitor incoming images
              from a Python-programmed drone, embedded systems configured as
              alarms to activate the drone, and a Java server to manage
              connections between all components.
            </Card.Description>
            <Card.Description>
              When an alarm is triggered, the app receives a notification,
              prompting the drone to search for a nearby individual. If the
              drone detects a person, it uses AI face recognition to track and
              photograph them. The app then receives all images from the drone,
              which the server processes. This project, developed
              collaboratively with seven classmates at Malmö University using
              agile methodologies, won the best project award at Malmö
              University in 2022. It was a fantastic experience experimenting
              with such an extensive system and learning new technologies.
            </Card.Description>
            <TechStack
              title="Technologies used in this project"
              technologies={droneZoneTechStack}
            />
          </Card.Content>
        </Card>
      </Card.Grid>
    </div>
  );
};

export default Projects;
