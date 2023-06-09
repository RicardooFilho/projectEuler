  //A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
    //Find the largest palindrome made from the product of two 3-digit numbers.
    var result = 0;
    var biggest = 0;

  
    for (var i = 100; i < 1000; i++) {
      for (var j = 100; j < 1000; j++) {
        result = i * j;
        reverseResult = parseInt(result.toString().split('').reverse().join(''));
        if (result === reverseResult && result > biggest) {
          biggest = result;
        }
      }
    }

    document.write(biggest);