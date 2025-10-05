import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Building2, Handshake, Globe } from "lucide-react"

export default function PartnersPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Nos Partenaires</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Ensemble, nous créons un écosystème de soutien pour développer la prochaine génération de leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Building2,
                title: "Partenaires Corporatifs",
                description:
                  "Entreprises qui soutiennent notre mission à travers des financements et des opportunités.",
              },
              {
                icon: Globe,
                title: "Organisations Internationales",
                description: "ONG et institutions qui collaborent sur des projets d'impact global.",
              },
              {
                icon: Handshake,
                title: "Partenaires Académiques",
                description: "Universités et institutions éducatives qui enrichissent nos programmes.",
              },
            ].map((type, index) => (
              <Card key={index} className="border-none shadow-lg text-center">
                <CardContent className="pt-12 pb-12">
                  <type.icon className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Nos partenaires de confiance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-12 pb-12 flex items-center justify-center">
                  <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center">
                    <Building2 className="w-16 h-16 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Pourquoi devenir partenaire</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Impact social",
                description:
                  "Contribuez au développement de la prochaine génération de leaders et créez un impact positif durable.",
              },
              {
                title: "Visibilité",
                description:
                  "Augmentez votre visibilité auprès d'une communauté engagée de jeunes professionnels talentueux.",
              },
              {
                title: "Recrutement",
                description: "Accédez à un vivier de talents exceptionnels formés aux compétences de leadership.",
              },
              {
                title: "Innovation",
                description: "Collaborez sur des projets innovants et bénéficiez de perspectives fraîches.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Devenez partenaire</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-primary-foreground/90">
            Rejoignez notre réseau de partenaires et contribuez à former les leaders de demain.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
