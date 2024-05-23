import Logo from '../assets/github.svg'
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles';

function App() {
  return (
    <Container>
        <img src={Logo} width='72px' height='72px' alt='Logo do GitHub'/>
        <Input />
        <ItemRepo />
    </Container>
  );
}

export default App;
