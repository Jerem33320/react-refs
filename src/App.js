import FocusInput from "./components/FocusInput";
import ForwRefParentInput from "./components/ForwRefParentInput";
import UseRef from "./components/UseRef";

//REF est super pour stocker par exemple la prev value du state
function App() {
  return (
    <div className="App">
      <FocusInput /><br/>
      <ForwRefParentInput /><br/>
      <UseRef />
    </div>
  );
}

export default App;
