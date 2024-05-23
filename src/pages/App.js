import { useState } from 'react';
import Logo from '../assets/github.svg'
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles';
import Button from '../components/Button';
import { api } from '../services/api';

function App() {
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState('');

  const handleSearch = async () => {
    try {
      const {data} = await api.get(`repos/${currentRepo}`)
      console.log(data)
  
      if (data.id) {

        const isOnly = repos.find(repo => repo.id === data.id)

        if (!isOnly){
          setRepos(prev => [...prev, data])
          setCurrentRepo(currentRepo.split('/')[0] + "/")
          return
        } else {
          alert("Repositório já foi buscado")
          return
        }
      }
    } catch (e) {
      alert('Repositório não encontrado')
      console.error(e);
    }
  } 

  const handleRemoveRepo = (id) => {
    console.log(id)

    setRepos(repos.filter(repo => repo.id !== id))
  }


  return (
    <Container>
        <img src={Logo} width='72px' height='72px' alt='Logo do GitHub'/>
        <Input value={currentRepo} onChange={e => setCurrentRepo(e.target.value)}/>
        <Button onClick={handleSearch}/>
        {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
