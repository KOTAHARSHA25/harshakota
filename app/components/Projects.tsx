import Image from 'next/image'

const projects = [
  {
    title: "Spam Detection",
    description: "AI-Powered Spam Classification System that classifies emails as Spam or Not Spam using advanced NLP techniques.",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNwYW0lMjBlbWFpbHxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Python", "Pandas", "NumPy", "NLTK", "Scikit-learn"]
  },
  {
    title: "YOLOv8-Image and Video Processing Application",
    description: "Developed an end-to-end Flask application that processes live video streams and images for object detection using YOLOv8.",
    image: "https://i.ytimg.com/vi/1sz5fhO8jxA/maxresdefault.jpg",
    tags: ["Python", "Flask", "YOLOv8"]
  },
  {
    title: "ArcVision-Image Recognition API Using YOLO",
    description: "Created a Flask-based API for real-time image recognition using YOLOv3-tiny, handling image uploads and providing object detection results with high performance.",
    image: "https://the-decoder.com/wp-content/uploads/2023/01/YOLOv8-Object-Detection-Instance-Segmentation-0-8-screenshot.png",
    tags: ["Python", "Flask", "YOLO"]
  },
  {
    title: "Facial Emotion Detection",
    description: "Developed a web-based application using Streamlit that performs real-time facial emotion detection through a custom-trained CNN model.",
    image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjaWFsJTIwZW1vdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Python", "Streamlit", "OpenCV", "TensorFlow"]
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="relative h-48">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

