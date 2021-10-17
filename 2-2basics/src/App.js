function App() {
  const data = ["hello", "world"],
    number1 = 5,
    number2 = 6,
    str = 'I love React!';
  return (
    <div className="App">
      {/* ex2-2 */}
      <p>
        {data.map(ele => <span>{ele} </span>)}
      </p>
      <p>
        {`${number1}+${number2}=${number1 + number2}`}
      </p>
      <p>
        {`The string’s length is ${str.length}`}
      </p>
    </div>
  );
}

export default App;
