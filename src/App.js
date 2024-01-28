import './App.css';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Experience from './components/experience/experience';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Experience/>
    </div>
  );
}

export default App;
