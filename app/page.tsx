import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Heart, Lightbulb } from "lucide-react"
import FadeInSection from "@/components/FadeInSection"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/hero.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(30%)",
            opacity: 0.8,
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight text-white font-[family-name:var(--font-montserrat)]">
            Diriger avec Excellence
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 text-pretty">
            Donner aux jeunes leaders les moyens d'instaurer un changement positif dans leurs communautés et au-delà.
            Rejoignez un mouvement d'excellence, d'innovation et d'impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg bg-white text-blue-600 font-bold hover:bg-gray-100 shadow-xl">
              <Link href="/join">
                Rejoignez notre association
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600"
            >
              <Link href="/about">En savoir plus</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <FadeInSection>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black font-[family-name:var(--font-montserrat)]">
            Notre Impact
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Les principes qui nous animent. Nous nous appuyons sur des convictions fondamentales qui guident chaque
            programme, projet et partenariat.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Membres actifs" },
              { number: "50+", label: "Projets terminés" },
              { number: "25+", label: "Prix remportés" },
              { number: "10 000+", label: "Vies touchées" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center border-none shadow-xl bg-black hover:bg-gray-900 transition-colors"
              >
                <CardContent className="pt-12 pb-12">
                  <div className="text-5xl md:text-6xl font-bold mb-2 text-white font-[family-name:var(--font-montserrat)]">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-semibold">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Mission Section */}
      <FadeInSection>
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-black font-[family-name:var(--font-montserrat)]">
                Former les leaders de demain
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                L'Association des Leaders d'Excellence est plus qu'une simple organisation : c'est un catalyseur de
                transformation. Nous sommes convaincus que chaque jeune a le potentiel de diriger, d'innover et de créer
                un changement significatif dans le monde.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Grâce à nos programmes complets, à nos opportunités de mentorat et à nos projets collaboratifs, nous
                permettons aux jeunes de développer des compétences essentielles en leadership, de créer des réseaux
                durables et d'avoir un impact positif dans leurs communautés.
              </p>
              <Button asChild size="lg" className="bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg">
                <Link href="/about">
                  Découvrez notre mission
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/confident-young-leader-modern-office.jpg"
                alt="Un jeune leader confiant"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Impact Areas */}
      <FadeInSection>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance text-black font-[family-name:var(--font-montserrat)]">
            Là où le changement se produit
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Du développement du leadership au service communautaire, nous faisons la différence dans de nombreux
            domaines.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                number: "01",
                title: "Développement du leadership",
                description:
                  "Notre programme de base comprend des ateliers intensifs, un mentorat individuel et une formation à la prise de parole en public conçus pour développer les compétences essentielles et la confiance en soi pour un leadership efficace.",
              },
              {
                icon: Heart,
                number: "02",
                title: "Service communautaire",
                description:
                  "Nous pensons que le leadership est une question d'action. Nos membres s'engagent dans des projets concrets qui créent des changements concrets et positifs au sein des communautés locales et mondiales.",
              },
              {
                icon: Lightbulb,
                number: "03",
                title: "Laboratoires d'innovation",
                description:
                  "Un écosystème collaboratif où les jeunes esprits développent, prototypent et lancent des solutions aux défis urgents. C'est un espace de créativité, de technologie et d'entrepreneuriat social.",
              },
            ].map((area, index) => (
              <Card
                key={index}
                className="border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 bg-gray-50"
              >
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-6xl font-bold text-gray-200 font-[family-name:var(--font-montserrat)]">
                      {area.number}
                    </div>
                    <area.icon className="w-12 h-12 text-blue-600 mt-2" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-black font-[family-name:var(--font-montserrat)]">
                    {area.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{area.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                  >
                    <Link href="/programs">
                      Explorer les programmes
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Gallery Section */}
      <FadeInSection>
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance text-black font-[family-name:var(--font-montserrat)]">
            Galerie d'action
          </h2>
          <p className="text-center text-gray-600 mb-16">
            Un aperçu de nos membres qui dirigent, collaborent et ont un impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { query: "young+leaders+brainstorming+whiteboard", alt: "Réflexion collaborative" },
              { query: "young+woman+speaking+podium+conference", alt: "Prise de parole publique" },
              { query: "volunteers+community+garden+project", alt: "Projet communautaire" },
              { query: "student+coding+innovation+lab", alt: "Innovation technologique" },
              { query: "team+celebrating+project+success", alt: "Célébration de succès" },
              { query: "mentorship+meeting+young+professionals", alt: "Mentorat" },
            ].map((image, index) => (
              <div
                key={index}
                className="relative h-80 rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all"
              >
                <img
                  src={`/.jpg?height=400&width=600&query=${image.query}`}
                  alt={image.alt}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Testimonials */}
      <FadeInSection>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance text-black font-[family-name:var(--font-montserrat)]">
            Voix de l'excellence
          </h2>
          <p className="text-center text-gray-600 mb-16">
            Écoutez nos membres parler de leurs expériences et réalisations transformatrices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Cette association a transformé mes compétences en leadership et m'a ouvert des portes que je n'aurais jamais imaginées. Le mentorat et les opportunités offertes ici m'ont aidée à devenir la leader que je suis aujourd'hui.",
                name: "Sarah Johnson",
                role: "Diplômée du programme",
              },
              {
                quote:
                  "Faire partie de cette communauté a changé ma vie. Le soutien est incroyable. J'ai rencontré des pairs tout aussi passionnés par leur engagement à faire bouger les choses.",
                name: "Marcus Chen",
                role: "Ambassadeur de la jeunesse",
              },
              {
                quote:
                  "De la direction d'un projet communautaire à la prise de parole lors d'une conférence nationale, l'association a fourni la plateforme. Plus qu'une organisation, c'est un catalyseur d'impact concret.",
                name: "Amara Okafor",
                role: "Chef de projet",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border border-gray-200 shadow-lg bg-gray-50">
                <CardContent className="pt-8 pb-8">
                  <p className="text-lg mb-6 leading-relaxed italic text-gray-700">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-xl font-bold text-white">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-black">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection>
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-[family-name:var(--font-montserrat)]">
            Prêt à diriger ?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300">
            Rejoignez notre communauté de jeunes leaders et faites la différence dès aujourd'hui. Votre chemin vers
            l'excellence commence ici.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg bg-blue-600 text-white hover:bg-blue-700 font-bold shadow-xl">
              <Link href="/join">Devenir membre</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg border-2 border-white text-white hover:bg-white hover:text-black bg-transparent font-bold"
            >
              <Link href="/donate">Faire un don</Link>
            </Button>
          </div>
        </div>
      </section>
      </FadeInSection>
    </main>
  )
}
