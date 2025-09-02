class Pessoa {
    // atributos
    private nome: string;
    private cpf: number;
    private email: string;

    constructor(
        _nome: string,
        _cpf: number,
        _email: string
    ) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.email = _email;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(_nome: string): void {
        this.nome = _nome;
    }

    public getCpf(): number {
        return this.cpf;
    }

    public setCpf(_cpf: number): void {
        this.cpf = _cpf;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(_email: string): void {
        this.email = _email;
    }

    public apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome}!`);
    }
}

export default Pessoa;