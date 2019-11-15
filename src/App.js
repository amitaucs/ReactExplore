import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

   state = {
       persons: [
           {name: 'Amit', age: 28},
           {name: 'Manu', age: 29},
           {name: 'Bappa', age:26}
       ]
   }

   switchNameHandler = (newName) => {
     //DO NOT DO LIKE THIS :  this.state.persons[0].name='Amit Datta';
      this.setState({
          persons: [
              {name: newName, age: 28},
              {name: 'Manu', age: 29},
              {name: 'Bappa', age:27}
          ] })
   }


   nameChangedHandler = (event) =>{
       this.setState({
           persons: [
               {name: 'Amit', age: 28},
               {name: event.target.value, age: 29},
               {name: 'Bappa', age:27}
           ] })
   }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p>This is really working!!</p>

          <button onClick={()=>this.switchNameHandler('Bappa!!!')}>Switch Name</button>
          <Person name={this.state.persons[0].name}
                  age={this.state.persons[0].age}/>


          <Person name={this.state.persons[1].name}
                  age={this.state.persons[1].age}
                  click={this.switchNameHandler.bind(this,'Bappa')}
                  changed={this.nameChangedHandler}>

              My hobbies is Racing</Person>
          <Person name={this.state.persons[2].name}
                  age={this.state.persons[2].age}/>
      </div>

    );

  }
}

export default App;
