import "./App.css";
import StarRating from "./star-rating.component";

function App() {
  return (
    <>
      <div>
        <h1>Hey, React</h1>
        <StarRating />
        <StarRating maxRating={10} />
        <StarRating maxRating={15} />
      </div>
    </>
  );
}

export default App;
