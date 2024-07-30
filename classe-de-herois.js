class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque desconhecido";
        }
        console.log(`O ${this.tipo} ${this.nome} de ${this.idade} anos atacou e ${ataque}`);
    }
}

// Exemplos de uso
const heroi1 = new Heroi("Arthas", 30, "guerreiro");
const heroi2 = new Heroi("Gandalf", 70, "mago");
const heroi3 = new Heroi("Bruce", 50, "monge");
const heroi4 = new Heroi("Ryu", 35, "ninja");

heroi1.atacar();  // Saída: O guerreiro Arthas de 30 anos atacou e usou espada
heroi2.atacar();  // Saída: O mago Gandalf de 70 anos atacou e usou magia
heroi3.atacar();  // Saída: O monge Bruce de 50 anos atacou e usou artes marciais
heroi4.atacar();  // Saída: O ninja Ryu de 35 anos atacou e usou shuriken
