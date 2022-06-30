const express = require("express");
const app = express();
const correct_information = ['"dashcommerce"', '"chooseMe"' ];
const port = process.env.PORT || 80

app.get("/dashcommercetest", (req, res) => {
    var parameters = req.query;
    if (parameters.user == correct_information[0] && parameters.password == correct_information[1]) {
        return res.json({ message: "My full name is Luis Gustavo Ferreira Marques. I want this job!" });
    }
    else{
        return res.json({ message: "Wrong credentials." });
    }
});

app.get("/", (req,res) => {
    return res.json({ message: "Initial page of aplication" });
});

app.listen(port ,() => {
    console.log("Servidor iniciado na porta " + port);
});