const Logic: { key: string; value: string }[] = [
  {
    key: "whatToLearn",
    value: "quais são os tipos de dados utilizados por uma aplicação"
  },
  {
    key: "stepOne",
    value:
      "O que é uma String? Strings são cadeias de caracteres que armazenam dados textuais e são sempre contidas no nosso código entre aspas, como no exemplo: “celular”. " +
      "Para juntarmos vários strings usamos o caractere +. Vejamos: “Onde” + “está” + “meu” +  “celular” + “?”."
  },
  {
    key: "stepTwo",
    value:
      "O que é um Integer? Integers ou int são caracteres do tipo numérico e são utilizados de maneira literal (sem aspas), como no exemplo: 128. " +
      "Podemos utilizar operadores matemáticos para manipular esses dados, já que são números. " +
      "Sendo assim, podemos escrever 2 + 2 e o resultado será 4, ou também 5 - 2 e o resultado será 3."
  },
  {
    key: "stepThree",
    value:
      "Qual a diferença entre String e Integer na prática?" +
      "Como Strings armazenam dados textuais, manipulá-los com o operador + apenas unem as strings." +
      "Vejamos o exemplo:" +
      'Se digitarmos "1" + "1" teremos como resultado "11".' +
      'Não obtivemos como resultado "2" porque a strings não são reconhecidas como números, e sim como texto.' +
      'Ou seja, é com se uníssemos "a" + "b" e teríamos como resultado "ab", uma união de strings, à qual chamamos de concatenação.'
  }
];

export default Logic;
