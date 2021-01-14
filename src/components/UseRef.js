import React, {useState, useEffect, useRef} from 'react'

export default function UseRef() {
  const [name, setName] = useState('')
  // const renderCount = useRef(1)
  // const inputRef = useRef()
  const prevName = useRef()

  useEffect(() => {
    // le fait dutiliser des Refs evite le rerender du State !!!
    // renderCount.current = renderCount.current + 1
    prevName.current = name
  }, [name])

  // function focus(){
  //   // console.log(inputRef.current);
  //   inputRef.current.focus()
  // }

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name} and it used to be {prevName.current}</div>    
      {/* <div> I rendered {renderCount.current} times.</div> */}
      {/* <button onClick={focus}>Focus</button> */}
    </div>
  )
}
