'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

type FormData = {
  id: number
  formType: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  subject?: string
  message?: string
  program?: string
  motivation?: string
  created_at: string
}

export default function AdminPage() {
  const [data, setData] = useState<FormData[]>([])
  const [loading, setLoading] = useState(true)

  // ✅ Remplace par tes propres clés publiques
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  const supabase = createClient(supabaseUrl, supabaseKey)

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('form_submissions')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) console.error(error)
      else setData(data || [])
      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) return <p className="text-center p-10">Chargement des données...</p>

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-10 text-center">📋 Tableau de bord – Formulaires</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">Nom</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Téléphone</th>
              <th className="border p-2">Sujet / Programme</th>
              <th className="border p-2">Message / Motivation</th>
              <th className="border p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={item.id}>
                  <td className="border p-2 text-center">{item.id}</td>
                  <td className="border p-2">{item.formType}</td>
                  <td className="border p-2">{item.firstName} {item.lastName}</td>
                  <td className="border p-2">{item.email}</td>
                  <td className="border p-2">{item.phone || '-'}</td>
                  <td className="border p-2">{item.subject || item.program || '-'}</td>
                  <td className="border p-2">{item.message || item.motivation || '-'}</td>
                  <td className="border p-2 text-sm text-gray-600">
                    {new Date(item.created_at).toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center p-4 text-gray-500">
                  Aucun formulaire soumis pour l’instant.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  )
}