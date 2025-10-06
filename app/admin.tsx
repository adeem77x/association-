import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

type FormData = {
  id: number;
  form_type: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
  age?: number;
  education?: string;
  program?: string;
  motivation?: string;
  experience?: string;
  terms?: boolean;
  created_at: string;
};

export default function Admin() {
  const [forms, setForms] = useState<FormData[]>([]);

  useEffect(() => {
    const fetchForms = async () => {
      const { data, error } = await supabase.from('forms').select('*').order('created_at', { ascending: false });
      if (error) console.log(error);
      else setForms(data);
    };

    fetchForms();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin - Formulaires</h1>
      {forms.length === 0 ? (
        <p>Aucun formulaire soumis pour l'instant.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Type</th>
                <th className="border px-4 py-2">Nom</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Téléphone</th>
                <th className="border px-4 py-2">Détails</th>
                <th className="border px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {forms.map((form) => (
                <tr key={form.id}>
                  <td className="border px-4 py-2">{form.id}</td>
                  <td className="border px-4 py-2">{form.form_type}</td>
                  <td className="border px-4 py-2">{form.firstName} {form.lastName}</td>
                  <td className="border px-4 py-2">{form.email}</td>
                  <td className="border px-4 py-2">{form.phone || '-'}</td>
                  <td className="border px-4 py-2">
                    {form.form_type === 'contact' ? (
                      <>
                        <p><strong>Sujet :</strong> {form.subject}</p>
                        <p><strong>Message :</strong> {form.message}</p>
                      </>
                    ) : (
                      <>
                        <p><strong>Âge :</strong> {form.age}</p>
                        <p><strong>Éducation :</strong> {form.education}</p>
                        <p><strong>Programme :</strong> {form.program}</p>
                        <p><strong>Motivation :</strong> {form.motivation}</p>
                        <p><strong>Expérience :</strong> {form.experience}</p>
                        <p><strong>Terms :</strong> {form.terms ? 'Oui' : 'Non'}</p>
                      </>
                    )}
                  </td>
                  <td className="border px-4 py-2">{new Date(form.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
