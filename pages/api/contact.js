export default function (req, res) {

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
         auth: {
              user: 'keshibatmail@gmail.com',
               pass: process.env.NEXT_PUBLIC_PASSWORD,
           },
      secure: true,
    });

    const mailData = {
        from: 'keshibatmail@gmail.com',
        to: 'kensukeshibata@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    })

    console.log(req.body)
    res.send('success')
  }