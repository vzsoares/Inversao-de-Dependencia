<div align="center">

# Inversão de Dependência na Prática

</div>

Neste repositório, vamos implementar a inversão de dependência (Dependency Inversion - DI) na prática.

<p align="center">
<img src="static/preview.png" alt="main" width="600px"/>
</p>

<div align="center">

## [Veja o Vídeo dessa implementação!](https://youtu.be/QjUPhLq94ng)

</div>

### 🤔 Contexto:

A inversão de dependência em programação é sobre desacoplar regras e abstraí-las para uma camada superior, permitindo uma gestão mais limpa e isolamento da regra. 

Vamos implementar a arquitetura em camadas (Layered Architecture), separando dados, domínio e apresentação.

### 🚀 Implementação:

A implementação ocorrerá em 4 passos, conforme a [estrutura de arquivos](<https://tree.nathanfriend.io/?s=(%27options!(%27fancy!true~fullPathU~trailingSlashU~rootDotU)~z(%27z%271OAqui%20tudJXtar%C3%A1%20Kdo*W76tekapena7um%20arquivJ%7D%3BGG2OVakcome%C3%A7a_dXKndJZpersist%C3%AAncia9%20MbaseadCnJRository%20Pattern8-6ArquivJparCXpeciw_o7tipo7dCaplic5GG3ODXKrekYneg%C3%B3cioB7MdYfoo9*-dbNo0-6ExempliwndJCpossibilidaFFalter58GG4OE%20po_fim%2C%20dXKkZaprXent5Bs*hLs%2FTApiHLj-6HL7atendem%20necXsidade7Xpec%C3%ADwsTQueueHLj9*-dbNo08*-%27)~version!%271%27)*G--%20%200SqlRepositoryj5a%C3%A7%C3%A3o6%23%207s%208*Ws*typXj9*store%2F*-db0B*domain%2F*-fooDoWCa%20Fde%20G%5CnJo%20KacoplaLandlerM6Implement5%20O%2F-6T*-getProductU!falseWmain.tXesYa7regra7FZCcamadCF_r%20j.tskmo7wficazsource!%01zwkj_ZYXWUTOMLKJGFCB987650-*>) abaixo:

```sh
1/  # Aqui tudo estará acoplado
└── main.ts # temos apenas um arquivo );
2/  # Vamos começar desacoplando a camada de persistência
├── store/
│   └── dbSqlRepository.ts # Implementação baseada no Rository Pattern
├── main.ts
└── types.ts  # Arquivo para especificar os tipos da aplicação
3/  # Desacoplaremos as regras de negócio
├── domain/
│   └── fooDomain.ts # Implementação das regras de foo
├── store/
│   ├── dbSqlRepository.ts
│   └── dbNoSqlRepository.ts  # Exemplificando a possibilidade de alteração
├── main.ts
└── types.ts
4/  # E por fim, desacoplamos a camada de apresentação
├── domain/
│   └── fooDomain.ts
├── handlers/
│   ├── getProductApiHandler.ts  # Handlers atendem necessidades específicas
│   └── getProductQueueHandler.ts
├── store/
│   ├── dbSqlRepository.ts
│   └── dbNoSqlRepository.ts
├── main.ts
└── types.ts
```
Em cada passo, representado pelo nome das pastas, vamos abstrair uma das camadas mencionadas.

### 1️⃣:

Na primeira iteração, a aplicação está totalmente acoplada e não reutilizável. Se precisarmos da mesma funcionalidade em outro lugar, seria necessário copiar e colar o código 😱

### 2️⃣:

A camada de persistência é normalmente a primeira a ser extraída, pois permite que toda a aplicação tenha acesso uniforme às informações.

### 3️⃣:

Na terceira etapa, abstraímos a camada de domínio, que contém as regras de negócio que regem a legalidade de algumas operações.

### 4️⃣:

Por fim, uniformizamos a disponibilização da aplicação para o mundo exterior, utilizando exemplos de API e SQS, que são casos de uso comuns.

---

Veja o que foi feito:

<img src="static/steps.png" alt="steps"/>

</br>

Ao final, podemos escalar a aplicação horizontalmente, adicionando novos módulos em suas respectivas camadas.

Isso adiciona complexidade e requer mais configuração e planejamento. Talvez não seja necessário para algo muito pequeno, mas é bom se prevenir, não é mesmo? 👼

Agora que você conhece DI, observe em suas aplicações como poderia implementar algo similar, seguindo este princípio! ❤️

</br>

---

### 📖 Referências:

- https://medium.com/@deanrubin/the-three-layered-architecture-fe30cb0e4a6
- https://medium.com/@pererikbergman/repository-design-pattern-e28c0f3e4a30
- https://medium.com/@tbaragao/solid-d-i-p-dependency-inversion-principle-e87527f8d0be

### 🤓 Rodando localmente:

```sh
# tsx required
# yarn required

yarn install # instala dependências
tsx ./1/main.ts # roda o arquivo desejado
```
