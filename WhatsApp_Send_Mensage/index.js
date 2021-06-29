const accountSid = 'AC3aef963bee9f0ce08fde5d1ee0c9b61b'; 
const authToken = '5439423a424273c6ce770edfb8ae9e92'; 
const client = require('twilio')(accountSid, authToken); 
    for(i=0;i<10;i++){
        client.messages 
            .create({ 
                body: 'DAVI ', 
                from: 'whatsapp:+14155238886',       
                to: 'whatsapp:+5524992080867' 
            }) 
            .then(message => console.log(message.sid)) 
            .done();
            }