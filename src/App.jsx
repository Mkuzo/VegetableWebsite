import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Nav from './Componet/Nav'
import Home from './Pages/Home'
import About from './Pages/About'
import AppRoute from './Componet/AppRoute'
import { createContext } from 'react'
export const context = createContext()
function App() {
  const [count, setCount] = useState(0)
  const [name,setName] = useState("Valentino")
  const [store,setStore] = useState([])
  const [display,setDisplay] = useState([])
  function storage(){
    if(store.length > 0){
      localStorage.setItem('storing',JSON.stringify(store))
    }
  }
      function getting(){
       const item = JSON.parse(localStorage.getItem('storing'))
       console.log('item',item)
       setDisplay(item)
    }
  function remove(e){
    if(store.length > 0){
          const filtering = store.filter(function(pre){
          return(
              pre.id !== e.id
            )
        })
      setStore(filtering)
      console.log('removing',filtering)
      getting()
    }else{
      localStorage.removeItem('storing')
      // alert('zero')
      // getting()
      setDisplay([])
    }
  }
  useEffect(function(){
    storage()
  },[store])

  return (
    <context.Provider value={{store,setStore,remove,getting,setDisplay,display}}>
      <Nav></Nav>
      <AppRoute></AppRoute>
    </context.Provider>
  )
}
export default App
