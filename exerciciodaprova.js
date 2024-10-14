class ProcessQueue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    addProcess(process) {
        if (process.priority === 0) {
            this.addFront(process);
        } else {
            this.addBack(process);
        }
    }

    addFront(process) {
        if (this.isEmpty()) {
            this.addBack(process);
        } else {
            if (this.lowestCount > 0) {
                this.lowestCount--;
                this.items[this.lowestCount] = process;
            } else {
                for (let i = this.count; i > 0; i--) {
                    this.items[i] = this.items[i - 1];
                }
                this.count++;
                this.lowestCount = 0;
                this.items[0] = process;
            }
        }
    }

    addBack(process) {
        this.items[this.count] = process;
        this.count++;
    }

    removeProcess() {
        return this.removeFront();
    }

    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    removeProcessWithMaxWait() {
        if (this.isEmpty()) {
            return undefined;
        }

        let maxWaitIndex = this.lowestCount;
        let maxWaitTime = this.items[this.lowestCount].wait;

        for (let i = this.lowestCount + 1; i < this.count; i++) {
            if (this.items[i].wait > maxWaitTime) {
                maxWaitTime = this.items[i].wait;
                maxWaitIndex = i;
            }
        }

        const result = this.items[maxWaitIndex];
        delete this.items[maxWaitIndex];

        for (let i = maxWaitIndex; i < this.count - 1; i++) {
            this.items[i] = this.items[i + 1];
        }
        delete this.items[this.count - 1];
        this.count--;

        return result;
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.count - this.lowestCount;
    }

    printProcesses() {
        if (this.isEmpty()) {
            console.log("A fila está vazia.");
            return;
        }
        console.log("Fila de processos:");
        for (let i = this.lowestCount; i < this.count; i++) {
            const process = this.items[i];
            console.log(`ID: ${process.id}, Name: ${process.name}, Priority: ${process.priority}, Wait: ${process.wait}`);
        }
    }
}

const queue = new ProcessQueue();

queue.addProcess({ id: 101, name: "Browser", priority: 3, wait: 15 });
queue.addProcess({ id: 102, name: "Editor", priority: 1, wait: 10 });
queue.addProcess({ id: 103, name: "Task Manager", priority: 2, wait: 5 });
queue.addProcess({ id: 104, name: "Window Manager", priority: 0, wait: 20 });
queue.printProcesses();
queue.removeProcessWithMaxWait();
queue.printProcesses();
queue.removeProcess();
queue.printProcesses();
