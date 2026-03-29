import React, { Component, useEffect, useState } from 'react'


export const App6 = ({name}) => { // this App4 is a functional component in react
const [count, setCount] = useState(0)
const [age, setAge] = useState(0)
useEffect(() => {  // useEffect takes care of all the react lifecycle events
    console.log('invoked one time');
    let interval = setInterval(() => { // count  = 0
        setCount(prevCount => prevCount + 1)  // count is always 0, the updated count's value it not gettting accessed
        console.log('interval is running, count is', count);
        
        
    }, 1000)
    return () => { // componentWillUnmount
        console.log('App6 got unmounted');
        clearInterval(interval)
    }
}, [])

  return (

    <div>App6: {count}</div>
  )
}

{/* <App4 name="Ayushi" /> */ }

class App4 extends Component {  // App4 is the class based component of react
    constructor() {
        super()
        this.state = { count: 0, age: 0 }
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    increseAge = () => {
        this.setState({ age: this.state.age + 1 })
    }

    // componentDidMount() {
    //     // console.log('invoked one time');
    //     // this.interval = setInterval(() => {
    //     //     this.increment()
    //     // }, 1000)

    //     // setTimeout(() => {
    //     //     clearInterval(interval)
    //     // }, 8000)

    //     let incrementCount = 0;
    //     const maxIncrements = 7; // 7 increments over 8 seconds (0-7 seconds)

    //     let interval = setInterval(() => {
    //         if (incrementCount < maxIncrements) {
    //             this.increment();
    //             incrementCount++;
    //         } else {
    //             clearInterval(interval);
    //         }
    //     }, 1000);
    // }

    // componentWillUnmount() {
    //     console.log('component unmounted');
    //     if(this.state.count === 8) clearInterval(this.interval)
    // }

    componentDidUpdate(prevProp, prevState) {  // count = 4, it will run in every state changes
        console.log('count updated', this.state.count);
        if(prevState.count !== this.state.count) {
            console.log('count updated', this.state.count);
        }else if(prevState.age !== this.state.age) {
            console.log('age got updated')
        }
        if (this.state.count === 8) {
            clearInterval(this.interval)
        }
    }

    componentDidMount() {
        // it runs whenver the component gets rendered for the first time
        
        this.isMounted1 = true;
        console.log('comp mpounted outside interval', this.isMounted1);
        
        this.interval = setInterval(() => {
            console.log('comp mounted inside interval', this.isMounted1);
            if (this.isMounted1) {
                this.increment();
            }
        }, 1000);

        setTimeout(() => {
            if (this.isMounted1) {
                clearInterval(this.interval);
            }
        }, 8000);
    }

    componentWillUnmount() {
        console.log('App4 got unmounted');
        
        this.isMounted1 = false;
        console.log('App4 got unmounted', this.isMounted1);
        clearInterval(this.interval); // it is crucial
    }

    // react lifecycle events -> 1. componentDidMount, 2. componentDidUpdate & 3. componentWillUnmount

    render() {
        return <div>App4 {this.props.name}, {this.props.age} {this.props.address}
            <h1>Count:   {this.state.count}</h1>
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