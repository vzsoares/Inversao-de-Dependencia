<div align="center">

# Inversão de Dependência na Prática

</div>

Nesse repositorio vamos implementar inversao de dependencia ou DI(dependency inversion) ná prática;

<p align="center">
<img src="static/preview.png" alt="main" width="600px"/>
</p>

<div align="center">

## [Veja o Video dessa implementação!](https://youtu.be/QjUPhLq94ng)

</div>

<!-- ## Sobre: -->

### 🤔 Contexto:

Quando se trata de inversao de dependencia em programação, falamos de desacoplar as regras, ou seja, abstrair(extrair) as regras para uma camada superior onde se pode lidar com esta camada de forma mais limpa.

Aqui vamos implementar um padrão conhecido como Layered Arquitechture, onde separamos a camada de dados,dominio e apresentação na aplicação.

Para entender melhor vamos acompanhar a seguir:

### 🚀 Implementação:

Essa implementação irá ocorrer em 4 passos, que pode ser observada pela [estrutura de arquivos](<https://tree.nathanfriend.io/?s=(%27options!(%27fancy!true~fullPatYtrailingSlasYrootDot!true)~j(%27j%271Tnoss7k7itx5%2C%20_tudCztar%C3%A1%20acoplado-UMFF2TkCpaXBKZpxsistencia8%20%23iX%20feitCcoLuLpattxn%20chamadCV6IcriamoGtambeLuLarquivCpar7WKtipoGd7aplic5FF3T_vamosBKaGregraGEnegocio9*8wNo0IcriadCpar7refor%C3%A7aK7possibilidaEEaltx56FF4Te%20poKfimBmoGZaprzent59-hJs%2FOApiHJMIoGhJGatendeLum7neczsidaEWOQueueHJM8wNo06-*%27)~vxsion!%271%27)*%20%20-F*0SqlVM5a%C3%A7%C3%A3o6-UM-typzM7a%208-store%2Fw09-doU%2F-*fooDoUMB%20dzacoplaCo%20Ede%20F%5CnGs%20I*%23JandlxKr%20Lm%20M.tsO-*getProductT%2FIUmainVRepositoryWzpecificaXssC%C3%A9Yh!false~Z7camad7E_aqui%20jsource!kprimeirw-*dbxerzes%01zxwkj_ZYXWVUTOMLKJIGFECB987650-*>) a seguir

```sh
.
├── 1/  #nossa primeira iteração, aqui tudo estará acoplado
│   └── main.ts
├── 2/  #primeiro passo é desacoplar a camada de persistencia
│   ├── store/
│   │   └── dbSqlRepository.ts #isso é feito com um pattern chamado Repository
│   ├── main.ts
│   └── types.ts  #criamos tambem um arquivo para especificar tipos da aplicação
├── 3/  #aqui vamos desacoplar as regras de negocio
│   ├── domain/
│   │   └── fooDomain.ts
│   ├── store/
│   │   ├── dbSqlRepository.ts
│   │   └── dbNoSqlRepository.ts  #criado para reforçar a possibilidade de alteração
│   ├── main.ts
│   └── types.ts
└── 4/  #e por fim desacoplamos a camada de apresentação
    ├── domain/
    │   └── fooDomain.ts
    ├── handlers/
    │   ├── getProductApiHandler.ts  #os handlers atendem uma necessidade especifica
    │   ├── getProductQueueHandler.ts
    ├── store/
    │   ├── dbSqlRepository.ts
    │   └── dbNoSqlRepository.ts
    ├── main.ts
    └── types.ts
```

em cada passo, representado pelo nome das pastas, vamos abstrair(extrair) uma das camadas mencionadas.

### 1️⃣:

Em nossa primeira iteração temos a aplicação totalmente acoplada e nada reutilizavel, aqui se precisarmos de uma mesma funcionalidade em outro lugar, seria necessario copiar e colar o codigo 😱

### 2️⃣:

Normalmente a camada mais util de se extrair é a de persistencia, isso permite que toda uma aplicação tenha um acesso a informação de forma uniforme.

### 3️⃣:

Agora é abstraida a camada de domino, que se caracteriza pro regras de negocio, que regem a legalidade de alumas operações por exemplo.

### 4️⃣:

Aqui vamos uniformizar como disponibilizar nossa aplicação para o mundo exterior, por isso temos exe,plos de API e SQS, que sao casos de uso muito comuns.

---

Veja o que foi feito:

<img src="static/steps.png" alt="steps"/>

</br>

Ao final podemos ver que caso necessario podemos escalar a aplicação de forma horizontal, ou seja, basta adicionar um novo modulo em sua devida camada e utilizar.

Isso claro adicona complexidade na aplicação e requer mais configuração e planejamento, talvez nao seja necessario para algo muito pequeno. Mas é bom se prevenir não é mesmo?👼

Agora que ja sabe sobre DI, observe em aplicações que possua como voce poderia implementar algo similar, seguindo este principio!❤️

</br>

---

### 📖 Referencias:

- https://medium.com/@deanrubin/the-three-layered-architecture-fe30cb0e4a6
- https://medium.com/@pererikbergman/repository-design-pattern-e28c0f3e4a30
- https://medium.com/@tbaragao/solid-d-i-p-dependency-inversion-principle-e87527f8d0be

### 🤓 Rodando localmente:

```sh
# tsx required
# yarn required

yarn install #instala dependencias
tsx ./1/main.ts #roda o arquivo desejado
```
