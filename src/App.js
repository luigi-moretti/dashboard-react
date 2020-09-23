import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import GraficoBarras from './components/graficoBarras';
import GraficoPizza from './components/graficoPizza';
import Deck from './components/deck';

function App() {
  return (
   <Container>
     <h1>Ecommerce Dashboard</h1>
     <Deck/>
     <GraficoBarras/>
     <GraficoPizza/>
   </Container>
  );
}

export default App;
