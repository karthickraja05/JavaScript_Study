class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(node) {
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
    }
    asort() {
        let i = 0;
        while(true){
            i++;
            let current = this.head;
            let nextObject = current.next;
            let first = null;
            let prev = null;
            let swap = 0;
            while(true){
                if(nextObject === null){
                    break;
                }

                // Change Here For Asort or Dsort
                if(current.data > nextObject.data){
                    let temp = nextObject.next;
                    current.next = temp;
                    if(prev === null){
                        prev = nextObject
                    }  
                    nextObject.next = current;
                    swap++;
                    prev.next = nextObject;
                    prev = nextObject;
                    nextObject = current.next;

                    if(first === null){
                        first = prev;
                    }
                }else{
                    if(first === null){
                        first = current;
                    }
                    prev = current
                    current = nextObject;
                    nextObject = nextObject.next;
                    
                }
                
                if(nextObject === null){
                    break;
                }
                
            }
            if(i === 5){
                console.log(swap)
                break;
            }
            this.head = first;
            if(swap === 0){
                break;
            }
        }
    }
}


var mergeTwoLists = function (list1, list2) {
    var linkedList1 = new LinkedList();
    for (var i = 0; i < list1.length; i++) {
        if (list1[i] !== undefined) {
            var node1 = new Node(list1[i]);
            linkedList1.append(node1);
        }
        if (list2[i] !== undefined) {
            var node2 = new Node(list2[i]);
            linkedList1.append(node2);
        }
    }
    linkedList1.asort();
    console.log(linkedList1);
};


mergeTwoLists([10, 3,2], [1,4,0]);