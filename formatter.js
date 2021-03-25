let wordsNotToCapitalize = ['of', 'the' , 'at' , 'for' , 'if' , 'it'] //**get a full list somewhere */

const title = (str)=> {
    if(!str) throw new Error('You must pass a string to be formatted.')
    let words = str.toLowerCase().split(' ');
    let i = 0
    for(let word of words){
        if(!wordsNotToCapitalize.includes(word) || i === 0){
            let letters = word.split('')
            letters[0] = letters[0].toUpperCase()
            words[i] = letters.join('')
        }
        i++
    }
    return words.join(' ')
}

module.exports = title
