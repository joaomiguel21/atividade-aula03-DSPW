// 1. Importando o array de livros da nossa "base de dados"
const livros = require('./biblioteca');

// ------------------------------------------------------------------------
// ATIVIDADE 1: Encontrar livros de um gênero específico
//
// Crie uma função (modelo tradicional) que aceite um gênero como parâmetro
// e retorne um novo array com todos os livros desse gênero.
// ------------------------------------------------------------------------


// Sua vez
function encontrarLivrosPorGenero(Xgenero){ // Colocou o parametro com o intuito de ser genero a ser buscado.
    return livros.filter(function(Xlivro){ //  Filtra a lista "livros" onde dentro da filtragem tem um função.
        return Xlivro.genero === Xgenero}); // Função essa que tem o parametro sendo o livro para verificar e retornar o livro que o genero dele é o mesmo que o genero informado na função anterior.
}

// Teste da Atividade 1
console.log('--- Atividade 1: Livros de Ficção Científica (Função Tradicional) ---');
 const livrosDeFiccao = encontrarLivrosPorGenero('Ficção Científica');
 console.log(livrosDeFiccao);


// ------------------------------------------------------------------------
// ATIVIDADE 2: Refatorando com Arrow Function
//
// Faça a mesma função da Atividade 1, mas agora usando Arrow Function.
// ------------------------------------------------------------------------


// Sua vez
const encontrarLivrosPorGeneroArrow = (Xgenero) => livros.filter((livro) => livro.genero === Xgenero);


// Teste da Atividade 2
console.log('\n--- Atividade 2: Livros de Distopia (Arrow Function) ---');
 const livrosDeDistopia = encontrarLivrosPorGeneroArrow('Distopia');
 console.log(livrosDeDistopia);


// ------------------------------------------------------------------------
// ATIVIDADE 3: Criar uma lista de títulos
//
// Crie uma função que retorne um novo array contendo apenas os títulos
// de todos os livros da biblioteca.
// ------------------------------------------------------------------------


// Sua vez
const obterApenasTitulos = () => livros.map((livro) => livro.titulo);


// Teste da Atividade 3
console.log('\n--- Atividade 3: Lista de todos os títulos ---');
 const todosOsTitulos = obterApenasTitulos();
 console.log(todosOsTitulos);


// ------------------------------------------------------------------------
// ATIVIDADE 4 (DESAFIO): Livros de autores específicos publicados após um certo ano
//
// Crie uma função que aceite o nome de um autor e um ano como parâmetros.
// A função deve retornar um array com os livros desse autor publicados
// DEPOIS do ano especificado.
// Dica: você precisará encadear (usar um após o outro) os métodos filter.
// ------------------------------------------------------------------------


// Sua vez
const livrosDeAutorAposAno = (Xautor, Xano) => livros.filter((Xlivro) => Xlivro.autor === Xautor && Xlivro.anoPublicacao > Xano);


// Teste da Atividade 4
console.log('\n--- Atividade 4: Livros de J.R.R. Tolkien publicados após 1950 ---');
 const livrosTolkienPos1950 = livrosDeAutorAposAno('J.R.R. Tolkien', 1950);
 console.log(livrosTolkienPos1950);



// ------------------------------------------------------------------------
// ATIVIDADE 5: Criando Cartões de Apresentação com Desestruturação
//
// O objetivo agora é criar uma função que gere "cartões" de apresentação
// para os livros. Cada cartão será uma string com o formato:
// "Título: [TÍTULO] | Autor: [AUTOR] | Ano: [ANO DE PUBLICAÇÃO]"
//
// Para tornar o código mais limpo, você deve usar a DESESTRUTURAÇÃO
// para extrair as propriedades 'titulo', 'autor' e 'anoPublicacao'
// de cada objeto livro diretamente no parâmetro da função do .map().
// ------------------------------------------------------------------------


// Sua vez
const criarCartoesDeLivros = () => console.log(livros.map((Xlivro) => "Título: " + Xlivro.titulo + " | " + "Autor: " + Xlivro.autor + " | " + "Ano: " + Xlivro.anoPublicacao ))

  
// Teste da Atividade 5
console.log('\n--- Atividade 5: Cartões de Apresentação dos Livros ---');
 const cartoes = criarCartoesDeLivros();
 console.log(cartoes);