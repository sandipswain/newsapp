import "./index.css";
import Button from "./Components/Button";
import Loading from "./Components/Loading";
import NewsItem from "./Components/NewItem";

export default function App() {
  return (
    <div className="App">
      <Button />
      <Loading />
      <NewsItem />
    </div>
  );
}
