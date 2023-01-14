import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import Filter from './Filter';
import Footer from './Footer';
import Main from './Main';
import Menu from './Menu';

function App() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("pizza.json")
      .then(res => res.json())
      .then(
        (result) => {
          setLoading(false);
          setData(result);
        },
        (error) => {
          setLoading(false);
          setError(error);
        }
      )
  }, [])

    return (
      <div>
        <Menu />
        <Filter />
        {
          error ? <Error /> : 
          loading ? <Loading /> : <Main data={data} />
        }
        <Footer />
      </div>
    );
}

function Loading() {
  return (
    <main className="py-5">
        <div className="container">
          <Spinner animation="border" variant="danger" />;
        </div>
    </main>
  )
}

function Error() {
  return (
    <main className="py-5">
        <div className="container">
        <Alert variant="danger">
          <Alert.Link href="#">Error 404</Alert.Link>. Data-mata yoxdur
        </Alert>
        </div>
    </main>
  )
}

export default App;
