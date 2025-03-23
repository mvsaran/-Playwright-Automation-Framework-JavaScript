const {test,expect} = require('@playwright/test')

test('Test1@sanity',async({page})=>{

     console.log("This is my Test1")
})

test('Test2@smoke',async({page})=>{

    console.log("This is my Test2")
})

test('Test3@regression',async({page})=>{

    console.log("This is my Test3")
})

test('Test4@smoke',async({page})=>{

    console.log("This is my Test4")
})