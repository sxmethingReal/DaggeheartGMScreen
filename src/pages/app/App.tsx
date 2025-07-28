import { Card } from "react-bootstrap";
import { useApp } from "./hooks/useApp";
import { MasonryBoard } from "../../components/masonry/board/MasonryBoard";
import "../../i18n";

function App() {
  const hook = useApp();

  return (
    <Card className="d-flex align-items-center justify-content p-4">
      <MasonryBoard cards={hook.cards} />
    </Card>
  );
}
export default App;
