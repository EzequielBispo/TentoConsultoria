import React from 'react'
import { Card, Button, Col, Row, Container } from 'react-bootstrap'

export default function section2(){
    return(
        <>
        <Container id="section2">
        
        <h1 className="text-center mt-5">SERVIÇOS</h1>

          <Row>
              <Col className="mt-5 d-inline-flex">
          <Card body style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Planejamento Societário</Card.Title>
          <Card.Text>
          O planejamento Societário é um processo que envolve em muitos casos o Tributário, pois a eficiência de um negócio muitas vezes está ligada a divisão de linhas produtivas, plantas etc.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

        <Card body style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Planejamento Tributário</Card.Title>
          <Card.Text>
          Nós fazemos um trabalho voltado ao negócio específico de nossos clientes, desde a análise minuciosa em um NCM de entrada até as saídas por regiões. Esse planejamento economicamente falando é o mais indicado em qualquer tipo de negócio, pois o retorno é imediato.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

            <Card body style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Revisão Tributária</Card.Title>
          <Card.Text>
          Diferentemente da Recuperação de créditos tributários, a Revisão Tributária é contratada para que possamos rastrear possíveis erros de nomenclaturas ou NCM´s para que haja uma correção daquele momento em diante, não voltando ao prazo prescricional de créditos.          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
              </Col>
          </Row>
        </Container>
        </>
    )
}