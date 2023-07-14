import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <p> Home </p>
        </Link>
        <Link to="/PracticeHooks">
          <p> PracticeHooks </p>
        </Link>
        <Link to="/PracticeProbs">
          <p> PracticeProbs </p>
        </Link>
        <Link to="/FetchMethod">
          <p> FetchMethod </p>
        </Link>
      </header>
    </div>
  );
}

export default App;
