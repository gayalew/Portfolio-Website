
import ProjectCard from "./ProjectCard"

const works = [
    {
      imgSrc: '/assets/project-1.jpg',
      title: 'An Expense-Tracker App',
      tags: ['Flutter', 'Firebase', 'Development'],
      projectLink: 'https://github.com/gayalew/Expense-Tracker-App'
    },
    {
      imgSrc: '/assets/project-2.png',
      title: 'Patient Record Management System',
      tags: ['PHP', 'CodeIgniter', 'MVC'],
      projectLink: 'https://github.com/gayalew/patientrecords'
    },
    {
      imgSrc: '/assets/project-3.png',
      title: 'Exam Preparation Website',
      tags: ['StudyOnline', 'ExamPrep', 'API'],
      projectLink: 'https://examprep.vercel.app'
    },
    {
      imgSrc: '/assets/project-4.png',
      title: 'Daily Workout-Mapping Website',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/gayalew/workout'
    },
    {
      imgSrc: '/assets/project-5.png',
      title: 'Professional Banking Website',
      tags: ['OnlineBanking', 'BankingWebsite', 'Development'],
      projectLink: 'https://github.com/gayalew/banking-website'
    },
    {
      imgSrc: '/assets/project-6.png',
      title: 'Personal Portfolio',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/gayalew/Portfolio'
    },
  ];


const Work = () => {
    return (
        <section id="work" className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">My Recent Works</h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink }, index) => (
                        <ProjectCard key={index} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work