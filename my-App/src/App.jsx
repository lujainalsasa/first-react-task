import "./App.css";
import Navbar from "./Navbar";
import Posts from "./posts";

const App = () => {
  return (
    <div className="main-container" style={{ backgroundColor: "aliceblue" }}>
      <Navbar />
      <Posts />
    </div>
  );
};
export default App;
