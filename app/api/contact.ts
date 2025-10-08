import type { NextApiRequest, NextApiResponse } from "next"
import { supabase } from "@/lib/supabase"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" })
  }

  try {
    const data = req.body

    const { error } = await supabase.from("form_submissions").insert([
      {
        formType: "contact",
        ...data,
        created_at: new Date().toISOString()
      },
    ])

    if (error) {
      console.error('Erreur Supabase:', error)
      return res.status(500).json({ error: error.message })
    }
    
    return res.status(200).json({ message: "Message enregistré avec succès" })
  } catch (error) {
    console.error('Erreur API:', error)
    return res.status(500).json({ error: "Erreur interne du serveur" })
  }
}