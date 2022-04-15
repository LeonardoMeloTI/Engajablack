import api from "../api";

export async function saveDenuncia(denuncia) {
  await api.post("/denuncias", {
    nome: denuncia.nome,
    telefone: denuncia.telefone,
    email: denuncia.email,
    ocorrido: denuncia.ocorrido
  })
}

export async function getDenuncias() {
  return (await api.get('/denuncias')).data
}

export async function deleteDenuncia(id) {
  await api.delete(`/denuncias/${id}`)
}

export async function updateDenuncia(denuncia) {
  await api.put("/denuncias/", {
      id: denuncia.id,
      nome: denuncia.nome,
      telefone: denuncia.telefone,
      email: denuncia.email,
      ocorrido: denuncia.ocorrido
  })
}