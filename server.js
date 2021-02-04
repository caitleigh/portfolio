const express = require("express"),
    app = express(),
    port = process.env.PORT || 5000,
    nodemailer = require("nodemailer"),
    creds = require("./config"),
    cors = require("cors");

app.use(cors());
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.json());

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
});

transporter.verify((err, success) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully signed into Gmail account");
    }
});

app.post("/send", (req, res) => {
    const { name } = req.body;
    const { message } = req.body;
    const { email } = req.body;

    var mail = {
        from: name,
        to: creds.USER,
        subject: "New Message from portolio site",
        html: `${message}` + "<br><br>Contact:<br>" + `${name}` + "<br>" +` ${email}`
    };

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({ msg: "err" });
        } else {
            res.json({ msg: "suc" });
        }
    });
});


// Install 'es6-promise' and 'isomorphic-fetch' from NPM or Yarn.
require("es6-promise").polyfill()
require("isomorphic-fetch")

const RECAPTCHA_SERVER_KEY = process.env.RECAPTCHA_SERVER_KEY

const humanKey = "value_that_we_got_from_the_frontend"

// Validate Human
const isHuman = fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: "post",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
    },
    body: `secret=${RECAPTCHA_SERVER_KEY}&response=${humanKey}`
})
    .then(res => res.json())
    .then(json => json.success)
    .catch(err => {
        throw new Error(`Error in Google Siteverify API. ${err.message}`)
    })

if (humanKey === null || !isHuman) {
    throw new Error(`YOU ARE NOT A HUMAN.`)
}

// The code below will run only after the reCAPTCHA is succesfully validated.
console.log("SUCCESS!")