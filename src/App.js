import './App.css';
import Status from './Status';

function App() {
  return (
    <>
      <header>
        <img className="logo" src="/logo.png" alt="logo"/>
        <div className="logo-text">
          <h1>Carl-Benz-Gaming</h1>
          <label>Server Status</label>
        </div>
      </header>
      <Status />
    </>
  );
}

export default App;
