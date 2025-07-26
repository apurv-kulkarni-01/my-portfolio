import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <img src="/profile.jpeg" alt="Apurv" className={styles.profileImage} />
      <div>
        Hi, I'm Apurv — a software developer with 2 years of experience building
        full-stack web applications using the MERN stack (MongoDB, Express,
        React, Node.js). I love turning complex problems into intuitive digital
        experiences that are fast, functional, and user-friendly.
      </div>
      <div>
        My expertise includes building scalable frontends with React and
        Next.js, crafting secure backend APIs with Node.js and Express, and
        managing data effectively using MySQL, Firebase Realtime Database and
        MongoDB. I have good experience of working on technologies like Go lang,
        Python and Azure. I also enjoy working with tools like Docker and Git
        for modern, maintainable development workflows.
      </div>
      <div>
        I've contributed to agile teams, shipped production-grade features, and
        continuously refined my problem-solving and debugging skills. I'm driven
        by clean code, meaningful user experiences, and a deep curiosity for how
        great software is built.
      </div>
      <div>
        Outside of tech, I enjoy exploring product design ideas, reading about
        FinTech trends, and occasionally jamming on the guitar.
      </div>
      <div>Let’s build something exciting together.</div>
    </div>
  );
};

export default About;
