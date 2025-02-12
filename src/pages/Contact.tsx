import { useState, ChangeEvent, FormEvent } from "react"

export default function Contact() {
  const [formData, setFormData] = useState<{
    email: string
    subject: string
    message: string
  }>({
    email: "",
    subject: "",
    message: "",
  })

  // Gestion du changement dans les champs de formulaire
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Gestion de l'envoi du formulaire
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Valider les champs avant l'envoi (optionnel)
    if (!formData.email || !formData.subject || !formData.message) {
      alert("Tous les champs doivent être remplis !")
      return
    }

    // Simuler l'envoi des données
    console.log("Données envoyées :", formData)
    alert("Votre message a été envoyé !")

    // Réinitialiser le formulaire
    setFormData({ email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="bg-gray-100 p-10">
      <h2 className="text-3xl font-bold text-center my-16">Contactez-moi</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Votre email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-gray-700 font-bold mb-2"
          >
            Objet
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="flex justify-center items-center ">
          <button
            type="submit"
            className="w-50 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Envoyer
          </button>
        </div>
      </form>
    </section>
  )
}
