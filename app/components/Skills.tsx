const skills = [
  { name: "Python", icon: "devicon-python-plain" },
  { name: "Java", icon: "devicon-java-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "C", icon: "devicon-c-plain" },
  { name: "HTML", icon: "devicon-html5-plain" },
  { name: "CSS", icon: "devicon-css3-plain" },
  { name: "TensorFlow", icon: "devicon-tensorflow-original" },
  { name: "PyTorch", icon: "devicon-pytorch-original" },
  { name: "Pandas", icon: "devicon-pandas-original" },
  { name: "NumPy", icon: "devicon-numpy-original" },
  { name: "Scikit-learn", icon: "devicon-sklearn-plain" },
  { name: "NLTK", icon: "devicon-python-plain" },
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "AWS", icon: "devicon-amazonwebservices-original" },
  { name: "GCP", icon: "devicon-googlecloud-plain" },
  { name: "SQL", icon: "devicon-mysql-plain" },
  { name: "Firebase", icon: "devicon-firebase-plain" },
  { name: "Azure", icon: "devicon-azure-plain" },
  { name: "Oracle Database", icon: "devicon-oracle-original" },
  { name: "Android Development (Kotlin)", icon: "devicon-android-plain" },
  { name: "Kotlin", icon: "devicon-kotlin-plain" },
  { name: "Git", icon: "devicon-git-plain" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "VS Code", icon: "devicon-vscode-plain" },
  { name: "PyCharm", icon: "devicon-pycharm-plain" },
  { name: "Jupyter Notebook", icon: "devicon-jupyter-plain" },
  { name: "IntelliJ IDEA", icon: "devicon-intellij-plain" },
  { name: "Keras", icon: "devicon-keras-plain" },
  { name: "OpenCV", icon: "devicon-opencv-plain" },
  { name: "React", icon: "devicon-react-original" },
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "Express.js", icon: "devicon-express-original" },
  { name: "Flask", icon: "devicon-flask-original" },
  { name: "Android Studio", icon: "devicon-androidstudio-plain" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <i className={`${skill.icon} text-4xl mb-2 text-blue-600`}></i>
              <span className="text-sm font-semibold text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

