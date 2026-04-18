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
        { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
        { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
        { name: 'Supabase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' }
    ];

    const toolSkills: Skill[] = [
        { name: 'Git', icon: 'fab fa-git-alt text-red-500' },
        { name: 'GitHub', icon: 'fab fa-github text-slate-800' },
        { name: 'AWS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' }
    ];

    const engSkills: Skill[] = [
        { name: 'Clean Code', icon: 'fas fa-broom text-slate-400' },
        { name: 'Scrum', icon: 'fas fa-users text-slate-400' },
        { name: 'Kanban', icon: 'fas fa-columns text-slate-400' }
    ];

    const SkillCard = ({ skill }: { skill: Skill }) => (
        <div className="flex flex-row items-center gap-2.5 py-2.5 px-5 bg-white border border-slate-200 rounded-xl hover:border-indigo-400 hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.05)] transition-all duration-300 group cursor-default shadow-xs">
            {skill.icon ? (
                <i className={`${skill.icon} text-lg group-hover:scale-110 transition-transform duration-500`}></i>
            ) : (
                <img src={skill.img} alt={skill.name} className="w-4.5 h-4.5 group-hover:scale-110 transition-transform duration-500 object-contain" />
            )}
            <span className="text-slate-700 font-bold text-[13px] tracking-tight whitespace-nowrap">{skill.name}</span>
        </div>
    );

    return (
        <section id="skills" className="bg-slate-50/50 border-b border-slate-100">
            <div className="container mx-auto px-6 py-20 md:py-28 scroll-mt-20">
                <h2 className="text-4xl md:text-5xl font-black text-center mb-6 text-slate-950 tracking-tighter">Habilidades</h2>
                
                <p className="text-[10px] md:text-xs text-center mb-16 text-slate-400 font-black uppercase tracking-[0.4em]">
                    FRONTEND <span className="mx-2 text-slate-200">/</span> BACKEND <span className="mx-2 text-slate-200">/</span> FERRAMENTAS <span className="mx-2 text-slate-200">/</span> METODOLOGIAS
                </p>

                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3 md:gap-3.5">
                        <h3 className="hidden">Front-end</h3>
                        {frontSkills.map((skill) => (
                            <SkillCard key={skill.name} skill={skill} />
                        ))}

                        <h3 className="hidden">Back-end</h3>
                        {backSkills.map((skill) => (
                            <SkillCard key={skill.name} skill={skill} />
                        ))}

                        <h3 className="hidden">Ferramentas e Nuvem</h3>
                        {toolSkills.map((skill) => (
                            <SkillCard key={skill.name} skill={skill} />
                        ))}

                        <h3 className="hidden">Engenharia e Qualidade</h3>
                        {engSkills.map((skill) => (
                            <SkillCard key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;