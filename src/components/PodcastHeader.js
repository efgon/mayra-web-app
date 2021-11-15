import { Card } from "react-bootstrap";

function PodcastHeader(props) {
  return (
    <>
      <Card className="text-center border-0 bg-transparent " style={{}}>
        <Card.Body>
          <Card.Text as="h1" style={{ fontSize: "3rem" }}>
            {props.text}
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={props.src} style={{}} />
      </Card>
    </>
  );
}
export default PodcastHeader;
