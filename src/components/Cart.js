import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove } from '../store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart);

    const removeItem = (id) => {
        dispatch(remove(id));
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
                    <Button variant="danger" onClick={() => removeItem(product.id)}>Remove item</Button>
                </Card.Footer>
            </Card>
        </div>
        ))

    return (
        <div className='row'>
        <h2>Cart Page</h2>
        {cards}
        </div>
    )
}

export default Cart
