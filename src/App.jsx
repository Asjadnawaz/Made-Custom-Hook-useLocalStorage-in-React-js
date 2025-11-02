import React from 'react'
import useLocalStorage from './Hooks/useLocalStorage.jsx';

const App = () => {

    const [value, setValue] = useLocalStorage("Name", "Asjad");

  return (
    <>
      <h1>{value}</h1>
    </>
  )
}

export default App