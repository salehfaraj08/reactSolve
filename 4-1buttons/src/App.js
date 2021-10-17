import Box1 from "./components/3-1boxes/box1";
import Button from "./components/4-1buttons/button";
import Quiz from "./components/quiz/quiz";

function App() {

  return (
    <div className="App">
      {/* <Box1/> */}
      {/* <Quiz/> */}
      <Button value='Important' weight='bold'/> 
      <Button value='Not important' weight='normal'/> 
    </div>
  );
}

export default App;
