import Pessoa from "./Pessoa.js";

/**
 * Classe Professor herda de Pessoa
 */
class Professor extends Pessoa {
    // atributos
    private numIdProfessor: number;

    // construtor
    constructor(
        _nome: string,
        _cpf: number,
        _email: string,
        _numIdProfessor: number
    ) {
        super(_nome, _cpf, _email); // chama o construtor da classe base
        this.numIdProfessor = _numIdProfessor;
    }

    /**
     * Retorna o ID do professor
     * @returns ID do professor
     */
    public getNumIdProfessor(): number {
        return this.numIdProfessor;
    }

    /**
     * Atribui um ID ao professor
     * @param _numIdProfessor ID do professor
     */
    public setIdNumProfessor(_numIdProfessor: number): void {
        this.numIdProfessor = _numIdProfessor;
    }

    /**
     * Exibe mensagem do professor ministrando aula
     */
    public darAula(): void {
        console.log(`O professor ${this.getNome()} está ministrando aula.`);
    }
}

export default Professor;