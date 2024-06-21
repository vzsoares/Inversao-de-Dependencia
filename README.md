<div align="center">

# Inversão de Dependência na Prática

</div>

Nesse repositório, vamos implementar inversão de dependência ou DI (dependency inversion) na prática.

<p align="center">
<img src="static/preview.png" alt="main" width="600px"/>
</p>

<div align="center">

## [Veja o Vídeo dessa implementação!](https://youtu.be/QjUPhLq94ng)

</div>

<!-- ## Sobre: -->

### 🤔 Contexto:

Quando se trata de inversão de dependência em programação, falamos de desacoplar as regras, ou seja, abstrair (extrair) as regras para uma camada superior onde se pode lidar com esta camada de forma mais limpa.

Aqui, vamos implementar um padrão conhecido como Layered Architecture, onde separamos a camada de dados, domínio e apresentação na aplicação.

Para entender melhor, vamos acompanhar a seguir:

### 🚀 Implementação:

Essa implementação irá ocorrer em 4 passos, que podem ser observados pela [estrutura de arquivos](<https://tree.nathanfriend.io/?s=(%27options!(%27fancy!true~fullPatYtrailingSlasYrootDot!true)~j(%27j%271Tnoss7k7itx5%2C%20_tudCztar%C3%A1%20acoplado-UMFF2TkCpaXBKZpxsistencia8%20%23iX%20feitCcoLuLpattxn%20chamadCV6IcriamoGtambeLuLarquivCpar7WKtipoGd7aplic5FF3T_vamosBKaGregraGEnegocio9*8wNo0IcriadCpar7refor%C3%A7aK7possibilidaEEaltx56FF4Te%20poKfimBmoGZaprzent59-hJs%2FOApiHJMIoGhJGatendeLum7neczsidaEWOQueueHJM8wNo06-*%27)~vxsion!%271%27)*%20%20-F*0SqlVM5a%C3%A7%C3%A3o6-UM-typzM7a%208-store%2Fw09-doU%2F-*fooDoUMB%20dzacoplaCo%20Ede%20F%5CnGs%20I*%23JandlxKr%20Lm%20M.tsO-*getProductT%2FIUmainVRepositoryWzpecificaXssC%C3%A9Yh!false~Z7camad7E_aqui%20jsource!kprimeirw-*dbxerzes%01zxwkj_ZYXWVUTOMLKJIGFECB987650-*>) a seguir

```sh
.
├── 1/  # nossa primeira iteração, aqui tudo estará acoplado
│   └── main.ts
├── 2/  # primeiro passo é desacoplar a camada de persistência
│   ├── store/
│   │   └── dbSqlRepository.ts # isso é feito com um pattern chamado Repository
│   ├── main.ts
│   └── types.ts  # criamos também um arquivo para especificar tipos da aplicação
├── 3/  # aqui vamos desacoplar as regras de negócio
│   ├── domain/
│   │   └── fooDomain.ts
│   ├── store/
│   │   ├── dbSqlRepository.ts
│   │   └── dbNoSqlRepository.ts  # criado para reforçar a possibilidade de alteração
│   ├── main.ts
│   └── types.ts
└── 4/  # e por fim desacoplamos a camada de apresentação
    ├── domain/
    │   └── fooDomain.ts
    ├── handlers/
    │   ├── getProductApiHandler.ts  # os handlers atendem a uma necessidade específica
    │   ├── getProductQueueHandler.ts
    ├── store/
    │   ├── dbSqlRepository.ts
    │   └── dbNoSqlRepository.ts
    ├── main.ts
    └── types.ts
```

Em cada passo, representado pelo nome das pastas, vamos abstrair (extrair) uma das camadas mencionadas.

### 1️⃣:

Em nossa primeira iteração, temos a aplicação totalmente acoplada e nada reutilizável. Aqui, se precisarmos de uma mesma funcionalidade em outro lugar, seria necessário copiar e colar o código 😱

### 2️⃣:

Normalmente, a camada mais útil de se extrair é a de persistência, pois isso permite que toda a aplicação tenha um acesso à informação de forma uniforme.

### 3️⃣:

Agora, é abstraída a camada de domínio, que se caracteriza por regras de negócio, que regem a legalidade de algumas operações, por exemplo.

### 4️⃣:

Aqui vamos uniformizar como disponibilizar nossa aplicação para o mundo exterior, por isso temos exemplos de API e SQS, que são casos de uso muito comuns.

---

Veja o que foi feito:

<img src="static/steps.png" alt="steps"/>

</br>

Ao final, podemos ver que, caso necessário, podemos escalar a aplicação de forma horizontal, ou seja, basta adicionar um novo módulo em sua devida camada e utilizar.

Isso, claro, adiciona complexidade na aplicação e requer mais configuração e planejamento. Talvez não seja necessário para algo muito pequeno. Mas é bom se prevenir, não é mesmo? 👼

Agora que já sabe sobre DI, observe em aplicações que possua como você poderia implementar algo similar, seguindo este princípio! ❤️

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
