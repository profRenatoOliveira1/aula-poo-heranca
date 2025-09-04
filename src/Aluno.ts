import Pessoa from "./Pessoa.js";

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

    public getMatricula(): number {
        return this.matricula;
    }

    public setMatricula(_matricula: number): void {
        this.matricula = _matricula;
    }

    public estudar(): void {
        console.log(`O aluno ${this.getNome()} está estudando!`);
    }
}

export default Aluno;