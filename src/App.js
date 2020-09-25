import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import GraficoBarras from './components/graficoBarras';
import Deck from './components/deck';
import GraficoDetalhes from './components/graficoDetalhe';
import FormFiltro from './components/formFiltro/FormFiltro';

class App extends Component {


  render(){
    return (
     <Container className='my-3'>
       <h1>Ecommerce Dashboard</h1>
       <Deck className='my-3' />
       <GraficoBarras className='my-3'/>
       <FormFiltro className='mt-3'/>
       <GraficoDetalhes className='my-3'/>
     </Container>
    );
  }
}

export default App;
