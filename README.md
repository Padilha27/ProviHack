<h1 align="center">
     :computer: <a href="#" alt="ProviHack"> ProviHack para todos - Time Raposa (18) </a>
</h1>

<h4 align="center">
	🚧  Em andamento 🚧
</h4>

:robot: TechZap 🚀 - Veja o [Artigo](https://medium.com/p/5afd2588ecc4/edit).
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
      * [Página Web](#página-web)
      * [Chatbot](#chatbot)
   * [Informações Gerais](#-informações-gerais)
   * [Como executar o projeto](#como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Editar a aplicação ou rodar localmente](#editar-a-aplicação-ou-rodar-localmente)
   * [Tecnologias](#-tecnologias)
   * [Autores](#-autores)


## 💻 Sobre o projeto

O TechZap é uma aplicação que consiste em uma página Web e uma API Rest (Chatbot).
O projeto foi desenvolvido durante o ProviHack e busca atender a necessidade de pessoas de baixa renda acessarem conteúdos que as preparem para atuar no mercado de tecnologia. O público alvo da aplicação tem como principais barreiras a falta de um computador, internet limitada ou instável e dificuldade em instalar aplicativos específicos (seja por falta de espaço em memória ou desconhecimento). Inicialmente observamos que, embora sem muitos recursos, é comum ter ao menos um (1) smartphone em cada casa e a maioria das pessoas se comunicarem através das redes sociais. Pensamos então em utilizar Whatsapp, pois trata-se de um app de mensagens comum e de dados ilimitados para algumas operadoras. Para levar de modo didático e acessível conteúdos de programação, surgiu a ideia de criar uma página Web para filtrar e direcionar o público para um Chatbot que irá interagir e disponibilizar os conteúdos.


## :dart: Página Web (Front End)

A página Web é a "porta de entrada" da aplicação. Nela estão as informações principais da solução, seu propósito e funcionamento. 
O objetivo dessa página é filtar os públicos que a acessam e encaminhar para o Chatbot, segundo o perfil de cada usuário. Os tipos de público são 3: alunos, professores e familiares.

[Figma da Página](https://www.figma.com/file/WvHwsU1t4RGpiJK0vcQK0C/TechZAP?node-id=104%3A4)


## :robot: Chatbot (API)

O Chatbot é uma API Rest desenvolvida em Node.js e que tem por objetivo interagir com usuários por meio do Whatsapp.
Basicamente será utilizado um banco não relacional (MongoDB) para armazenar as mensagens e conteúdos consumidos pela API no modelo “Chave-Valor”. 
A lógica do chat consiste em interagir com o usuário e enviar opções para que ele escolha qual conteúdo quer receber. 
Ao receber os inputs do usuário, a API precisa enviar os conteúdos de maneira ordenada e precisa, de acordo com o que foi descrito na opção escolhida pelo usuário.  


## ⚙️ Informações Gerais

Durante o ProviHack conseguimos implementar:
1) Estruturação de pastas;
2) Criação da página Web;
3) Criação dos arquivos que contém as mensagens do chat. 

Ainda falta implementar:
1) Modelagem de dados (criação de models e tabelas);
2) Lógica das controllers;
3) Endpoints;
4) Autenticação;
5) Testes unitários e de integração;
6) Deploy.


## 🚀 Como executar o projeto (Frontend) 

Executar no navegador o arquivo html contido em:  TechZap-Front / index.html


## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e um editor para trabalhar com o código, como o [VSCode](https://code.visualstudio.com/)


## :octocat:  Editar a aplicação ou rodar localmente

```bash

# Clone este repositório em sua máquina  
$ git clone https://github.com/Padilha27/ProviHack

```
---

## 🛠 Tecnologias

As seguintes linguagens/tecnologias foram usadas na construção do projeto:

* Html
* Css
* Node.Js
* Express 
* TypeScript 
* Sequelize (ORM) 
* MongoDB
* Prettier

---

## 🦸 Autores

Feito com 💜 por:
* [Andrea Babilonia : UX/UI Designer](https://www.linkedin.com/in/babiloniandrea/)
* [Bianca Padilha: Dev. Fullstack](https://www.linkedin.com/in/poesia-e-vida-23123620a/)
* [Dionatas Lazzari: Dev. Fullstack](https://www.linkedin.com/in/dionatas-lazzari-dev/)
* [Eloísa Schwertner: UX Designer](https://www.linkedin.com/in/eloisa-schwertner/)
* [Luany Souza: Dev. Front-end](https://www.linkedin.com/in/luanyss/)
* [Fabio Neres: Produto](https://www.linkedin.com/in/f%C3%A1bioneres/)

---
