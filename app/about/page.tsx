import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Users } from "lucide-react"
import FadeInSection from "@/components/FadeInSection"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}

      {/* <section className="py-24 bg-card">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/abstract-geometric-pattern.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
        />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">À propos de nous</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              L'Association des Leaders d'Excellence est un catalyseur de transformation pour les jeunes leaders du
              monde entier.
            </p>
          </div>
        </div>
      </section> */}
  <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: "url('/propos.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "brightness(30%)",
      opacity: 0.8,
    }}
  ></div>

  <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white text-balance">
      À propos de nous
    </h1>
    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 text-pretty">
      L'Association des Leaders d'Excellence est un catalyseur de transformation
      pour les jeunes leaders du monde entier.
    </p>
  </div>
</section>



      {/* Mission & Vision */}
      <FadeInSection>
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <Card className="border-none shadow-lg">
                <CardContent className="pt-12 pb-12">
                  <Target className="w-16 h-16 text-primary mb-6" />
                  <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Donner aux jeunes leaders les moyens de développer leurs compétences, de créer des réseaux durables et
                    d'avoir un impact positif dans leurs communautés à travers des programmes de mentorat, de formation et
                    de projets collaboratifs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="pt-12 pb-12">
                  <Eye className="w-16 h-16 text-primary mb-6" />
                  <h2 className="text-3xl font-bold mb-4">Notre Vision</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Un monde où chaque jeune a l'opportunité de développer son potentiel de leadership et de contribuer à
                    créer un changement positif et durable dans la société, guidé par les valeurs d'excellence,
                    d'innovation et d'intégrité.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Values */}
      <FadeInSection>
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Excellence",
                  description:
                    "Nous visons l'excellence dans tout ce que nous faisons, encourageant nos membres à donner le meilleur d'eux-mêmes.",
                },
                {
                  title: "Innovation",
                  description:
                    "Nous encourageons la créativité et l'innovation pour résoudre les défis complexes de notre époque.",
                },
                {
                  title: "Intégrité",
                  description: "Nous agissons avec honnêteté, transparence et responsabilité dans toutes nos actions.",
                },
                {
                  title: "Collaboration",
                  description:
                    "Nous croyons au pouvoir de la collaboration et du travail d'équipe pour créer un impact durable.",
                },
              ].map((value, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="pt-8 pb-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* History */}
      <FadeInSection>
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Notre Histoire</h2>
              <div className="space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fondée par un groupe de jeunes professionnels passionnés, l'Association des Leaders de l'Excellence est
                  née de la conviction que le leadership peut être enseigné, développé et cultivé chez chaque individu.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Depuis nos débuts, nous avons formé plus de 500 jeunes leaders qui ont lancé des projets innovants, créé
                  des entreprises sociales et contribué au développement de leurs communautés. Notre réseau s'étend
                  maintenant à travers plusieurs pays, créant une communauté mondiale de leaders engagés.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Aujourd'hui, nous continuons à évoluer et à innover, en développant de nouveaux programmes et en créant
                  des opportunités pour la prochaine génération de leaders qui façonneront notre avenir.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Team Section */}
      <FadeInSection>
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Notre Équipe</h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Une équipe dévouée de professionnels et de mentors engagés à soutenir la prochaine génération de leaders.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                { name: "Dr. Marie Dubois", role: "Directrice Exécutive" },
                { name: "Jean-Pierre Martin", role: "Directeur des Programmes" },
                { name: "Fatima Hassan", role: "Responsable Partenariats" },
                { name: "Thomas Lefebvre", role: "Coordinateur Innovation" },
              ].map((member, index) => (
                <Card key={index} className="border-none shadow-lg text-center">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CTA */}
      <FadeInSection>
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Rejoignez notre mission</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Ensemble, nous pouvons créer un avenir meilleur. Devenez membre ou soutenez notre cause.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/join">Devenir membre</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/donate">Faire un don</Link>
              </Button>
            </div>
          </div>
        </section>
      </FadeInSection>
    </main>
  )
}
