import logo from './logo.svg';
import './App.css';
import SayHello from './components/SayHello';
import Footer from './components/Footer';
import Head from './components/Head';

function App() {
  return (

      <div className="flex-wrap justify-center p-10">
      <Head />
      <header className="text-center">
        <SayHello />

        <Footer />
      </header>
      </div>
    
  );
}

export default App;
