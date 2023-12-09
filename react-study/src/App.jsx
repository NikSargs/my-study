import './App.css'
import Card from './components/Card'
import Err from './components/Err'
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='container'>
      <Navbar/>
      <Main/>
      <Card/>
      <Err/>
    </div>
  )
}

export default App
