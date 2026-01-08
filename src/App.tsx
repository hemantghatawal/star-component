import { useState } from "react";
import "./App.css";
import StarRating from "./star-rating.component";

function App() {
  const [productRating, setProductRating] = useState<number>(0);
  return (
    <>
      <div>
        <h1>Hey, React ⚛</h1>
        <h2>This is the Rating in the App 👉 {productRating}</h2>
        <StarRating onChange={setProductRating} />
        <StarRating onChange={setProductRating} maxRating={10} />
        <StarRating onChange={setProductRating} maxRating={15} />
      </div>
    </>
  );
}

export default App;
