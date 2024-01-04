import Card from '../../Components/Card/Card';

function Projects() {
  return (
    <Card.Grid>
      <Card>
        <Card.Title>Title</Card.Title>
      </Card>
      <Card>
        <Card.Title>Title</Card.Title>
        <Card.Description>
          This is a description of one of my projects
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
