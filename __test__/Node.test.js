"use strict";


const Node = require('../Node');

describe("Testing Node Class", () => {
    it('Testing create a new node', () => {

        const val = 'hamzah';
        const node = new Node(val);

        expect(node).toBeInstanceOf(Node);
        expect(node.value).toEqual('hamzah'); // Check the value
        expect(node.next).toBeNull(); // next property it should be null


    })


});