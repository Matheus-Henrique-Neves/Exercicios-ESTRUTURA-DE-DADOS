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
}

class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}

lista = new LinkedList();
lista.push("Argemiro");
lista.push("Jesus Carlos");
console.log("lista.count: " + lista.count);
console.log("lista.head.element: " + lista.head.element);

let resultado;
resultado = lista.removeAt(100)
console.log("resultado: " + resultado);
resultado = lista.removeAt(1);
console.log("resultado: " + resultado);

lista.push("Ana Maria");
lista.push("Vanessa");
console.log("lista.count: " + lista.count);
resultado = lista.getElementAt(0);
console.log("resultado: " + resultado.element);
resultado = lista.getElementAt(1);
console.log("resultado: " + resultado.element);
resultado = lista.getElementAt(2);
console.log("resultado: " + resultado.element);

resultado = lista.insert("Patrícia", 2);
console.log("resultado: " + resultado);

resultado = lista.indexOf("Ana Maria");
console.log("resultado: " + resultado);
resultado = lista.indexOf("Vanessa");
console.log("resultado: " + resultado);
resultado = lista.indexOf("Belarmino");
console.log("resultado: " + resultado);

resultado = lista.remove("Belarmino");
console.log("resultado: " + resultado);

resultado = lista.remove("Argemiro");
console.log("resultado: " + resultado);

lista.push("Belarmino");
lista.push("André");
lista.push("Everton");
console.log(lista.toString());





