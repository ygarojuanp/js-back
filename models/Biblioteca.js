// Abstração
class Biblioteca {
    constructor (nome){
        //Atributos da Biblioteca
        this.nome = nome;
        this.livros = [];
    }
    adicionarLivro (livro) {
        //Metados da Biblioteca
        this.livros.push(livro);
    }

    listarLivro() {
        console.log(`Livros da Biblioteca ${this.nome}`)
        this.livros.forEach((livro, i) => {
            console.log(`${i + 1}, ${livro.exibirInfor()}`);
        })
    }
}
export default Biblioteca;