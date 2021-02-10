import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import PlantScreen from './screens/PlantScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='px-5 py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/plant/:id' component={PlantScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
