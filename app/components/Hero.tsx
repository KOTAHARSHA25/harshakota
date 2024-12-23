import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Harsha Kota</h1>
          <h2 className="text-2xl md:text-3xl mb-6">AI & ML Enthusiast</h2>
          <p className="text-xl mb-8">Transforming ideas into intelligent solutions</p>
          <a href="#contact" className="bg-white text-blue-600 py-2 px-6 rounded-full font-bold hover:bg-blue-100 transition duration-300 inline-block">Get in Touch</a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image 
            src="https://media.licdn.com/dms/image/v2/D5603AQFcXuvY-c5fBg/profile-displayphoto-shrink_800_800/B56ZOahKoPGsAg-/0/1733464207157?e=1740614400&v=beta&t=kk1FUJwOR-TGdLBptDz3QMfbvV8sGPr_Bq9uBQsri9s" 
            alt="Kota Harsha" 
            width={300} 
            height={300} 
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

