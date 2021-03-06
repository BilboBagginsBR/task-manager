const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dmitrijharitonov408@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendGoodbueeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dmitrijharitonov408@gmail.com',
        subject: 'Delete account',
        text: `Please tell us reasons ${name} for deleting account`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbueeEmail
}