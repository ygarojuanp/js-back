class Livro {
    #status;

    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.#status = 'Disponivel';
    }

    getStatus() {
        return this.#status;
    }

    emprestar() {
        if (this.#status === 'Disponivel') {
            this.#status = 'Emprestado';
            console.log(`${this.titulo} emprestado com sucesso!`);
        } else {
            console.log(`${this.titulo} está indisponivel no momento.`);
        }
    }

    devolver() {
        this.#status = 'Disponivel';
        console.log(`${this.titulo} foi devolvido com sucesso!`);
    }

    exibirInfor() {
        return `${this.titulo}, ${this.autor}, ${this.ano}, ${this.#status}`;
    }
}

export default Livro;
