import React from 'react'
import useGetSet from '../hooks/useGetSet'

const Counter: React.FC = () => {

  const [get1,set1] = useGetSet(0)
  const [get2,set2] = useGetSet(0)
  return (
    <>
      <h1>count1:{get1()}</h1>
      <h1>count2:{get2()}</h1>
      <div>
        <button onClick={() => set1(get1() + 1)}>count1 +1</button>
        <button onClick={() => set2(get2() + 1)}>count2 +1</button>
      </div>
    </>
  )
}

export default Counter