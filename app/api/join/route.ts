const nodemailer = require("nodemailer");
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      age,
      education,
      program,
      motivation,
      experience,
    } = data;

    if (!firstName || !lastName || !email || !motivation) {
      return NextResponse.json(
        { message: "Champs requis manquants." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: "Nouvelle candidature - Association Leaders de l'Excellence",
      text: `
Prénom: ${firstName}
Nom: ${lastName}
Email: ${email}
Téléphone: ${phone || "non fourni"}
Âge: ${age || "non renseigné"}
Niveau d'études: ${education || "non renseigné"}
Programme souhaité: ${program || "non renseigné"}

Motivation:
${motivation}

Expérience:
${experience || "Aucune"}
      `,
      html: `
        <p><strong>Prénom:</strong> ${firstName}</p>
        <p><strong>Nom:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || "non fourni"}</p>
        <p><strong>Âge:</strong> ${age || "non renseigné"}</p>
        <p><strong>Niveau d'études:</strong> ${education || "non renseigné"}</p>
        <p><strong>Programme souhaité:</strong> ${program || "non renseigné"}</p>
        <hr/>
        <p><strong>Motivation:</strong></p>
        <p>${motivation.replace(/\n/g, "<br/>")}</p>
        <hr/>
        <p><strong>Expérience:</strong></p>
        <p>${(experience || "Aucune").replace(/\n/g, "<br/>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Votre candidature a été soumise avec succès !" });
  } catch (error) {
    console.error("Erreur envoi mail join:", error);
    return NextResponse.json(
      { message: "Erreur serveur : impossible d'envoyer l'email." },
      { status: 500 }
    );
  }
}