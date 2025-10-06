// pages/api/form.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const data = req.body;

    let tableName = "";
    if (data.formType === "contact") tableName = "contacts";
    if (data.formType === "rejoindre") tableName = "rejoindre";

    const { error } = await supabase.from(tableName).insert([data]);

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ message: "Formulaire enregistré !" });
  }

  res.status(405).json({ message: "Méthode non autorisée" });
}