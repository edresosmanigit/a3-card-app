import { buildDeck } from "./helpers";
import Card from "./card";

function App() {
  return (
    <div>
      <h1>Card App</h1>
      <Card suit="Hearts" num="2" picked={true} onClick={() => {}} />
    </div>
  );
}

export default App;