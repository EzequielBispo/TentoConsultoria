import React from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'

export default function section2(){
    return(
        <>
        <Container id="section2" className="overflow-hidden">
        
        <h1 className="text-center mt-5 overflow-hidden">SERVIÇOS</h1>

          <Row className="position-relative overflow-hidden">
              <Col className="d-block" id="cards" style={{width: '100vw'}}>
          <Card body id="card1" className="my-5" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="text-center overflow-hidden">Planejamento Societário</Card.Title>
          <Card.Text className="text-center">
          O planejamento Societário é um processo que envolve em muitos casos o Tributário, pois a eficiência de um negócio muitas vezes está ligada a divisão de linhas produtivas, plantas etc.
          </Card.Text>
        </Card.Body>
      </Card>

        <Card body id="card2" className="my-5" style={{ width: '18rem' }}>

        <Card.Body>
          <Card.Title className="text-center overflow-hidden">Planejamento Tributário</Card.Title>
          <Card.Text className="text-center">
          Nós fazemos um trabalho voltado ao negócio específico de nossos clientes, desde a análise minuciosa em um NCM de entrada até as saídas por regiões. Esse planejamento economicamente falando é o mais indicado em qualquer tipo de negócio, pois o retorno é imediato.
          </Card.Text>
        </Card.Body>
      </Card>

          <Card body id="card3" className="my-5" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="text-center overflow-hidden">Revisão Tributária</Card.Title>
          <Card.Text className="text-center">
          Diferentemente da Recuperação de créditos tributários, a Revisão Tributária é contratada para que possamos rastrear possíveis erros de nomenclaturas ou NCM´s para que haja uma correção daquele momento em diante, não voltando ao prazo prescricional de créditos.</Card.Text>
        </Card.Body>
      </Card>
              </Col>
          </Row>
        </Container>
        </>
    )
}