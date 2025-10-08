const nodemailer = require("nodemailer");

async function main() {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: "Test Nodemailer",
      text: "Ceci est un test depuis Nodemailer",
    });

    console.log("Email envoyé !");
  } catch (err) {
    console.error("Erreur envoi email :", err);
  }
}

main();
