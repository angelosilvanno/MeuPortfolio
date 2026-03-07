import React from 'react';

interface Skill {
    name: string;
    icon?: string;
    img?: string;
}

const Skills: React.FC = () => {
    const frontSkills: Skill[] = [
        { name: 'HTML5', icon: 'fab fa-html5 text-orange-500' },
        { name: 'CSS3', icon: 'fab fa-css3-alt text-indigo-500' },
        { name: 'JavaScript', icon: 'fab fa-js-square text-yellow-500' },
        { name: 'React', icon: 'fab fa-react text-indigo-400' },
        { name: 'Next.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Tailwind', img: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg' },
        { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap text-violet-600' },
        { name: 'Vite', img: 'https://vitejs.dev/logo.svg' }
    ];

    const backSkills: Skill[] = [
        { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
    ];

    const toolSkills: Skill[] = [
        { name: 'Git', icon: 'fab fa-git-alt text-red-500' },
        { name: 'GitHub', icon: 'fab fa-github text-slate-800' }
    ];

    const SkillCard = ({ skill }: { skill: Skill }) => (
        <div className="flex flex-col items-center justify-center p-4 bg-zinc-50 border border-slate-100 rounded-xl hover:shadow-md hover:border-indigo-200 transition-all duration-300 group">
            {skill.icon ? (
                <i className={`${skill.icon} text-4xl mb-3 group-hover:scale-110 transition-transform`}></i>
            ) : (
                <img src={skill.img} alt={skill.name} className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
            )}
            <span className="text-slate-600 text-sm font-semibold">{skill.name}</span>
        </div>
    );

    return (
        <section id="skills" className="bg-white">
            <div className="container mx-auto px-4 py-16 md:py-24 scroll-mt-20">
                <h2 className="text-3xl font-bold text-center mb-4 section-title text-indigo-600">Hard Skills</h2>
                <p className="text-lg text-center mb-16 text-slate-600">Tecnologias que domino e ferramentas que uso no dia a dia</p>

                <div className="max-w-5xl mx-auto space-y-12">
                    {/* Front-end */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-700 mb-6 flex items-center gap-3">
                            <span className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><i className="fas fa-code"></i></span>
                            Front-end
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {frontSkills.map((skill) => (
                                <SkillCard key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </div>

                    {/* Back-end */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-700 mb-6 flex items-center gap-3">
                            <span className="p-2 bg-emerald-100 rounded-lg text-emerald-600"><i className="fas fa-server"></i></span>
                            Back-end
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {backSkills.map((skill) => (
                                <SkillCard key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </div>

                    {/* Ferramentas */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-700 mb-6 flex items-center gap-3">
                            <span className="p-2 bg-violet-100 rounded-lg text-violet-600"><i className="fas fa-tools"></i></span>
                            Ferramentas
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {toolSkills.map((skill) => (
                                <SkillCard key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;