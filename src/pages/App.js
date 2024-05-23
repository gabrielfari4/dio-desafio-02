import { useState } from 'react';
import Logo from '../assets/github.svg'
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles';
import Button from '../components/Button';

function App() {
  const [repos, setRepos] = useState([]);



  return (
    <Container>
        <img src={Logo} width='72px' height='72px' alt='Logo do GitHub'/>
        <Input />
        <Button />
        <ItemRepo />
    </Container>
  );
}

export default App;
