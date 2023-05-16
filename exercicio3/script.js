// Arrays criados no exercício 1
const arrayNum = [2, 4, 6, 3, 1];
const arrayString = ["olá tudo bem"];
const arrayAll = [34, "hello", 2 > 3];

// Criando cópias usando slice()
const arrayNumCopy = arrayNum.slice();
const arrayStringCopy = arrayString.slice();
const arrayAllCopy = arrayAll.slice();

// a) Adicionando um item number ao início do primeiro array
arrayNumCopy.unshift(10);

// Exibindo o original e a cópia
console.log("Original primeiro array:", arrayNum);
console.log("Cópia primeiro array com item adicionado:", arrayNumCopy);

// b) Removendo o último item do segundo array
arrayStringCopy.pop();

// Exibindo o original e a cópia
console.log("Original segundo array:", arrayString);
console.log("Cópia segundo array com último item removido:", arrayStringCopy);

// c) Removendo o segundo item do terceiro array
arrayAllCopy.splice(1, 1);

// Exibindo o original e a cópia
console.log("Original terceiro array:", arrayAll);
console.log("Cópia terceiro array com segundo item removido:", arrayAllCopy);