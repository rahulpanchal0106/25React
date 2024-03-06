import './App.css'
import Accordion from './components/Accordion/Accordion'
import GenColor from './components/GenRandomColor/GenColor'
function App() {

  return (
    <>
      {/* Accordion Component */}
      <br/>
      <Accordion/>
      <br/>

      {/* Random Color Generator*/}
      <br/>
      <GenColor/>
      <br/>
    </>
  )
}

export default App
