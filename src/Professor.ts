import Pessoa from "./Pessoa.js";

class Professor extends Pessoa {
    private numIdProfessor: number;

    constructor(
        _nome: string,
        _cpf: number,
        _email: string,
        _numIdProfessor: number
    ) {
        super(_nome, _cpf, _email);
        this.numIdProfessor = _numIdProfessor;
    }

    public getNumIdProfessor(): number {
        return this.numIdProfessor;
    }

    public setIdNumProfessor(_numIdProfessor: number): void {
        this.numIdProfessor = _numIdProfessor;
    }

    public darAula(): void {
        console.log(`O professor ${this.getNome()} está ministrando aula.`);
    }
}

export default Professor;