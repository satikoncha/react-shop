import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
import StatusCode from '../utils/statusCode';

const Products = () => {

    const dispatch = useDispatch();

    const {data: products, status} = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts());
    }, [])

    if(status === StatusCode.LOADING) {
        return <h2>Loading...</h2>
    }

    if(status === StatusCode.ERROR) {
        return <Alert key="danger" variant='danger'>Something went wrong...</Alert>
    }

    const addToCart = (product) => {
        dispatch(add(product))
    }

    const cards = products.map(product => (
        <div className='col-3' style={{marginBottom: '10px'}} key={product.id}>            
            <Card className="h-100">
                <div className='text-center'>
                    <Card.Img variant="top" src={product.image} style={{width: '120px', height: '120px'}}/>
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR. {product.price }
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
        ))

  return (
    <>
        <h1>Products Head</h1>
        <div className='row'>
            {cards}
        </div>
    </>
  )
}

export default Products
