// import "./App.css";
import Landing from "./components/Landing";
import { Provider } from "react-redux";
import { configStore } from "./state/configStore";

function App() {
  const myStore = configStore();
  return (
    <div className="App">
      <Provider store={myStore}>
        <Landing />
      </Provider>
    </div>
  );
}

export default App;
