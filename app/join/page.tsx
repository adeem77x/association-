// /pages/join.tsx
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FadeInSection from "@/components/FadeInSection";

export default function JoinPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    education: "",
    program: "",
    motivation: "",
    experience: "",
    terms: false,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value, type, checked } = e.target as HTMLInputElement;
    setFormData(prev => ({ ...prev, [id]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.terms) {
      setSuccessMessage("Vous devez accepter les conditions d'utilisation.");
      return;
    }
    setLoading(true);
    setSuccessMessage("");

    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccessMessage(data.message);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          age: "",
          education: "",
          program: "",
          motivation: "",
          experience: "",
          terms: false,
        });
      } else {
        setSuccessMessage(data.message || "Erreur lors de l'envoi.");
      }
    } catch (err) {
      console.error(err);
      setSuccessMessage("Erreur réseau. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen pt-16">
      {/* Hero & Benefits : garde ta version existante */}
      <FadeInSection>
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-xl">
              <CardContent className="pt-12 pb-12">
                <h2 className="text-3xl font-bold mb-2 text-center">Formulaire de candidature</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName">Prénom *</label>
                      <Input id="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div>
                      <label htmlFor="lastName">Nom *</label>
                      <Input id="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                  </div>

                  <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email *" required />
                  <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Téléphone *" required />
                  <Input id="age" type="number" value={formData.age} onChange={handleChange} placeholder="Âge *" required />
                  <Input id="education" value={formData.education} onChange={handleChange} placeholder="Niveau d'études *" required />

                  <label htmlFor="program">Programme souhaité *</label>
                  <select id="program" value={formData.program} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border">
                    <option value="">Sélectionnez un programme</option>
                    <option value="leadership">Développement du Leadership</option>
                    <option value="community">Service Communautaire</option>
                    <option value="innovation">Laboratoires d'Innovation</option>
                    <option value="entrepreneurship">Entrepreneuriat Social</option>
                    <option value="exchange">Échanges Internationaux</option>
                    <option value="training">Formation Continue</option>
                  </select>

                  <Textarea id="motivation" value={formData.motivation} onChange={handleChange} rows={8} placeholder="Lettre de motivation *" required />
                  <Textarea id="experience" value={formData.experience} onChange={handleChange} rows={6} placeholder="Expérience en leadership (optionnel)" />

                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="terms" checked={formData.terms} onChange={handleChange} />
                    <label htmlFor="terms">J'accepte les conditions d'utilisation</label>
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    {loading ? "Envoi..." : "Soumettre ma candidature"}
                  </Button>

                  {successMessage && <p className="mt-4 text-green-600 font-medium">{successMessage}</p>}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Process etc. (garde ta version) */}
       {/* Process */}
      <FadeInSection>
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
      </FadeInSection>
    </main>
  );
}
