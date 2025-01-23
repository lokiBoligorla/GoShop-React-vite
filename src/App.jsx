
import 'react'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Categories from './Components/Category'
import Hero from './Components/Hero'
import FeaturedProducts from './Components/Featured'
import SearchBar from './Components/Search'
import Footer from './Components/Footer'
import Contact from './Components/Contact'


const App = () => {
  return (
    <div>
     <Header/> 
     <Banner/>
     <Categories/>
     <Hero/>
     <FeaturedProducts/>
     <SearchBar/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
