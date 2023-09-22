function QuadradoMagico(matriz) {
  const n = matriz.length;

  // Calcula a soma mágica esperada
  const somaMagica = (n * (n * n + 1)) / 2;

  // Verifica a soma das linhas
  for (let i = 0; i < n; i++) {
    let somaLinha = 0;
    for (let j = 0; j < n; j++) {
      somaLinha += matriz[i][j];
    }
    if (somaLinha !== somaMagica) {
      return false;
    }
  }

  // Verifica a soma das colunas
  for (let j = 0; j < n; j++) {
    let somaColuna = 0;
    for (let i = 0; i < n; i++) {
      somaColuna += matriz[i][j];
    }
    if (somaColuna !== somaMagica) {
      return false;
    }
  }

  // Verifica a soma da diagonal principal
  let somaDiagonal1 = 0;
  for (let i = 0; i < n; i++) {
    somaDiagonal1 += matriz[i][i];
  }
  if (somaDiagonal1 !== somaMagica) {
    return false;
  }

  // Verifica a soma da diagonal secundária
  let somaDiagonal2 = 0;
  for (let i = 0; i < n; i++) {
    somaDiagonal2 += matriz[i][n - 1 - i];
  }
  if (somaDiagonal2 !== somaMagica) {
    return false;
  }

  // Se todas as verificações passaram, é um Quadrado Mágico
  return true;
}

function printMessage(magico) {
  if (magico) {
    console.log("Essa matriz é um Quadrado Mágico !!");
  } else {
    console.log("Essa matriz não é um Quadrado Mágico !!");
  }
}

// Exemplo de matrízes :
const matriz = [
  [8, 1, 6],
  [3, 5, 7],
  [4, 9, 2]
];

const magico = QuadradoMagico(matriz);
printMessage(magico);
