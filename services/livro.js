const fs = require('fs')

function getTodosLivros() {
    return JSON.parse( fs.readFileSync("livros.json"))
}

function getLivroId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livrofiltrado = livros.filter( livro => livro.id === id )[0]
    return livrofiltrado
}

function insereLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const novaListaLivros = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros))
}

function editaLivro(modifications, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modifications }

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deleteLivro(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const filtro = livros.filter( livro => livro.id !== id)

    fs.writeFileSync("livros.json", JSON.stringify(filtro))
}

module.exports = {
    getTodosLivros,
    getLivroId,
    insereLivro,
    editaLivro,
    deleteLivro
}