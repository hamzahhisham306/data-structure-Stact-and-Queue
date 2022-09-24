"use strict";

const Node=require('./Node');


class Queue{
    constructor(){
      this.front=null;
      this.rear=null;
      this.temp=null;
      this.delete=null;
      this.length=0;
    }
    isEmpty(){
      return this.front==null;
    }
    enqueue(item){
      if(this.isEmpty()){
        let newItem=new Node(item);
        this.front=this.rear=newItem;
      }
      else{
        let newItem=new Node(item);
        this.rear.next=newItem;  
        this.rear=newItem
        this.length++;
      }
    }
    dequeue(){
      if(this.isEmpty()){
        console.log("the Queue is Empty");
      }
      else{
     this.temp=this.front;
     this.delete=this.front;
     this.front=this.front.next;
     this.temp=null;
     this.length--;
     return this.delete.value;
      }
    }
    peek(){
        if(this.isEmpty()){
         console.log("the Queue is Empty");
        }
        else{
      return this.front.value;
        }
    }
    clearALlElement(){
        this.length=0;
      this.front=this.rear=null;
    }
  }

  module.exports=Queue;