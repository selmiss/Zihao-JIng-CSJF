const express = require('express');
var router = express.Router();

var Web3 = require('web3');
var web3 = new Web3(new Web3.provider.HttpProvider('04d3bd1b2f22497484a8bf4ac46451b2'))

var Enum = web3.eth.getBlock('earliest').number;
var Lnum = web3.eth.getBlock('latest').number;
var blocks = _range(Enum,Lnum);
number=0;

blocks.array.forEach(blockNum => {
    var block = web3.eth.getBlock(blockNum);

    if(block!=null && block.transaction != null && block.transaction.length!=0){
        block.transaction.forEach(tranNum=>{
            var transaction = web3.eth.getTransaction(tranNum);
            if(transaction.to == null){
                number = number =1;
                throw 'Break'
            }
        })
    }
})