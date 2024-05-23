import Logo from '../assets/github.svg'
import { Container } from './styles';

function App() {
  return (
    <Container>
        <img src={Logo} width='72px' height='72px' alt='Logo do GitHub'/>
    </Container>
  );
}

export default App;
