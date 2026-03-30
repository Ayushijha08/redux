import React, { useMemo, useState } from 'react'

const UseMemo1 = () => {
    const [search, setSearch] = useState('')
    const [count, setCount] = useState(0)
    const [isMatch, setIsMatch] = useState(false)
    const arr = ['React', 'Node', 'Java', 'SQL', 'SpringBoot']
    let ans = null;
    // heavy task
    useMemo(() => {
        for (let i = 0; i < 10000; i++) { }
        ans = arr.includes(search)
        console.log('ans', ans);
        return ans;
    }, [search])



    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <input value={search} onChange={(e) => setSearch(e.target.value)} />
            {ans && <h1>{search} Matched!</h1>}
        </div>
    )
}

export default UseMemo1