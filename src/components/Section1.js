import React from 'react'
import {Card, Button} from 'react-bootstrap';

export default function section1(){
    return(
        <>
        <Card body id="section1" className="position-relative">
        <div className="shadow-lg p-3 mb-5 bg-body rounded bg-white border rounded-3 px-4 py-5 overflow-hidden position-absolute top-50 start-50 translate-middle text-center">
        <h1 className="overflow-hidden">
            CONSULTORIA TRIBUTÁRIA & SOCIETÁRIA QUALIFICADA
            </h1>
        <Button id="button" variant="danger" className="text-center mt-4 fw-bold">SAIBA MAIS</Button>
        </div>
        </Card>

        
        </>
    )
}