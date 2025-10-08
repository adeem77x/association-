const nodemailer = require("nodemailer");
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { firstName, lastName, email, phone, subject, message } = data;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { message: "Champs requis manquants." },
        { status: 400 }
      );
    }

    // Créer le transporteur nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Contenu du mail
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: subject || "Nouveau message depuis le formulaire Contact",
      text: `
Prénom: ${firstName}
Nom: ${lastName}
Email: ${email}
Téléphone: ${phone || "non fourni"}

Message:
${message}
      `,
      html: `
        <p><strong>Prénom:</strong> ${firstName}</p>
        <p><strong>Nom:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || "non fourni"}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Merci pour votre message !" });
  } catch (error) {
    console.error("Erreur envoi mail contact:", error);
    return NextResponse.json(
      { message: "Erreur serveur : impossible d'envoyer l'email." },
      { status: 500 }
    );
  }
}
