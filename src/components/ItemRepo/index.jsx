import { ItemContainer } from "./styles";


function ItemRepo({repo, handleRemoveRepo}) {

    const handleRemove = () => {
        handleRemoveRepo(repo.id)
    }

  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <h4>{repo.owner.login}</h4>
        <p>{repo.description}</p>
        <a href={repo.html_url} target="_blank" rel="noreferrer">Ver repositório</a><br />
        <button className="remover" onClick={handleRemove}>Remover</button>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;