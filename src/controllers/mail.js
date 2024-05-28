const send = require("../services/nodemailer")

//const html = `` // para utilizar html

const sendMail = async (req, res) => {
    const { to, subject, body } = req.body

    send(to, subject, body) // texto sem html 
    // send(to, subject, html) // texto com html

    return res.json('E-mail enviado com sucesso!')
}

module.exports = {
    sendMail
}