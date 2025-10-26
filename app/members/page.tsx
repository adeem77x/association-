import FadeInSection from "@/components/FadeInSection"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Briefcase } from "lucide-react"

export default function MembersPage() {
  const members = [
    {
      name: "Sarah Johnson",
      role: "Diplômée du programme",
      program: "Leadership 2023",
      achievement: "Fondatrice d'une ONG éducative",
    },
    {
      name: "Marcus Chen",
      role: "Ambassadeur de la jeunesse",
      program: "Innovation 2022",
      achievement: "Développeur d'application sociale",
    },
    {
      name: "Amara Okafor",
      role: "Chef de projet",
      program: "Service Communautaire 2023",
      achievement: "Leader de projet environnemental",
    },
    {
      name: "Lucas Dubois",
      role: "Entrepreneur social",
      program: "Entrepreneuriat 2022",
      achievement: "Co-fondateur startup EdTech",
    },
    {
      name: "Aisha Rahman",
      role: "Mentor",
      program: "Leadership 2021",
      achievement: "Consultante en développement",
    },
    {
      name: "David Martinez",
      role: "Innovateur",
      program: "Lab Innovation 2023",
      achievement: "Créateur de solutions tech",
    },
  ]

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <FadeInSection>
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Nos Membres</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Découvrez les leaders exceptionnels qui font partie de notre communauté et créent un impact positif dans
              le monde.
            </p>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Stats */}
      <FadeInSection>
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, number: "500+", label: "Membres actifs" },
              { icon: Award, number: "25+", label: "Prix remportés" },
              { icon: Briefcase, number: "50+", label: "Projets lancés" },
            ].map((stat, index) => (
              <Card key={index} className="border-none shadow-lg text-center">
                <CardContent className="pt-8 pb-8">
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Members Grid */}
      <FadeInSection>
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Membres en vedette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 pb-8">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold">{member.name[0]}</span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                  <p className="text-center text-muted-foreground mb-4">{member.role}</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-center">
                      <span className="font-semibold">Programme:</span> {member.program}
                    </p>
                    <p className="text-center text-muted-foreground">{member.achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Community Benefits */}
      <FadeInSection>
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Avantages de la communauté</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Réseau mondial",
                description:
                  "Connectez-vous avec des leaders du monde entier et développez votre réseau professionnel.",
              },
              {
                title: "Mentorat",
                description: "Bénéficiez de l'accompagnement de mentors expérimentés dans votre domaine.",
              },
              {
                title: "Opportunités",
                description: "Accédez à des opportunités exclusives de carrière, de formation et de collaboration.",
              },
              {
                title: "Événements",
                description: "Participez à des événements, conférences et ateliers tout au long de l'année.",
              },
              {
                title: "Ressources",
                description: "Accédez à une bibliothèque de ressources, outils et formations en ligne.",
              },
              {
                title: "Impact",
                description: "Contribuez à des projets qui créent un changement positif dans la société.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </FadeInSection>
    </main>
  )
}
