function ListNode(val, next){
    this.val = val;
    this.next = next;
}

function LinkedList(head){
    this.head = head;
}

var node3 = new ListNode(3);
var node2 = new ListNode(2, node3);
var node1 = new ListNode(1, node2);

var llist = new LinkedList(node1);

console.log(reverseLinkedList(llist));

function reverseLinkedList(head){
    var current = head.head;
    var prev = null;
    var next = null;
    while(current != null){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

