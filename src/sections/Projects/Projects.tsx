import {
  css_svg,
  html_svg,
  js_svg,
  node_svg,
  react_svg,
  ts_svg,
  next,
  mongoDB,
  tailwind,
  google_maps,
  tanstack,
  csharp,
  aspnet,
  bootstrap,
  mssql,
  java,
  android,
  python,
  cplusplus,
  firebase,
} from "../../assets/images";
import Card from "../../components/Card/Card";
import { TechStack } from "../../components/TechStack/TechStack";

const climbTrackerTechStack = [
  { name: "TypeScript", src: ts_svg },
  { name: "Next.js", src: next },
  { name: "Node.js", src: node_svg },
  { name: "MongoDB", src: mongoDB },
  { name: "Tailwind", src: tailwind },
  { name: "Google Maps API", src: google_maps },
  { name: "Tanstack query", src: tanstack },
  { name: "HTML", src: html_svg },
];

const spotifyTechStack = [
  { name: "Javascript", src: js_svg },
  { name: "React.js", src: react_svg },
  { name: "Node.js", src: node_svg },
  { name: "CSS", src: css_svg },
  { name: "HTML", src: html_svg },
];

const jokesAppTechStack = [
  { name: "C#", src: csharp },
  { name: "ASP.NET", src: aspnet },
  { name: "MSSQL", src: mssql },
  { name: "Bootstrap", src: bootstrap },
  { name: "CSS", src: css_svg },
  { name: "HTML", src: html_svg },
];

const droneZoneTechStack = [
  { name: "Java", src: java },
  { name: "Android studio", src: android },
  { name: "Python", src: python },
  { name: "C++", src: cplusplus },
  { name: "Firebase", src: firebase },
];

function Projects() {
  return (
    <>
      <h2 style={{ color: "red" }}>Projects</h2>
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
            <Card.Description>
              <TechStack
                title="Technologies used in this project"
                technologies={climbTrackerTechStack}
              />
            </Card.Description>
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
            <Card.Description>
              <TechStack
                title="Technologies used in this project"
                technologies={spotifyTechStack}
              />
            </Card.Description>
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
            <Card.Description>
              <TechStack
                title="Technologies used in this project"
                technologies={jokesAppTechStack}
              />
            </Card.Description>
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
            <Card.Description>
              <TechStack
                title="Technologies used in this project"
                technologies={droneZoneTechStack}
              />
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Grid>
    </>
  );
}

export default Projects;
