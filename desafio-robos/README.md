# Desafio Front-end 
<div style="display: inline block">
<img src="https://art.ngfiles.com/images/1441000/1441780_masskir_gameboy-robot-run.gif?f1601294525" width="50px">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="50px"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" width="50px"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" width="50px" />
</div>      

## Sobre o projeto
Criação de site para visualização de dados e criação de robôs que operam na bolsa de valores.
<p display="flex"><img loading="lazy" src="https://img.shields.io/badge/status_:-em_desenvolvimento-red"/>
</p>  

## Como executar
1. Verifique se o Node.js está instalado em seu computador e se você possui a versão mais recente do npm.

  ```sh
  npm install npm@latest -g
  ```
2. Clone o repositório disponibilizado no GitHub
  ```sh
  git clone https://github.com/barbarabarbabela/desafio-robos.git
  ```
3. Execute o seguinte comando no seu terminal:
  ```sh
  npm start
  ```

## Funcionalidades
- Visualização de resumo geral das operações.
- Visualização de robôs em execução.
- Criação de novos robôs.

## Decisões do projeto
- Utilizei apenas as API's que fizeram sentido para o layout fornecido. Eventualmente, pode-se pensar em novas funcionalidades para consumir as APIs restantes.
- Nesse primeiro momento, decidi não utilizar frameoworks para o CSS, mas estou cogitando implementar o Styled Componentes para facilitar a legibilidade e melhorar a organização do código.
- Nos cards dos robôs, percebi que algumas informações de "paper", "position" e "capital" não foram renderizadas, porque faltava essa informação na API. Adicionei um N/A para melhorar a experiência do usuário.
- Como o layout apresenta apenas duas estratégias ("Tangram" e "Price Action") e a API possui outras seis estratégias, decidi trocar o Select do layour por uma lista suspensa tradicional, contendo todas as demais estratégias. Além disso, parti do pressuposto de que seria possível escolher apenas uma estratégia.
- Decidi adicionar o :hover nos botões para melhorar a experiência do usuário.

## Dificuldades
- O POST do Create Robot está sendo enviado para a API. Mas não ficou claro, pela documentação, como ordenar a chamada do mais recente ao mais antigo. Dessa forma, o Card com as informações enviadas via formulário não é renderizado na página.
- Definir qual é a melhor forma de componentizar o projeto.
- Entender o que pode ser avaliado no histórico de commits.

## Melhorias futuras
- Componentizar ainda mais o projeto.
- Criar novas funcionalidades para puxar as demais informações que constam na documentação da API: List of brokers e list of robot papers.
- Implementar os métodos PUT da API, incluindo funcionalidades de iniciar, parar e editar o robô.
- Implementar o Styled Components no CSS.
- Na seção "Add Robot", é possível implementar um contador de robôs disponíveis, que diminui a partir da criação de robôs.
- Definir os campos do Modal como obrigatórios, mas dar a possibilidade de fechar o modal sem preencher os campos obrigatórios.
- Tratar os erros de input e de response.
- Criar um sistema de paginação para que seja possível visualizar todos os robôs que constam na API.