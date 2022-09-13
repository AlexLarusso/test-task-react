import React, {useState, useEffect} from 'react'
import { UsersCardList } from './components';
import { ModalProvider } from './components/ModalContext';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [])


  return (
    <div>
      <ModalProvider>
        <UsersCardList users={data} updateUsers={setData}/>
      </ModalProvider>
    </div>
  )
}

export default App
