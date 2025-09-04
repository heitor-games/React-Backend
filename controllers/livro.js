const { getTodosLivros, getLivroId, insereLivro, editaLivro, deleteLivro } = require('../services/livro')

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)){
            const livro = getLivroId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send("ID inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res){
    try {
        const livroNovo = req.body
        if(req.body.nome) {
            insereLivro(livroNovo)
            res.status(201)
            res.send("livro inserido com sucesso!")
        } else{
            res.status(422)
            res.send("O campo Nome é obrigatório!")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res){
    try {
        const id = req.params.id

        if(id && Number(id)){
            const body = req.body

            editaLivro(body, id)
            res.send("item Modificado com Sucesso!")
        } else {
            res.status(422)
            res.send("ID Inválido")
        }
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function delLivro(req, res){
    try {
        const id = req.params.id

        if(id && Number(id)){ 
            deleteLivro(id)
            res.send(`Item id número ${id} excluído com sucesso!`)
        } else {
            res.status(422)
            res.send("ID Inválido")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    delLivro
}