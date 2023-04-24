import React from "react";

const Skills = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-400 to-purple-500 h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-white mb-8">My Skills</h1>
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-bold mb-6">Web Development</h2>
        <ul className="list-disc ml-8 mb-6">
          <li className="mb-2">
            <span className="text-indigo-600 font-bold">HTML/CSS:</span>{" "}
            Semantic HTML and modern CSS techniques, including flexbox and grid
            layouts, CSS preprocessors such as Sass, and CSS frameworks such as
            Bootstrap and Tailwind CSS.
          </li>
          <li className="mb-2">
            <span className="text-indigo-600 font-bold">JavaScript:</span> ES6+
            syntax, asynchronous programming, and popular frameworks and
            libraries such as ReactJS and NextJS.
          </li>
          <li className="mb-2">
            <span className="text-indigo-600 font-bold">Node.js:</span> Building
            server-side applications using Node.js and popular libraries such as
            Express.js and Socket.io.
          </li>
          <li className="mb-2">
            <span className="text-indigo-600 font-bold">Database:</span> Working
            with databases such as MongoDB, MySQL, Firebase and implementing
            data models and querying data using Object-Relational Mapping (ORM)
            tools such as Mongoose and Sequelize.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
