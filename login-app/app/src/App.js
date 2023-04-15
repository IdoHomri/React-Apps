function App() {
  return (
    <>
      <div className="App">Hello</div>
      <div>
        {fetch('http://localhost:8000/login').then(response => response.json().then(data => console.log(data)))}
      </div>
    </>
  );
}

export default App;
