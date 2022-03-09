import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function section2(){
    return(
        <>
        <div id="section2">
        
        <h1 className="text-center mt-5">SERVIÇOS</h1>

        <Card body style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's contenth.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

        </div>
        </>
    )
}