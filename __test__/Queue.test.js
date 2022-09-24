"use strict";
const Queue=require('../Queue');

describe("testing Queue Linked List",()=>{
    it("Testing Queue",()=>{
        const newQueue=new Queue();
        expect(newQueue).toBeDefined();
        expect(newQueue).toBeInstanceOf(Queue);
        expect(newQueue.front).toBeNull();
    });
    it("Add Element Queue",()=>{
        const newQueue=new Queue();
         newQueue.enqueue(10);
         newQueue.enqueue(20);
         newQueue.enqueue(30);
        expect(newQueue.front.value).toEqual(10);
        expect(newQueue.rear.value).toEqual(30);
        expect(newQueue).toBeInstanceOf(Queue);
    });
    it("pop Element Queue",()=>{
        const newQueue=new Queue();
         newQueue.enqueue(10);
         newQueue.enqueue(20);
         newQueue.enqueue(30);
         let deleteEL=newQueue.dequeue();
         let ISEMPTY=newQueue.isEmpty();
         let peekEL=newQueue.peek();
        expect(deleteEL).toEqual(10);
        expect(peekEL).toEqual(20);
        expect(ISEMPTY).toEqual(false);
        expect(newQueue.front.value).toEqual(20);
        expect(newQueue.rear.value).toEqual(30);
        expect(newQueue).toBeInstanceOf(Queue);

    });
    it("Clear All Element Queue",()=>{
        const newQueue=new Queue();
         newQueue.enqueue(10);
         newQueue.enqueue(20);
         newQueue.enqueue(30);
         newQueue.clearALlElement();
        expect(newQueue.isEmpty()).toEqual(true);
        expect(newQueue.front).toBeNull();

    });
});