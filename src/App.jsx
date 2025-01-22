
import 'react'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Categories from './Components/Category'
import Hero from './Components/Hero'
import FeaturedProducts from './Components/Featured'
import SearchBar from './Components/Search'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div>
     <Header/> 
     <Banner/>
     <Categories/>
     <Hero/>
     <FeaturedProducts/>
     <SearchBar/>
     <Footer/>
    </div>
  )
}

export default App
