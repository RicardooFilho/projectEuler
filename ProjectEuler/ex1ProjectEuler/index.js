//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
    //Find the sum of all the multiples of 3 or 5 below 1000
    var sum = 0;

    //Verifica os números de 0 a 999 que são múltiplos de 3 ou 5
    for (var i = 0; i < 1000; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
      }
    }

    //Projeta o resultado na tela
    document.write(sum);