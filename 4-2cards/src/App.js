import Box1 from "./components/3-1boxes/box1";
import Button from "./components/4-1buttons/button";
import Quiz from "./components/3-2quiz/quiz";
import Card from "./components/4-2cards/card";

function App() {

  return (
    <div className="App">
      {/* <Box1/> */}
      {/* <Quiz/> */}
      {/* <Button value='Important' weight='bold'/> 
      <Button value='Not important' weight='normal'/>  */}

      
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Card imgUrl='https://source.unsplash.com/user/erondu/daily' title='Picture 1' description='Description 1' />
        <Card imgUrl='https://source.unsplash.com/WLUHO9A_xik' title='Picture 2' description='Description 2' />
        <Card imgUrl='https://source.unsplash.com/weekly?water' title='Picture 3' description='Description 3' />
      </div>
    </div >
  );
}

export default App;
