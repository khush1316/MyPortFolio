import Navbar from "./components/navbar/navbar";
import Intro from './components/Intro/intro';
import Skill from './components/Skills/skill';
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer"

function App() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Skill/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
