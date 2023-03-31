import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import Gallerie from './components/Gallerie';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <main>
    <Gallerie nomeSerie='Fast&Furious' titoloRiga='Trending Now'/>
    <Gallerie nomeSerie='Lucifer' titoloRiga='Watch It Again'/>
    <Gallerie nomeSerie='Lupin' titoloRiga='New Releases'/>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
