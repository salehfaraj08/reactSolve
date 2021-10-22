import React from "react";
import CheckBox from "./components/checkboxes/checkbox";

const App = () => {
  return (<div>
    <CheckBox isChecked={false} text='I read the term of the app' />
    <CheckBox isChecked={false} text='I accept the term of the app' />
    <CheckBox isChecked={true} text='I want to get the weekly news letter' />
    <CheckBox isChecked={true} text='I want to get sales and offers' />
  </div>);
}

export default App;

