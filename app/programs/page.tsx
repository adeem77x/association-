import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Lightbulb, Briefcase, Globe, BookOpen } from "lucide-react"

export default function ProgramsPage() {
  const programs = [
    {
      icon: Users,
      title: "Développement du Leadership",
      duration: "6 mois",
      description:
        "Programme intensif comprenant des ateliers, du mentorat individuel et une formation à la prise de parole en public.",
      features: [
        "Ateliers hebdomadaires de leadership",
        "Mentorat individuel avec des leaders expérimentés",
        "Formation à la prise de parole en public",
        "Développement de compétences en gestion d'équipe",
      ],
    },
    {
      icon: Heart,
      title: "Service Communautaire",
      duration: "3-12 mois",
      description: "Projets concrets qui créent des changements positifs au sein des communautés locales et mondiales.",
      features: [
        "Projets communautaires dirigés par les membres",
        "Partenariats avec des ONG locales",
        "Impact mesurable et durable",
        "Développement de compétences en gestion de projet",
      ],
    },
    {
      icon: Lightbulb,
      title: "Laboratoires d'Innovation",
      duration: "4 mois",
      description: "Écosystème collaboratif pour développer, prototyper et lancer des solutions aux défis urgents.",
      features: [
        "Accès à des espaces de co-working",
        "Mentorat technique et entrepreneurial",
        "Financement de démarrage pour projets prometteurs",
        "Réseau d'investisseurs et de partenaires",
      ],
    },
    {
      icon: Briefcase,
      title: "Entrepreneuriat Social",
      duration: "6 mois",
      description: "Formation complète pour lancer et développer des entreprises à impact social.",
      features: [
        "Formation en business model et stratégie",
        "Accompagnement juridique et financier",
        "Pitch training et networking",
        "Accès à un réseau d'entrepreneurs",
      ],
    },
    {
      icon: Globe,
      title: "Échanges Internationaux",
      duration: "2-4 semaines",
      description: "Programmes d'échange avec des organisations partenaires à travers le monde.",
      features: [
        "Immersion culturelle et professionnelle",
        "Collaboration sur des projets internationaux",
        "Développement de réseaux globaux",
        "Apprentissage interculturel",
      ],
    },
    {
      icon: BookOpen,
      title: "Formation Continue",
      duration: "Flexible",
      description:
        "Ateliers et séminaires sur des thématiques variées pour le développement personnel et professionnel.",
      features: [
        "Webinaires mensuels avec des experts",
        "Ateliers thématiques",
        "Accès à une bibliothèque de ressources",
        "Certificats de formation",
      ],
    },
  ]

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Nos Programmes</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Des programmes complets conçus pour développer vos compétences en leadership et créer un impact durable.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <program.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                      <p className="text-sm text-muted-foreground">Durée: {program.duration}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>
                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/join">S'inscrire au programme</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Comment ça marche</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Candidature",
                description: "Soumettez votre candidature en ligne avec votre motivation et vos objectifs.",
              },
              {
                step: "02",
                title: "Sélection",
                description: "Notre équipe évalue votre profil et vous contacte pour un entretien.",
              },
              {
                step: "03",
                title: "Intégration",
                description: "Rejoignez votre cohorte et commencez votre parcours de développement.",
              },
              {
                step: "04",
                title: "Impact",
                description: "Mettez en pratique vos compétences et créez un changement positif.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Prêt à commencer ?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Rejoignez nos programmes et commencez votre parcours vers l'excellence en leadership.
          </p>
          <Button asChild size="lg">
            <Link href="/join">Postuler maintenant</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
