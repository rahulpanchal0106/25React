import './App.css'
import Accordion from './components/Accordion/Accordion'
import GenColor from './components/GenRandomColor/GenColor'
import ImgSlider from './components/ImgSlider/ImgSlider'
import LoadMore from './components/LoadMore/LoadMore'
import Rating from './components/StarRating/Rating'
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

      {/* Star rating */}
      <br/>
      <Rating noOstars={5}/>
      <br/>

      {/* Image Slider */}
      <br/>
      <ImgSlider
        url={"https://picsum.photos/v2/list"}

        limit={"10"}
      />
      <br/>

      {/* Load More Button */}
      <br/>
      <LoadMore/>
      <br/>
    </>
  )
}

export default App
