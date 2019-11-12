import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App =() => {

   const [personState,setPersonState] =   useState({

            persons: [
                {name: 'Amit', age: 28},
                {name: 'Manu', age: 29},
                {name: 'Bappa', age: 26}
            ]

        }
    );

   const [otherState, setOtherstate] = useState('some other state');

  console.log(personState,otherState);

  const switchNameHandler = () => {
      //DO NOT DO LIKE THIS :  this.state.persons[0].name='Amit Datta';
      setPersonState({
          persons: [
              {name: 'Amit Datta', age: 28},
              {name: 'Manu', age: 29},
              {name: 'Bappa', age: 27}
          ]
      });
  };

    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p>This is really working!!</p>

          <button onClick={switchNameHandler}>Switch Name</button>
          <Person name={personState.persons[0].name}
                  age={personState.persons[0].age}/>
          <Person name={personState.persons[1].name}
                  age={personState.persons[1].age}/>
          <Person name={personState.persons[2].name}
                  age={personState.persons[2].age}/>
      </div>

    );

};

export default App;



