import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Contactez-nous</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Nous sommes là pour répondre à vos questions et vous accompagner dans votre parcours de leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8">Informations de contact</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">contact@leadersexcellence.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Téléphone</h3>
                      <p className="text-muted-foreground">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        123 Avenue de l'Excellence
                        <br />
                        75001 Paris, France
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-none shadow-lg bg-primary text-primary-foreground">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-xl font-bold mb-4">Horaires d'ouverture</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi</span>
                      <span>9h00 - 18h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi</span>
                      <span>10h00 - 16h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche</span>
                      <span>Fermé</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-xl">
                <CardContent className="pt-8 pb-8">
                  <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          Prénom
                        </label>
                        <Input id="firstName" placeholder="Votre prénom" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Nom
                        </label>
                        <Input id="lastName" placeholder="Votre nom" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="votre.email@exemple.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Téléphone (optionnel)
                      </label>
                      <Input id="phone" type="tel" placeholder="+33 1 23 45 67 89" />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Sujet
                      </label>
                      <Input id="subject" placeholder="Objet de votre message" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Décrivez votre demande..." rows={6} />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Questions fréquentes</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Comment puis-je devenir membre ?",
                answer:
                  'Vous pouvez postuler en ligne via notre page "Rejoignez-nous". Notre équipe examinera votre candidature et vous contactera pour un entretien.',
              },
              {
                question: "Quels sont les critères d'admission ?",
                answer:
                  "Nous recherchons des jeunes motivés, engagés et désireux de développer leurs compétences en leadership. Aucune expérience préalable n'est requise.",
              },
              {
                question: "Les programmes sont-ils payants ?",
                answer:
                  "Nous offrons des bourses et des options de financement pour rendre nos programmes accessibles à tous. Contactez-nous pour en savoir plus.",
              },
              {
                question: "Puis-je participer à distance ?",
                answer:
                  "Certains de nos programmes offrent des options hybrides ou en ligne. Consultez la page Programmes pour plus de détails.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6 pb-6">
                  <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
