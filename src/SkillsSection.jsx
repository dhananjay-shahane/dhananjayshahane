import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'CSS', src: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
    { name: 'Tailwind CSS', src: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' },
    { name: 'Bootstrap 5', src: 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg' },
    { name: 'WordPress', src: 'https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg' },
    { name: 'JavaScript', src: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg' },
    { name: 'React', src: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
    { name: 'Next.js', src: 'https://cdn.worldvectorlogo.com/logos/next-js.svg' },
    { name: 'Photoshop To Html', src: 'https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg' },
    { name: 'Motion', src: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg' },
  ];
  



  return (
    <section>
      <div className="container max-w-[1200px] mx-auto flex px-5 py-8 flex-col">
        <p className="text-3xl sm:text-4xl text-gray-600">
          My <span className="font-semibold text-sky-400">Skills</span>
        </p>
        <div className="pt-8">
          <div className="text-[26px] text-white">
            {/* <p className="mb-4">Primary skills</p> */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
              {skills.map(skill => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center sm:justify-start justify-center sm:flex-row sm:align-middle border rounded-md border-transparent px-6 py-4 bg-[#ffffffb0] shadow-sm sm:hover:scale-105 transition-transform"
                >
                  <div className="mb-1 sm:mr-4 flex align-middle">
                    <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
                      <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
                        <img alt={skill.name} aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
                      </span>
                      <img alt={skill.name} srcSet={`${skill.src} 1x, ${skill.src} 2x`} src={skill.src} decoding="async" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                    </span>
                  </div>
                  <p className="flex align-middle text-xl m-0 p-0 text-gray-600">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
