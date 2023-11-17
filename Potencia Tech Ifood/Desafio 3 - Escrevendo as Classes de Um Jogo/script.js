class Hero {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    obterNome() {
        this.nome = prompt("Digite o nome do seu personagem: ");
        document.getElementById('output').innerHTML += `Olá ${this.nome}<br>`;
    }

    selectHero() {
        this.tipo = ["Mago", "Guerreiro", "Monge", "Ninja"];
    
        let opcaoNumerica;
        
        do {
            const opcao = prompt(`Escolha a classe:\n1. ${this.tipo[0]}\n2. ${this.tipo[1]}\n3. ${this.tipo[2]}\n4. ${this.tipo[3]}`);

            opcaoNumerica = parseInt(opcao) - 1;
            
            if (opcaoNumerica >= 0 && opcaoNumerica < this.tipo.length) {
                this.tipo = this.tipo[opcaoNumerica];
                document.getElementById('output').innerHTML += `Você escolheu ${this.tipo}<br>`;
            } else {
                document.getElementById('output').innerHTML += "Opção inválida. Por favor, digite uma opção válida.<br>";
            }
        } while (!(opcaoNumerica >= 0 && opcaoNumerica < this.tipo.length));
    }
            
    atacar() {
        switch (this.tipo) {
            case "Mago":
                document.getElementById('output').innerHTML += `O ${this.nome} lançou um feitiço mágico!<br>`;
                break;
            case "Guerreiro":
                document.getElementById('output').innerHTML += `O ${this.nome} atacou com sua espada!<br>`;
                break;
            case "Monge":
                document.getElementById('output').innerHTML += `O ${this.nome} realizou um ataque espiritual!<br>`;
                break;
            case "Ninja":
                document.getElementById('output').innerHTML += `O ${this.nome} desferiu golpes rápidos como um ninja!<br>`;
                break;
            default:
                document.getElementById('output').innerHTML += `O ${this.nome} atacou usando ${this.tipo}<br>`;
                break;
        }
    }
}

function startGame() {
    const hero1 = new Hero();
    hero1.obterNome();
    hero1.selectHero();
    hero1.atacar();
}

