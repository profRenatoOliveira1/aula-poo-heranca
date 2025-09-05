import Pessoa from "./Pessoa.js";

/**
 * Classe Aluno herda de Pessoa
 */
class Aluno extends Pessoa {
    // atributos
    private matricula: number;

    // construtor
    constructor(
        _nome: string,
        _cpf: number,
        _email: string,
        _matricula: number
    ) {
        super(_nome, _cpf, _email); // chama o construtor da classe base
        this.matricula = _matricula;
    }

    /**
     * Retorna a matricula do aluno
     * @returns Matricula do aluno
     */
    public getMatricula(): number {
        return this.matricula;
    }

    /**
     * Atribui a matricula ao aluno
     * @param _matricula 
     */
    public setMatricula(_matricula: number): void {
        this.matricula = _matricula;
    }

    /**
     * Exibe a mensagem do usuário estudando
     */
    public estudar(): void {
        console.log(`O aluno ${this.getNome()} está estudando!`);
    }
}

export default Aluno;