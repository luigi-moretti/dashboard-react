import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import GraficoBarras from './components/graficoBarras';
import Deck from './components/deck';
import GraficoDetalhes from './components/graficoDetalhe';
import GraficoPizza from './components/graficoPizza/GraficoPizza';

function App() {
  return (
   <Container>
     <h1>Ecommerce Dashboard</h1>
     <Deck/>
     <GraficoBarras/>
     <GraficoDetalhes/>
     <GraficoPizza/>
   </Container>
  );
}

export default App;
