import './App.css';
import {useState} from 'react'
import Tab from './components/Tab'
function App() {
  const [tab,setTab] = useState([
  {label:"Tab 1", content:"Tab 1 content is here."},
  {label:"Tab 2", content:"Tab 2 content is here."},
  {label:"Tab 3", content:"Tab 3 content is here."},
  {label:"Tab 4", content:"Tab 4 content is here."}
  ])


  return (
    <fieldset className="App">
      <legend>Tabs</legend>
      <Tab tab={tab}/>
    </fieldset>
  );
}

export default App;
