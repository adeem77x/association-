import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import FadeInSection from "@/components/FadeInSection"

export default function BlogPage() {
  const posts = [
    {
      title: "Les 5 compétences essentielles du leader moderne",
      excerpt:
        "Découvrez les compétences clés que tout leader doit développer pour réussir dans le monde d'aujourd'hui.",
      date: "15 Mars 2024",
      author: "Dr. Marie Dubois",
      category: "Leadership",
      image: "modern+leader+skills+professional",
    },
    {
      title: "Comment notre programme a transformé ma carrière",
      excerpt: "Le témoignage inspirant d'un membre sur son parcours de transformation personnelle et professionnelle.",
      date: "10 Mars 2024",
      author: "Sarah Johnson",
      category: "Témoignages",
      image: "career+transformation+success+story",
    },
    {
      title: "Innovation sociale : créer un impact durable",
      excerpt: "Explorez comment l'innovation sociale peut résoudre les défis les plus pressants de notre société.",
      date: "5 Mars 2024",
      author: "Thomas Lefebvre",
      category: "Innovation",
      image: "social+innovation+impact+community",
    },
    {
      title: "Le pouvoir du mentorat dans le développement du leadership",
      excerpt:
        "Pourquoi le mentorat est crucial pour développer les compétences de leadership et comment en tirer le meilleur parti.",
      date: "1 Mars 2024",
      author: "Jean-Pierre Martin",
      category: "Mentorat",
      image: "mentorship+professional+development",
    },
    {
      title: "Nos projets communautaires qui changent des vies",
      excerpt: "Un aperçu des projets communautaires menés par nos membres et leur impact sur les communautés locales.",
      date: "25 Février 2024",
      author: "Amara Okafor",
      category: "Projets",
      image: "community+projects+volunteers+impact",
    },
    {
      title: "L'entrepreneuriat social : allier profit et impact",
      excerpt: "Comment créer une entreprise qui génère à la fois des revenus et un impact social positif.",
      date: "20 Février 2024",
      author: "Fatima Hassan",
      category: "Entrepreneuriat",
      image: "social+entrepreneurship+business+impact",
    },
  ]

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <FadeInSection>
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Blog & Actualités</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Découvrez nos dernières actualités, histoires inspirantes et ressources pour développer votre leadership.
            </p>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Featured Post */}
      <FadeInSection>
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="border-none shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-80 lg:h-auto">
                <img src="/leadership-conference-keynote-speaker.jpg" alt="Article en vedette" className="object-cover w-full h-full" />
              </div>
              <CardContent className="pt-12 pb-12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4 w-fit">
                  Article en vedette
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Retour sur notre conférence annuelle 2024</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Plus de 300 jeunes leaders se sont réunis pour trois jours d'inspiration, d'apprentissage et de
                  networking. Découvrez les moments forts et les enseignements clés de cet événement exceptionnel.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>18 Mars 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>Équipe ALE</span>
                  </div>
                </div>
                <Button asChild>
                  <Link href="#">
                    Lire l'article
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>
      </FadeInSection>

      {/* Blog Posts Grid */}
      <FadeInSection>
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Derniers articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`/.jpg?height=300&width=400&query=${post.image}`}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6 pb-6">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href="#">
                      Lire plus
                      <ArrowRight className="ml-2" size={14} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Newsletter */}
      <FadeInSection>
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="border-none shadow-xl bg-primary text-primary-foreground">
            <CardContent className="pt-12 pb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Restez informé</h2>
              <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et actualités directement dans
                votre boîte mail.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button variant="secondary" size="lg">
                  S'abonner
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      </FadeInSection>
    </main>
  )
}
