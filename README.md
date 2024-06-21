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

Essa implementação irá ocorrer em 4 passos, que podem ser observados pela [estrutura de arquivos](<https://tree.nathanfriend.io/?s=(%27options!(%27fancy!true~fullPathW~trailingSlashW~rootDotW)~source!(%27source!%271TAqui%20tudYjtar%C3%A1%20Kdo*X76temo7apenaM%7D%3BJJ2TVamo7come%C3%A7awdjKndYkpersist%C3%AAnciaB%20Obasead9eZRository%20Pattern8-6CriamoMpar9_wo7tipo7d9aplic5JJ3TDjKremo7a7regra7Fneg%C3%B3cioG7Od9regra7FfooB*-dbNo0-6ExemplificandY9possibilidaFFalter58JJ4TE%20powfiZdjKmo7kaprjent5Gs*hLs%2FUApiHLz-6hL7atendeZum9necjsidaF_UQueueHLzB*-dbNo08*-%27)~version!%271%27)*J--%20%200SqlRepositoryz5a%C3%A7%C3%A3o6%23%207s%208*Xs*typjz9a%20B*store%2F*-db0Fde%20G*domain%2F*-fooDoXJ%5CnKacoplaLandlerM7uZarquivYO6Implement5%20T%2F-6U*-getProductW!falseXmain.tYo%20Zm%20_jpecificajesk9camad9Fwr%20z.ts%01zwkj_ZYXWUTOMLKJGFB987650-*>) a seguir

```sh
1/  # Aqui tudo estará acoplado
└── main.ts # temos apenas um arquivo );
2/  # Vamos começar desacoplando a camada de persistência
├── store/
│   └── dbSqlRepository.ts # Implementação baseada em Rository Pattern
├── main.ts
└── types.ts  # Criamos um arquivo para especificar os tipos da aplicação
3/  # Desacoplaremos as regras de negócio
├── domain/
│   └── fooDomain.ts # Implementação da regras de foo
├── store/
│   ├── dbSqlRepository.ts
│   └── dbNoSqlRepository.ts  # Exemplificando a possibilidade de alteração
├── main.ts
└── types.ts
4/  # E por fim desacoplamos a camada de apresentação
├── domain/
│   └── fooDomain.ts
├── handlers/
│   ├── getProductApiHandler.ts  # handlers atendem uma necessidade especifica
│   └── getProductQueueHandler.ts
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
