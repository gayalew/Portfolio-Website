import logo from './images/logo.jpg'

const aboutItems = [
  {
    label: 'Project done',
    number: 11,
  },
  {
    label: 'Years of experiance',
    number: 3,
  },
]

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Bemnet Ayalew, a full-stack web and mobile app developer based in BahirDar, Ethiopia. 
            I have been building interactive and scalable websites and mobile apps for the past 3 years and have gained a profound experiance on the field. 
            I am always looking for new opportunities to work on building websites that are user-friendly and accessible to everyone. 
            Feel free to reach out to me if you have any questions or would like to collaborate on a project.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
             aboutItems.map(({label, number}, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>
               
                  <p className="">{label}</p>
                </div>
              
              ))
            }

            <img src={logo} alt="Logo" width="30" height="30" className="ml-auto md:w-[40px] md:h-[40px]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
