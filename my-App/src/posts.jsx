import { Container, Row, Col, Card } from "react-bootstrap";
import Post from "./post";

const Posts = () => {
  return (
    <Container>
      <Row className="posts justify-content-between">
        <Col md={8} className="mb-4 mt-4">
          <Post />
        </Col>
        <Col md={4} className="mt-4 float-right">
          <Card>
            <Card.Body>
              <Card.Title>Recent Posts</Card.Title>
              <ul>
                <li>
                  <a href="#">Gaza</a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8} className="mb-4">
          <Post />
        </Col>
        <Col md={8} className="mb-4">
          <Post />
        </Col>
        <Col md={8} className="mb-4">
          <Post />
        </Col>
      </Row>
    </Container>
  );
};

export default Posts;
