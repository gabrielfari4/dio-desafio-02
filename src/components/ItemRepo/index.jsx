import { ItemContainer } from "./styles";


function ItemRepo() {
  return (
    <ItemContainer>
        <h3>Gabriel</h3>
        <p>Teste</p>
        <a href="#" className="">Ver repositório</a><br />
        <a href="#" className="remover">Remover</a>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;