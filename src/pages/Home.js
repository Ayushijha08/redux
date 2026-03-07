import React, { useRef, useState } from 'react'
// import sum from '../helpers/sum';
console.log('Outside home page');


// Dynamic imports -> import only when it is required. Otherwise don't.
const Home = () => {
  // console.log('Home page');
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [res, setRes] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof num1, typeof num2);
    // dynamic import of sum.js
    import('../helpers/sum').then(module => {  // module refers to a default obj that has all the values which has been declared at sum.js
      //setRes(module.default(Number(num1), Number(num2))) // if the fnc is a default export, then u have to write module.export
      // setRes(module.addBy10(Number(num1)))   // if the fnc is a named export, then u can do module.fnc_name

      const sum = module.default(+refNum1.current.value, +refNum2.current.value)   // + => Unary plus operator
      console.log('sum: ', sum);
      setRes(sum)
    })

  }


  // useRef hook -> useRef is used to take reference of an element. It doesn't cause re-render of the current component.
  // usecase -> it prohibits the unnecessary re-renders in your application.
  // it enables u to do DOM manipulation in react.

  const refNum1 = useRef();
  // const refNum1 = <input ref={refNum1} type='number' placeholder='Enter num1'/>
  const refNum2 = useRef();

  console.log('refNum1', refNum1.current);
  // console.log('refNum2', refNum2.current.value);

  const inputVal = 2

  function handleFocus() {
    console.log('inside focus');
    refNum1.current.focus()
  }
  return (
    <div>Home
      <form onSubmit={handleSubmit}>
        {/* <input value={num1} type='number' placeholder='Enter num1' onChange={(e) => setNum1(e.target.value)} />
        <input value={num2} type='number' placeholder='Enter num2' onChange={(e) => setNum2(e.target.value)} /> */}

        <input ref={refNum1} type='number' placeholder='Enter num1' />
        <input ref={refNum2} type='number' placeholder='Enter num2' />
        <button type='submit'>Sum</button>
        <h2>Sum: {res}</h2>
        <button type='button' onClick={handleFocus}>Focus on 1st input</button>
      </form>

    </div>
  )
}

export default Home