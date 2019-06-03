function fizzBuzz() {
    for (let number = 1; number <= 100; number++) {
        const isDivisibleBy3 = number % 3 === 0;
        const isDivisibleBy5 = number % 5 === 0;
        if (isDivisibleBy3 && isDivisibleBy5) {
            document.writeln('FizzBuzz');
        }else if(isDivisibleBy5){
            document.writeln('Buzz');
        }else if(isDivisibleBy3){
            document.writeln('Fizz');
        }else{
            document.writeln(number);
        }
    }
}
fizzBuzz();
