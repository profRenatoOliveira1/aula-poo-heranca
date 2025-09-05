// importando as classes para podermos usar no arquivo
import Aluno from "./Aluno.js";
import Professor from "./Professor.js";

// instanciando professor
let prof: Professor = new Professor(
    "Mariane Brenda Antonella da Rocha",
    12105321739,
    "mariane_darocha@autbook.com",
    51518918
);

// instanciando aluno
let a1: Aluno = new Aluno(
    "Natália Antônia Maria Ramos",
    26152756235,
    "natalia_antonia_ramos@live.com",
    34454889
);

// instanciando aluno
let a2: Aluno = new Aluno(
    "Kevin Leandro Nascimento",
    86795767272,
    "kevin-nascimento88@diclace.com.br",
    1785648
);

prof.apresentar(); // chamando método apresentar do objeto professor
prof.darAula(); // chamando método darAula do objeto professor

a1.apresentar();  // chamando método apresentar do objeto aluno
a1.estudar();   // chamando método estudar do objeto aluno

a2.apresentar();  // chamando método apresentar do objeto aluno
a2.estudar();  // chamando método estudar do objeto aluno