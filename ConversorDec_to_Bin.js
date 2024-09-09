class Stack{
    constructor(){
        this.items=[]
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
        
    }
    peek(){
        return this.items[this.items.length -1]
    }
    isEmpty(){
        return this.items.length === 0
    }
    size(){
        return this.items.length
    }
    clear(){
        this.items=[]
    }
    list(){
        return this.items
    }
}

/*function decimalToBinary (decNumber) { 
    const remStack = new Stack(); 
    let number=decNumber;
    let rem;
    let binaryString = '';

    while (number > 0) { // {1}
        rem = Math.floor(number % 2); // {2} 
        remStack.push(rem); // {3}
        number = Math.floor(number / 2); // {4}
    }
    console.log(remStack.list())

    while (!remStack.isEmpty()) { // {5}
        binaryString += remStack.pop().toString(); // {6}
    }

    return binaryString;

}*/

let number=10
const binari_number= new Stack()
let result_of_divisao = new Stack()
let string_binaria=""
while(number>=1){
binari_number.push(number%2)
//result_of_divisao.push(number/2)
number=Math.floor(number/2)
}
while(!binari_number.isEmpty()){
string_binaria+= binari_number.pop().toString()
}
console.log(string_binaria)


    

