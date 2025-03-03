import { useState, ChangeEvent, FormEvent, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"

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

  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const image = imageRef.current
    if (image) {
      gsap.fromTo(
        image,
        { x: "-100%" },
        {
          x: "200%",
          duration: 20,
          repeat: -1,
          ease: "linear",
        }
      )
    }
  }, [])

  // Gestion du changement dans les champs de formulaire
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Gestion de l'envoi du formulaire
  // Gestion de l'envoi du formulaire
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.email || !formData.subject || !formData.message) {
      alert("Tous les champs doivent être remplis !")
      return
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )

      const data = await response.json()

      if (response.ok) {
        alert("Votre message a été envoyé !")
        setFormData({ email: "", subject: "", message: "" }) // Réinitialiser le formulaire
      } else {
        alert(`Erreur : ${data.error}`)
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error)
      alert("Erreur lors de l'envoi du message.")
    }
  }

  return (
    <section id="contact" className="p-10 pb-0">
      <div className="background-container"></div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-space-time-regular tracking-wider text-center my-16 block">
        Contactez-moi
      </h2>
      <form
        onSubmit={handleSubmit}
        className="relative max-w-lg mx-auto bg-asfalt-icterine mb-10 border-teal-300 border-6 p-8 shadow-lg rounded-lg  border-b-6 border-b-gray-800 border-l-6 border-l-cyan-700 border-r-6 border-r-cyan-700"
      >
        <span className="absolute inset-0 bg-gradient-to-tl from-pink-500 via-purple-500 to-blue-500 opacity-20 rounded-lg"></span>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-aquamarine font-bold font-orbitron mb-2"
          >
            Votre email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border-aquamarine border-4 rounded-md focus:outline-none focus:ring-2 focus:ring-icterine bg-white opacity-85"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-aquamarine font-bold font-orbitron mb-2"
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
            className="w-full px-4 py-2 border-aquamarine border-4 rounded-md focus:outline-none focus:ring-2 focus:ring-icterine bg-white opacity-85"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-aquamarine font-bold font-orbitron mb-2"
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
            className="w-full px-4 py-2 border-aquamarine border-4 rounded-md focus:outline-none focus:ring-2 focus:ring-icterine bg-white opacity-85"
          ></textarea>
        </div>
        <div className="flex justify-center items-center ">
          <motion.button
            type="submit"
            className="relative px-5 py-2 text-md font-bold uppercase cursor-pointer bg-gradient-to-t from-gray-700 to-gray-500 text-white border-b-4 border-gray-800 rounded-lg shadow-lg transition-transform transform hover:translate-y-[-1px] active:translate-y-1"
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-tl from-pink-500 via-purple-500 to-blue-500 opacity-20 rounded-lg"></span>
            <span className="relative z-10 font-orbitron">Envoyer</span>
          </motion.button>
        </div>
      </form>
      <div className=" bottom-0 left-0 w-full">
        <img
          ref={imageRef}
          src="/assets/space-cowboy.png"
          alt="see you space cowboy"
          className="h-20"
        />
      </div>
    </section>
  )
}
