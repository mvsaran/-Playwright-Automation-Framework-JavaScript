const{test,expect} = require('@playwright/test')

test('test1',async({page})=>{
    console.log('test1')
})

test.only('test2',async({page})=>{
    console.log('test2')
})

test('test3',async({page})=>{
    console.log('test3')
    if(browserName === 'chromium'){
        test.skip(true)
    }
})

test('test4',async({page})=>{
    test.fixme('test4 is not ready')
    console.log('test4')
})

