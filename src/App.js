
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"; 
import Header from './comonents/Header/Header';
import Routing from './Routing';
import Footer from './comonents/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
