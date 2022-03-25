function makeid() {
    var length = 16;
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

const todos = [
    {
        id: makeid(),
        name: "Buy a new laptop",
    },
    {
        id: makeid(),
        name: "Complete previous homeworks",
    },
    {
        id: makeid(),
        name: "Learning Javascript DOM"
    },
    {
        id: makeid(),
        name: "Create a beautifull Todo App"
    },
    {
        id: makeid(),
        name: "Complete all tasks"
    }
]