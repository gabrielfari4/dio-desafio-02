import Logo from '../assets/github.svg'
import Input from '../components/Input';
import { Container } from './styles';

function App() {
  return (
    <Container>
        <img src={Logo} width='72px' height='72px' alt='Logo do GitHub'/>
        <Input />
    </Container>
  );
}

export default App;
