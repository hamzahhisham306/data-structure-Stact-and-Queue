"use strict";
const Stack=require('../Stack');

describe("testing Stack Linked List",()=>{
    it("Testing Stack",()=>{
        const newStack=new Stack();
        expect(newStack).toBeDefined();
        expect(newStack).toBeInstanceOf(Stack);
        expect(newStack.top).toBeNull();
    });
});

describe('Push on Stack Lined List',()=>{
    it('Add to an Empty Stack ',()=>{
        const newStack =new Stack();
        newStack.push(10);
        expect(newStack.top.value).toEqual(10);
        expect(newStack.top.next).toBeNull();
    });
    it('Add to a non-empty Stack',()=>{
        const newStack=new Stack();
        newStack.push('a');
        newStack.push('b');
       expect(newStack.top.value).toEqual('b');
       expect(newStack.top.next.value).toEqual('a');
       expect(newStack.top.next.next).toBeNull();
    });
    it('pop the Stack Linked List',()=>{
        const newStack=new Stack();
        newStack.push(10);
        newStack.push(20);
        newStack.push(30);
        newStack.push(40);
       let deleteEl=newStack.pop();
       expect(deleteEl).toEqual(40);
       expect(newStack.top.value).toEqual(30);
       expect(newStack.top.next.value).toEqual(20);
       expect(newStack.top.next.next.next).toBeNull();
    });
    it('peek the Stack Linked List',()=>{
        const newStack=new Stack();
        newStack.push(10);
        newStack.push(20);
        newStack.push(30);
        newStack.push(40);
        let ISEMPTY=newStack.isEmpty();
       let deleteEl=newStack.pop();
       let peekEl=newStack.peek();
       expect(peekEl).toEqual(30);
       expect(deleteEl).toEqual(40);
       expect(newStack.top.value).toEqual(30);
       expect(newStack.top.next.value).toEqual(20);
       expect(newStack.top.next.next.next).toBeNull();
       expect(ISEMPTY).toEqual(false);
    });

})