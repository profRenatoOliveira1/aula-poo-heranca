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

let a2: Aluno = new Aluno(
    "Kevin Leandro Nascimento",
    86795767272,
    "kevin-nascimento88@diclace.com.br",
    1785648
);

prof.apresentar();
prof.darAula();

a1.apresentar();
a1.estudar();

a2.apresentar();
a2.estudar();