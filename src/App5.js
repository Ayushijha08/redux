import React, { useState } from 'react'
import App4, { App6 } from './class-based-comp/App4'

const App5 = () => {
    const [show, setShow] = useState(true)
  return (
    <div>
        {/* {show && <App4 />} */}
        {show && <App6 />}
        <button onClick={() => setShow(!show)}>Toggle App4</button>
    </div>
  )
}

export default App5