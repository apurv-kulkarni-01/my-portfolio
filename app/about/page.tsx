import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div>
        Hi, I'm Apurv — a software developer with 2 years of experience building
        full-stack web applications using the MERN stack (MongoDB, Express,
        React, Node.js). I love turning complex problems into intuitive digital
        experiences.
      </div>
      <div>
        I hold a Bachelor’s degree in Computer Science and am currently
        preparing to pursue my MS in Computer Science at Arizona State
        University this Fall (2025). My goal is to specialize in intelligent
        systems and apply my skills in the FinTech sector, where I can help
        bridge technology with finance to build scalable, secure, and
        data-driven solutions.
      </div>
      <div>
        My journey so far includes building production-grade apps, contributing
        to agile teams, and exploring modern tools like Next.js, Tailwind CSS,
        and TypeScript. I’m always learning, always curious — and always eager
        to collaborate on impactful projects.
      </div>
      <div>
        When I'm not coding, you'll find me exploring product design ideas,
        reading about financial tech trends, or experimenting with new
        JavaScript libraries.
      </div>
      <div>Let’s build something exciting together.</div>
    </div>
  );
};

export default About;
