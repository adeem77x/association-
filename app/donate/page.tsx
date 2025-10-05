import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, Users, Award, Lightbulb } from "lucide-react"

export default function DonatePage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-20 h-20 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Faire un don</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Votre générosité permet de former la prochaine génération de leaders et de créer un impact durable dans
              les communautés.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Votre impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                amount: "50€",
                impact: "Finance un atelier de leadership pour un jeune",
              },
              {
                icon: Award,
                amount: "100€",
                impact: "Offre une bourse partielle pour un programme",
              },
              {
                icon: Lightbulb,
                amount: "250€",
                impact: "Soutient un projet d'innovation sociale",
              },
              {
                icon: Heart,
                amount: "500€",
                impact: "Finance une bourse complète pour un membre",
              },
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardContent className="pt-12 pb-12">
                  <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-4">{item.amount}</div>
                  <p className="text-muted-foreground leading-relaxed">{item.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="border-none shadow-xl">
              <CardContent className="pt-12 pb-12">
                <h2 className="text-3xl font-bold mb-8 text-center">Faire un don</h2>

                {/* Donation Amount Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-medium mb-4">Montant du don</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {["25€", "50€", "100€", "250€"].map((amount) => (
                      <button
                        key={amount}
                        className="px-6 py-4 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors font-semibold"
                      >
                        {amount}
                      </button>
                    ))}
                  </div>
                  <Input type="number" placeholder="Autre montant" className="text-center text-lg" />
                </div>

                {/* Donation Type */}
                <div className="mb-8">
                  <label className="block text-sm font-medium mb-4">Type de don</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button className="px-6 py-4 border-2 border-primary bg-primary/5 rounded-lg font-semibold">
                      Don unique
                    </button>
                    <button className="px-6 py-4 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors font-semibold">
                      Don mensuel
                    </button>
                  </div>
                </div>

                {/* Donor Information */}
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="donorFirstName" className="block text-sm font-medium mb-2">
                        Prénom
                      </label>
                      <Input id="donorFirstName" placeholder="Votre prénom" />
                    </div>
                    <div>
                      <label htmlFor="donorLastName" className="block text-sm font-medium mb-2">
                        Nom
                      </label>
                      <Input id="donorLastName" placeholder="Votre nom" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="donorEmail" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="donorEmail" type="email" placeholder="votre.email@exemple.com" />
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="anonymous" className="mt-1" />
                    <label htmlFor="anonymous" className="text-sm text-muted-foreground">
                      Je souhaite rester anonyme
                    </label>
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="newsletter" className="mt-1" />
                    <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                      Je souhaite recevoir des nouvelles de l'association
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Procéder au paiement
                  </Button>
                </form>

                <p className="text-center text-sm text-muted-foreground mt-6">
                  Votre don est déductible des impôts à hauteur de 66% en France
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Pourquoi faire un don ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Accessibilité",
                description:
                  "Vos dons permettent d'offrir des bourses aux jeunes talentueux qui n'ont pas les moyens financiers.",
              },
              {
                title: "Innovation",
                description: "Soutenez des projets innovants qui apportent des solutions concrètes aux défis sociaux.",
              },
              {
                title: "Impact durable",
                description:
                  "Investissez dans le développement de leaders qui créeront un changement positif pour des générations.",
              },
            ].map((reason, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-8 pb-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Transparence financière</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Nous nous engageons à utiliser vos dons de manière responsable et transparente. Chaque année, nous
              publions un rapport détaillé sur l'utilisation des fonds.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">75%</div>
                <p className="text-muted-foreground">Programmes et projets</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">15%</div>
                <p className="text-muted-foreground">Administration</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">10%</div>
                <p className="text-muted-foreground">Développement</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
