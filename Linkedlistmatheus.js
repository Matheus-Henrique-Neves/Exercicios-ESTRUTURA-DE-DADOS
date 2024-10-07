class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}
class LinkedList {
    constructor() {
        this.count = 0;
        this.head = undefined;
    }

    equalsFn(a, b) {
        return a === b;
    }

    push(element) {
        const node = new Node(element);
        let current;
        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            if (index === 0) {
                const current = this.head;
                node.next = current;
                this.head = node;
            }
            else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let node = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i;
            }
            current = current.next;
        }
        return -1
    }

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next;
            }
            else {
                let previous;
                for (let i = 0; i < index; i++) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.count;
    }

    getHead() {
        return this.head;
    }

    toString() {
        if (this.head == null) {
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }

    sortList(listamisturada){
        let current = listamisturada.head;
        let result = '';
        let lista = [];
        while (current) {
            lista.push(current.element);
            current = current.next;
        }
        lista.sort();
        for (let i = 0; i < lista.length; i++) {
            this.push(lista[i]);
        }
    }   
 
    printlista() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.element + '\n\n';
            current = current.next;
        }
        console.log("_________________________________________________________________________");
        console.log(result);
    }   
}

listamisturada = new LinkedList();
listamisturada.push("ARTHUR DAVI GOMES");
listamisturada.push("BRUNO HENRIQUE QUERICHELLI GARCIA");
listamisturada.push("CAIO HENRIQUE FERREIRA DE SOUZA");
listamisturada.push("DANIEL BRITO DA SILVA JUNIOR");
listamisturada.push("DANIEL GALVAO MAGALHAES DA SILVA");
listamisturada.push("DAVI BERTO MANSUR DUARTE");
listamisturada.push("ELISA APARECIDA MARTINS DE OLIVEIRA");
listamisturada.push("ERIC VINICIUS DA SILVA MENEGON");
listamisturada.push("FELIPE AUGUSTO PEREIRA LEMES");
listamisturada.push("FERNANDA VICTORIA FELIX OLIVEIRA");
listamisturada.push("ADRIANO DOS SANTOS");
listamisturada.push("GIOVANI DE BIAGI ALVES");
listamisturada.push("VITOR CARDOSO DA CRUZ");
listamisturada.push("GRAZIELLA SOUZA");
listamisturada.push("RODRIGO MORAES DE SOUZA GARCIA");
listamisturada.push("HOSANA AZEVEDO PIRES");
listamisturada.push("JOAO PEDRO SOUZA SILVA");
listamisturada.push("LEONARDO VINÍCIUS GURTLER HUBERT");
listamisturada.push("MARCELO HENRIQUE REDUZINO");
listamisturada.push("WILLIAM SILVA DOS REIS");
listamisturada.push("NATHAN FERRACINI BATISTA");
listamisturada.push("GUSTAVO SILVA DE CARVALHO");
listamisturada.push("PEDRO HENRIQUE BONOMO SANTOS");
listamisturada.push("RAMON GODINHO");
listamisturada.push("JOAO VITOR FERNANDES DE MATOS ROCHA");
listamisturada.push("MATHEUS HENRIQUE ALMEIDA VIEIRA NEVES");
listamisturada.push("ROBSON ALAN MANTOVANI");
listamisturada.printlista();
listasequenciada = new LinkedList();
listasequenciada.sortList(listamisturada);
listasequenciada.printlista();






