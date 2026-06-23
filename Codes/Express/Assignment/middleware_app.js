const express = require('express');
const app = express();
const tickets = [];

const adminCode = 1234567890;
app.use(express.json());


function isAdmin(req, res, next){
    const code = parseInt(req.query['admin-code']);
    if(code !== adminCode){
        return res.status(403).send('Forbidden: Invalid admin code');
    }
    next();
}


app.post('/buyTicket', function(req, res){
    const ticketNo = parseInt(req.body.ticketNo);
    for(let i=0; i<tickets.length; i++){
        if(tickets[i] === ticketNo){
            return res.status(400).send('Ticket number already purchased!');
        }
    }
    tickets.push(ticketNo);
    res.status(200).send('Ticket purchased successfully!');
});

app.get("/admin/tickets", isAdmin, function(req, res){
    res.status(200).json(tickets);
});





app.listen(3000);