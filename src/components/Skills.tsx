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
        { name: 'ReactJS', icon: 'fab fa-react text-indigo-400' },
        { name: 'Next.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
        { name: 'Tailwind CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap text-violet-600' },
        { name: 'Vite', img: 'https://vitejs.dev/logo.svg' }
    ];

    const backSkills: Skill[] = [
        { name: 'Node.js', icon: 'fab fa-node-js text-green-600' },
        { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
        { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' }
    ];

    const toolSkills: Skill[] = [
        { name: 'Git', icon: 'fab fa-git-alt text-red-500' },
        { name: 'GitHub', icon: 'fab fa-github text-slate-800' }
    ];

    const SkillCard = ({ skill }: { skill: Skill }) => (
        <div className="flex flex-col items-center justify-center p-6 bg-slate-50/50 border border-slate-100 rounded-2xl hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:border-indigo-100 transition-all duration-500 hover:-translate-y-1.5 group">
            {skill.icon ? (
                <i className={`${skill.icon} text-4xl mb-4 group-hover:scale-110 transition-transform duration-500`}></i>
            ) : (
                <img src={skill.img} alt={skill.name} className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform duration-500" />
            )}
            <span className="text-slate-600 font-bold text-[13px] tracking-tight">{skill.name}</span>
        </div>
    );

    return (
        <section id="skills" className="bg-slate-50/50 border-b border-slate-100">
            <div className="container mx-auto px-6 py-20 md:py-28 scroll-mt-20">
                <h2 className="text-3xl md:text-4xl font-black text-center mb-3 section-title text-slate-950 tracking-tighter">Hard Skills</h2>
                <p className="text-[11px] md:text-xs text-center mb-20 text-slate-500 font-bold uppercase tracking-[0.2em]">Tecnologias que domino e ferramentas que uso no dia a dia</p>

                <div className="max-w-5xl mx-auto space-y-16">
                    {/* Front-end */}
                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-8 flex items-center gap-4">
                            <span className="p-2 bg-indigo-50 rounded-xl text-indigo-600 shadow-sm"><i className="fas fa-code text-sm"></i></span>
                            Front-end
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
                            {frontSkills.map((skill) => (
                                <SkillCard key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </div>

                    {/* Back-end */}
                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-8 flex items-center gap-4">
                            <span className="p-2 bg-emerald-50 rounded-xl text-emerald-600 shadow-sm"><i className="fas fa-server text-sm"></i></span>
                            Back-end
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
                            {backSkills.map((skill) => (
                                <SkillCard key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </div>

                    {/* Ferramentas */}
                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-8 flex items-center gap-4">
                            <span className="p-2 bg-slate-100 rounded-xl text-slate-950 shadow-sm"><i className="fas fa-tools text-sm"></i></span>
                            Ferramentas
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
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