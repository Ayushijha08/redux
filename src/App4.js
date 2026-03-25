import React, { Component, useState } from 'react'


// const App4 = ({name}) => { // this App4 is a functional component in react
// const [count, setCount] = useState(0)
// const [age, setAge] = useState(0)
//   return (
//     <div>App4: {name}, {state}</div>
//   )
// }

{/* <App4 name="Ayushi" /> */}

class App4 extends Component {  // App4 is the class based component of react
    constructor () {
        super()
        this.state = { count: 0, age: 0 } 
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    increseAge = () => {
        this.setState({age: this.state.age + 1})
    }

    render() {  
        return <div>App4 {this.props.name}, {this.props.age} {this.props.address}
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <h1>Age: {this.state.age}</h1>
        <button onClick={this.increseAge}>Increase age</button>
        </div>  // props -> it's an object
    }
    // props = {name: "Aysuhi"}
}

export default App4





class Animal {
    barks() {
        console.log('It barks');
    }
    hasLegs = true;
    walks() {
        console.log(this.hasLegs);
    }
}

// const dog = new Animal();
// dog.barks()