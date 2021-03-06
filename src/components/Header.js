import { Card } from "react-bootstrap";
function Header(props) {
  return (
    <>
      <Card
        className="text-center border-0 bg-transparent"
        style={{ color: "yellow" }}
      >
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
export default Header;
