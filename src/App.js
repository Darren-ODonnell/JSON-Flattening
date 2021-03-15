import './App.css';
import TestPage from './TestPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">

        </header>
        <body className="App-body">
        <div>

        <div>
            <Route exact path="/" component={TestPage} />
        </div>
        </div>
        </body>
        
        
      </div>
    </Router>
  );
}

export default App;
