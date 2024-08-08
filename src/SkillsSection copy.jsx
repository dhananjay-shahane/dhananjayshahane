import React from 'react';

const SkillsSection = () => {
  const images = [
    {
      src: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
      alt: "Html",
      href: "#",
      label: "Html-5",
      size: "l"
    },
    {
      src: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
      alt: "CSS",
      href: "#",
      label: "CSS",
      size: "m"
    },
    {
      src: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
      alt: "Tailwind CSS",
      href: "#",
      label: "Tailwind CSS",
      size: "s"
    },
    {
      src: "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg",
      alt: "Bootstrap",
      href: "#",
      label: "Bootstrap",
      size: "m"
    },
    {
      src: "https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg",
      alt: "WordPress",
      href: "3",
      label: "WordPress",
      size: "l"
    },
    {
      src: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
      alt: "JavaScript",
      href: "#",
      label: "JavaScript",
      size: "m"
    },
    {
      src: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      alt: "React",
      href: "https://www.naver.com/",
      label: "React",
      size: "s"
    },
    {
      src: "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg",
      alt: "Photoshop To Html",
      href: "#",
      label: "Photoshop To Html",
      size: "l"
    },
    {
      src: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
      alt: "Motion",
      href: "#",
      label: "Motion",
      size: "m"
    },
  ];

  return (
    <>
    <div className='container max-w-[1200px] mx-auto flex px-5 py-8 flex-col'>
        <p className="text-3xl sm:text-4xl text-gray-600">
              My <span className="font-semibold text-sky-400">Skills</span>
          </p>

    </div>
      <div className="sheet sheet--breakout sheet--padding sheet--padding-top-small overflow-hidden">
        <div className="api-scroll-wrapper">
          <div className="api-scroll">
            <div className="api-scroll--inner">
              {Array(1).fill(
                <ul className="api-scroll__container">
                  {images.map((image, index) => (
                    <li key={index} className={`orb orb--${image.size}`} aria-label={image.label}>
                      <a href={image.href} target="_blank" rel="noopener noreferrer">
                        <img src={image.src} className="orb__img p-4" alt={image.alt} />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
