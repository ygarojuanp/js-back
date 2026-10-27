import Livro from "./Livro.js";

//Herança que herdas as propriedades da class Livro
class LivroEspecial extends Livro{
    constructor(titulo, autor, ano, categoria){
        super(titulo, autor, ano);
        this.categoria = categoria;
    }

    exibirInfor(){
        return `[${this.categoria.toUpperCase()}] ${super.exibirInfor()}`;
    }
}

export default LivroEspecial;