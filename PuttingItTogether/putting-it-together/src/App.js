import './App.css';
import PersonCardComponent from './components/PersonCardComponent';

function App() {
  return (
    <div className="App"> 
      



      {/* <dataHeader/> */}

      < PersonCardComponent
      firstName = "Mustafa"
      lastName = "Ahmed"
      age = { 22 }
      hairColor = "Dark Brown"
      />

      < PersonCardComponent
      firstName = "Derrick"
      lastName = "Rose"
      age = { 34 }
      hairColor = "Dark Brown"
      />

      < PersonCardComponent
      firstName = "Zach"
      lastName = "LaVine"
      age = { 27 }
      hairColor = "Dark Brown"
      />

      < PersonCardComponent
      firstName = "Steph"
      lastName = "Curry"
      age = { 34 }
      hairColor = "Brown"
      />

    </div>
  );
}



export default App;
