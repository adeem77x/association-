import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"
import { FormEvent } from "react"

export default function JoinPage() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    const data = {
      firstName: (form.firstName as HTMLInputElement).value,
      lastName: (form.lastName as HTMLInputElement).value,
      email: (form.email as HTMLInputElement).value,
      phone: (form.phone as HTMLInputElement).value,
      age: Number((form.age as HTMLInputElement).value),
      education: (form.education as HTMLInputElement).value,
      program: (form.program as HTMLSelectElement).value,
      motivation: (form.motivation as HTMLTextAreaElement).value,
      experience: (form.experience as HTMLTextAreaElement).value,
      terms: (form.terms as HTMLInputElement).checked,
    }

    const res = await fetch("/api/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (res.ok) alert("Candidature envoyée !")
    else alert("Erreur lors de l’envoi")
  }

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Rejoignez-nous</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Commencez votre parcours vers l'excellence en leadership. Rejoignez une communauté de jeunes leaders passionnés.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Pourquoi nous rejoindre ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              "Programmes de formation de classe mondiale",
              "Mentorat personnalisé avec des leaders expérimentés",
              "Réseau mondial de jeunes professionnels",
              "Opportunités de projets concrets",
              "Accès à des ressources exclusives",
              "Certificats reconnus internationalement",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-xl">
              <CardContent className="pt-12 pb-12">
                <h2 className="text-3xl font-bold mb-2 text-center">Formulaire de candidature</h2>
                <p className="text-center text-muted-foreground mb-8">
                  Remplissez ce formulaire pour commencer votre parcours avec nous
                </p>

                {/* Formulaire */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName">Prénom *</label>
                      <Input id="firstName" placeholder="Votre prénom" required />
                    </div>
                    <div>
                      <label htmlFor="lastName">Nom *</label>
                      <Input id="lastName" placeholder="Votre nom" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email">Email *</label>
                    <Input id="email" type="email" placeholder="votre.email@exemple.com" required />
                  </div>
                  <div>
                    <label htmlFor="phone">Téléphone *</label>
                    <Input id="phone" type="tel" placeholder="+33 1 23 45 67 89" required />
                  </div>
                  <div>
                    <label htmlFor="age">Âge *</label>
                    <Input id="age" type="number" placeholder="25" required />
                  </div>
                  <div>
                    <label htmlFor="education">Niveau d'études *</label>
                    <Input id="education" placeholder="Ex: Master en Administration" required />
                  </div>
                  <div>
                    <label htmlFor="program">Programme souhaité *</label>
                    <select id="program" className="w-full px-4 py-2 rounded-lg border border-input bg-background" required>
                      <option value="">Sélectionnez un programme</option>
                      <option value="leadership">Développement du Leadership</option>
                      <option value="community">Service Communautaire</option>
                      <option value="innovation">Laboratoires d'Innovation</option>
                      <option value="entrepreneurship">Entrepreneuriat Social</option>
                      <option value="exchange">Échanges Internationaux</option>
                      <option value="training">Formation Continue</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="motivation">Lettre de motivation *</label>
                    <Textarea id="motivation" rows={8} required placeholder="Expliquez pourquoi..." />
                  </div>
                  <div>
                    <label htmlFor="experience">Expérience en leadership (optionnel)</label>
                    <Textarea id="experience" rows={6} placeholder="Décrivez vos expériences..." />
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="terms" required />
                    <label htmlFor="terms" className="text-sm text-muted-foreground">J'accepte les conditions</label>
                  </div>
                  <Button type="submit" size="lg" className="w-full">Soumettre ma candidature</Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 text-center text-muted-foreground">
              <p>
                Après soumission, notre équipe examinera votre candidature et vous contactera sous 5-7 jours ouvrables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Processus de candidature</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Candidature", description: "Soumettez votre formulaire en ligne" },
              { step: "02", title: "Évaluation", description: "Notre équipe examine votre profil" },
              { step: "03", title: "Entretien", description: "Entretien avec notre comité de sélection" },
              { step: "04", title: "Intégration", description: "Bienvenue dans la communauté !" },
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-lg text-center">
                <CardContent className="pt-8 pb-8">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}