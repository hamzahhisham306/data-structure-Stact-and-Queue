"use strict";

const Node=require('./Node');

class Stack{
    constructor(){
      this.top=null;
      this.temp=null;
      this.delete=null;
      this.length=0;
    };
    push(newItem){
     
      let item=new Node(newItem);
      item.next=this.top; 
      this.top=item;
      this.length++;
    }
    pop(){
      if(this.isEmpty()){
        console.log("Stack is Empty");
      }
      else{
        this.temp=this.top; 
        this.delete=this.top;
        this.top=this.top.next;
        this.temp=this.temp.next=null;
        this.length--;
        return this.delete.value;
      }

    }
    isEmpty(){
      return this.top==null;
    };
    peek(){
      if(this.isEmpty()){
        console.log("Stack is Empty");
      }
      else{
         return this.top.value;
      }
    }
  }

  module.exports=Stack;
  