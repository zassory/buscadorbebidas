import { Container } from "react-bootstrap";
import { Formulario , ListadoBebidas } from './components';
import { CategoriasProvider } from './context/CategoriasProvider';
import { BebidasProvider } from './context/BebidasProvider';

export const App = () => {
  

  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Buscador de Bebidas</h1>
        </header>

        <Container className="mt-5">
            <Formulario />

            <ListadoBebidas />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  )
}
