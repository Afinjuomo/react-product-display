import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { add } from "../store/cartSlice";
import StatusCode from '../utils/StatusCode';

const Product = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading'); // Added status state

  useEffect(() => {
    // Fetch products from the API
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(result => {
        setProducts(result);
        setStatus('success'); // Set status to success when data is loaded
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setStatus('error'); // Set status to error if there's an error
      });
  }, []);

  if (status === StatusCode.LOADING) {
    return <p>Loading....</p>;
  } else if (status === StatusCode.ERROR) {
    return <Alert key="danger" variant='danger'>Something went wrong! Try again later</Alert>;
  }

  const addToCart = (product) => {
    // Dispatch an add action with the selected product
    dispatch(add(product));
  };

  const cards = products.map(product => (
    <div key={product.id} className='col-md-3' style={{ marginBottom: '10px' }}>
      <Card className='h-100'>
        <div className='text-center'>
          <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            INR: {product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: 'white' }}>
          <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className='row'>
        {cards}
      </div>
    </>
  );
};

export default Product;
