import './App.css';
import  Header from './components/Header/Header';
import Button from './components/Button';
import Text from './components/Text';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <Header title={'Syimyk'} />
    <Text />
    <Button title={'Click me'} />
    <Button title={'Follow'} />
    <Footer />
    </div>
  );
}

export default App;
