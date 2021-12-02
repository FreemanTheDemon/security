const chats = [];

/*
    chats example object
    {
        pin: 123
        messages: ['hello', 'hi there']
    }
*/

module.exports = {
    createMessage: (req, res) => {
        // console.log('hit', req.body);
        const {pin, message} = req.body;

        for (let i = 0; i < chats.length; i++) {
            if (pin === chats[i].pin) {
                chats[i].messages.push(message);
                res.status(200).send(chatObj);
                return;
            }
        }

        let chatObj = {
            pin,
            messages: [message]
        }

        chats.push(chatObj);
        console.log(chats);
        res.status(200).send(chatObj);
    }
}