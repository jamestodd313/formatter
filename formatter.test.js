const { expect } = require('@jest/globals')
const title = require('./formatter')

test('formats title', ()=>{
    expect(title('hello world')).toBe('Hello World')
})

test('throws error if no string is passed', ()=>{
    expect(()=>{
        title('').toThrowError()
    })
})

test("doesn't capitalize certain words", ()=>{
    expect(title('hello the world')).toBe('Hello the World')
})

test('always capitalizes first word', ()=>{
    expect(title('the hello world')).toBe('The Hello World')
})