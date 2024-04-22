'use strict';
const dotenv=require('dotenv')
const assert =require('assert')

dotenv.config();
const {PORT,HOST,HOST_URL,SECRET_KEY}=process.env;


assert(PORT,'PORT is required')
assert(HOST,'HOST is required')


module.exports={
    key:SECRET_KEY,
    port : PORT,
    host : HOST,
    url : HOST_URL
}