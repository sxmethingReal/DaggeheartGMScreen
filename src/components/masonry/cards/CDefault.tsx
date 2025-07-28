import { Button, Card, Col, Row } from "react-bootstrap";
import { useCDefault } from "./hooks/useCDefault";

export function CDefault() {
  const hook = useCDefault();
  return (
    <Card className="d-flex align-items-center justify-content p-4">
      <Card.Body>
        <Card.Title className="text-center">{hook.t("welcome")}</Card.Title>
        <Card.Text className="text-center">{hook.t("description")}</Card.Text>
        <Row>
          <Col xs="auto">
            <Button
              variant="primary"
              className="mx-2"
              onClick={() => hook.changeLanguage("pt")}
            >
              {hook.t("language-pt")}
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              variant="primary"
              className="mx-2"
              onClick={() => hook.changeLanguage("en")}
            >
              {hook.t("language-en")}
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
