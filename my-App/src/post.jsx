import { Card } from "react-bootstrap";

const Post = () => {
  return (
    <div className="post">
      <Card>
        <Card.Img
          variant="top"
          src="https://i.pinimg.com/564x/06/04/75/0604758ef1bddbf11473d14fb0113d35.jpg"
          width={20}
          height={250}
        />
        <Card.Body>
          <Card.Title>Palastine</Card.Title>
          <Card.Text>
            Palestine officially the State of Palestine (دولة فلسطين, Dawlat
            Filasṭīn), is a state in the Southern Levant region of West Asia
          </Card.Text>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Post;
