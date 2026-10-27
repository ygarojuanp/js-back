import Biblioteca from "./models/Biblioteca.js";
import Livro from "./models/Livro.js";
import LivroEspecial from "./models/LivroEspecial.js";

const minhaBiblioteca = new Biblioteca('GT Bezerra');

const livro1 = new Livro('Clean Code', 'Robert C. Martins', 2008);
const livro2 = new Livro('Refatoração', 'Martin Fowler',2019);
const livro3 = new Livro('A ultima musica', 'Nicholas Sparks',2009);
const livro4 = new Livro('A Culpa é das estrelas', 'Josh Boone',2014);
const livro5 = new LivroEspecial('A Historia do Brasil', 'LULU', 1970,'Historia');


//estoque da bibliotecae.length

minhaBiblioteca.adicionarLivro(livro1);
minhaBiblioteca.adicionarLivro(livro2);
minhaBiblioteca.adicionarLivro(livro3);
minhaBiblioteca.adicionarLivro(livro4);
minhaBiblioteca.adicionarLivro(livro5);



//operação da biblioteca
livro1.emprestar();
livro2.devolver();
livro3.emprestar();
livro4.emprestar();
livro5.emprestar();

//listagem geralo(livro2);
minhaBiblioteca.listarLivro();