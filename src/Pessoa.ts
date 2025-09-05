/**
 * Classe Pessoa
 */
class Pessoa {
    // atributos
    private nome: string;
    private cpf: number;
    private email: string;

    // construtor
    constructor(
        _nome: string,
        _cpf: number,
        _email: string
    ) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.email = _email;
    }

    /**
     * Retorna o nome da pessoa
     * @returns Nome da pessoa
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Atribui um nome à pessoa
     * @param _nome Nome a ser atribuido
     */
    public setNome(_nome: string): void {
        this.nome = _nome;
    }

    /**
     * Retorna o CPF da pessoa
     * @returns CPF da pessoa
     */
    public getCpf(): number {
        return this.cpf;
    }

    /**
     * Atribui um CPF à pessoa
     * @param _cpf CPF a ser atribuido
     */
    public setCpf(_cpf: number): void {
        this.cpf = _cpf;
    }

    /**
     * Retorna o email da pessoa
     * @returns Email da pessoa
     */
    public getEmail(): string {
        return this.email;
    }

    /**
     * Atribui um e-mail à pessoa
     * @param _email Email da pessoa
     */
    public setEmail(_email: string): void {
        this.email = _email;
    }

    /**
     * Faz uma apresentação da pessoa
     */
    public apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome}!`);
    }
}

export default Pessoa;