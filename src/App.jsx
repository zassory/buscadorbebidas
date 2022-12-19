import { Container } from "react-bootstrap";
import { Formulario } from './components/Formulario';
import { CategoriasProvider } from './context/CategoriasProvider';

export const App = () => {
  

  return (
    <CategoriasProvider>
      <header className="py-5">
        <h1>Buscador de Bebidas</h1>
      </header>

      <Container className="mt-5">
          <Formulario>

          </Formulario>
      </Container>
    </CategoriasProvider>
  )
}
