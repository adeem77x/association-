import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">ALE</h3>
            <p className="text-sm text-primary-foreground/80">Association des Leaders de l'Excellence</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Programmes
                </Link>
              </li>
              <li>
                <Link href="/members" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Membres
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">S'engager</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/join" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Rejoignez-nous
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Faire un don
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Partenaires
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Restez connecté</h4>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Recevez les dernières mises à jour sur nos programmes et événements.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="secondary" size="sm">
                S'abonner
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Association des Leaders de l'Excellence. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
