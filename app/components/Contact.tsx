import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <div className="flex justify-center space-x-8">
          <a href="mailto:kotaharsha1234@gmail.com" className="flex flex-col items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <EnvelopeIcon className="h-8 w-8 mb-2" />
            <span className="text-sm">Email</span>
          </a>
          <a href="tel:+919705040749" className="flex flex-col items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <PhoneIcon className="h-8 w-8 mb-2" />
            <span className="text-sm">Phone</span>
          </a>
          <a href="https://www.linkedin.com/in/harsha-kota25" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <i className="devicon-linkedin-plain text-4xl mb-2"></i>
            <span className="text-sm">LinkedIn</span>
          </a>
          <a href="https://github.com/KOTAHARSHA25" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <i className="devicon-github-original text-4xl mb-2"></i>
            <span className="text-sm">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}

