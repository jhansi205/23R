import logo from './logo.svg';
import Welcome from './welcome';
import './App.css';
import { Bio } from './biodata';

function App() {
  let name="jhansi"
  let mob=9490974112
  let city="hyd"
  let age=25
  return (
    <div className="App">
      <Welcome key_city={city} key_age={age}/>
    <Bio key_name={name} key_mob={mob} />
     {/* Hello */}
    
    </div>
  );
}

export default App;
