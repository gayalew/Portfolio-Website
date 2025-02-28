import SkillCard from "./SkillCard";

const skillItem = [
    { imgSrc: "icons/html5.svg", label: "HTML", desc: "Design tool" },
    { imgSrc: "icons/css3.svg", label: "CSS3", desc: "User Interface" },
    { imgSrc: "icons/tailwind.svg", label: "Tailwind", desc: "User Interface" },
    { imgSrc: "icons/figma.svg", label: "Figma", desc: "Design tool" },
    { imgSrc: "icons/js.svg", label: "JavaScript", desc: "Interaction" },
    { imgSrc: "icons/react.svg", label: "React", desc: "JavaScript library" },
    { imgSrc: "icons/nodejs.svg", label: "NodeJS", desc: "Web server" },
    { imgSrc: "icons/express.svg", label: "ExpressJS", desc: "Node Framework" },
    { imgSrc: "icons/mongodb.svg", label: "MongoDB", desc: "Database" },
    { imgSrc: "icons/php.svg", label: "PHP", desc: "Backend language" },
    { imgSrc: "icons/python.svg", label: "Python", desc: "Backend language" },
    { imgSrc: "icons/flutter.svg", label: "Flutter", desc: "Mobile app development" },
];

const Skill = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">Essential Tools I Use</h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                    Discover the powerful tools and technologies I use to create exceptional, high-performing websites and applications.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]">
                    {skillItem.map(({ imgSrc, label, desc }, index) => (
                        <SkillCard key={index} imgSrc={imgSrc} label={label} desc={desc} className="reveal-up"/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
