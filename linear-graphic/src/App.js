import './App.css';
import './Responsive.css';
import './Mycss.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
