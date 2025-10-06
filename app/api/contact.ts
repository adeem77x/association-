import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../utils/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { formType, ...data } = req.body;

    const { error } = await supabase.from('forms').insert([{ form_type: formType, ...data }]);

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ message: 'Formulaire enregistré !' });
  }

  res.status(405).json({ error: 'Méthode non autorisée' });
}