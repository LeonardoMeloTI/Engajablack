import api from "../api";

export async function saveContato(contato) {
  await api.post("/contatos", 
  {
    email: contato.email,
    mensagem: contato.mensagem
  })
}

export async function getContatos() {
  return (await api.get('/contatos')).data
}

export async function deleteContato(id) {
  await api.delete(`/contatos/${id}`)
}

export async function updateContato(contato) {
  await api.put("/contatos/", {
      id: contato.id,
      email: contato.email,
      mensagem: contato.mensagem
  })
}