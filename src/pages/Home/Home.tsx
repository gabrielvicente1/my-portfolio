import Hero from './sections/Hero/Hero'
import NavBar from '../../components/NavBar/NavBar'
import AboutMe from './sections/About/About'
import Projects from './sections/Projects/Project'

const Home = () => {

    return (
      <>
      <NavBar/>
        <Hero/>
        <AboutMe/>
        <Projects/>
        </>
    )
  }
  
  export default Home
  