const createNewList = (list, type) => {
    const newListNumbers = [];
    const newListSrings = [];
    
    list.map((element) => {
        if (typeof element === 'string') {
            newListSrings.push(element)
        } else if (typeof element === 'number') {
            newListNumbers.push(element)
        }
    })

    const higherNumber = newListNumbers.sort((a, b) => b - a)[0];

    if (type === 'numbers') return newListNumbers;
    if (type === 'strings') return newListSrings;
    if (type === 'higherNumber') return higherNumber;
}

module.exports = createNewList;