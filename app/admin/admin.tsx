import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const { error } = await supabase
      .from('form_submissions')
      .insert([
        {
          formType: "rejoindre",
          ...data,
          created_at: new Date().toISOString()
        },
      ])

    if (error) {
      console.error('❌ Erreur Supabase:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ message: "Candidature envoyée !" })
  } catch (error) {
    console.error('💥 Erreur API:', error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}