import api from "../api";


export async function saveProduto(produto) {
  await api.post("/produtosvendedor", 
  {
    nomeProduto: produto.nomeProduto,
    preco: produto.preco
  })
}

export async function getProdutos() {
  return (await api.get('/produtosvendedor')).data
}

export async function deleteProduto(id) {
  await api.delete(`/produtosvendedor/${id}`)
}

export async function updateProduto(produto) {
  await api.put("/produtosvendedor/", {
      id: produto.id,
      nomeProduto: produto.nomeProduto,
      preco: produto.preco
  })
}