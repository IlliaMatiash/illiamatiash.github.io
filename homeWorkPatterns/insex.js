const Prev = document.querySelector('#Prev');
const Element = document.querySelector('#Element');
const Reset = document.querySelector('#Reset');
const Index = document.querySelector('#Index');
const Next = document.querySelector('#Next');
const text = document.querySelector('.text');

let indexFibonacci = 0;

let numbersFibonacci = 0;

let FibonacciNumbers = function(){
    if(indexFibonacci <= 2){
        if(indexFibonacci === 0){
            numbersFibonacci = 0;
        }else{numbersFibonacci = 1;}
        
    }else{
        let a = 1;
        let b = 1;
        for(let i = 3; i <= indexFibonacci; i++){
            let c = a + b;
            a = b;
            b = c;
        }
        numbersFibonacci = b;
    }
    
    return numbersFibonacci;
}

Prev.addEventListener('click', () => {
    if(indexFibonacci === 0){
        alert("It`s firs Fibonacci numbers");
        text.textContent = "";
    }else {
        indexFibonacci -=1;
        FibonacciNumbers();
        text.textContent = "";
    }
    console.log(indexFibonacci)
});

Next.addEventListener('click', () => {
        indexFibonacci +=1;
        console.log(indexFibonacci);
        FibonacciNumbers();
        text.textContent = "";
    
});


Element.addEventListener('click', () => {
        text.textContent = "Fibonacci numbers: " + numbersFibonacci;
});


Index.addEventListener('click', () => {
        text.textContent = "index Fibonacci numbers: " + indexFibonacci;
});

Reset.addEventListener('click', () => {
        indexFibonacci = 0;
        numbersFibonacci = 0;
        text.textContent = "";
});










