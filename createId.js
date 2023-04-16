const createId = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = '';

    for (let i = 0; i < 4; i++) {
        let interval = '';

        for (let j = 0; j < 4; j++) {
            const letter = letters[Math.floor(Math.random() * (letters.length - 0) + 0)];

            interval = interval + letter;
        }

        (i < 3) ? id = id + interval + '-' : id = id + interval;
    }

    return id;
}

module.exports = createId;