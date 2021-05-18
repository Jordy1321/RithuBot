module.exports = {
    name: 'quote',
    description: "this is a meme command!",
    async execute(message, args){
        const acceptedReplies = ['Godverdomme het lijkt wel fucking alabama moeder taart', 'I am a kid myself, i touch myself so i touch kids', 'I stick straws down my throat, it feels like fucking assrape', '12-2 = california'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];
        message.channel.send(result)
    }
}