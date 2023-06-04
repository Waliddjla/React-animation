import { BrowserRouter as Router, Switch, Route} from "react-router-dom/cjs/react-router-dom.min";
import Navbar from './Components/Navbar/Navbar'
import Liste from './Pages/Liste/Liste'
import  Scroll from './Pages/Scroll/Scroll'
import StateAnim from './Pages/StateAnim/StateAnim'

function App() {
  return (
      <Router>
      <div className="globale-container">
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component ={Liste}></Route>
          <Route path="/StateAnim" exact component ={StateAnim}></Route>
          <Route path="/Scroll" exact component ={Scroll}></Route>
        </Switch>
      </div>

      </Router>

  );
}

export default App;
