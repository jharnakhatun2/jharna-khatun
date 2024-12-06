import React from "react"

const About = () => {
  return (
    <main className="container mx-auto py-8 px-8 lg:px-0">
  <h1 className="text-3xl mb-6 uppercase font-extrabold">MY SKILLS</h1>
  {/* skills*/}
  <div className="sm:flex gap-10">
    <div className="w-full sm:w-2/4">
      {/* Skill dynamic buttons */}
      <div className="my-6">
        <h2 className="text-lg mb-1 uppercase font-semibold">Expertise :</h2>
        <div id="btn" className="btn flex flex-row flex-wrap" />
      </div>
      <div className="my-6">
        <h2 className="text-lg mb-1 uppercase font-semibold">Comfortable :</h2>
        <div id="btn1" className="flex flex-row flex-wrap" />
      </div>
      <div className="my-6">
        <h2 className="text-lg mb-1 uppercase font-semibold">
          Familiar with :
        </h2>
        <div id="btn2" className="flex flex-row flex-wrap" />
      </div>
      <div className="my-6">
        <h2 className="text-lg mb-1 uppercase font-semibold">Tools :</h2>
        <div id="btn3" className="flex flex-row flex-wrap" />
      </div>
    </div>
    {/* skill image Start*/}
    <div className="h-4 w-full sm:w-2/4 flex flex-wrap gap-7 justify-center">
      <div>
        <img src="https://i.ibb.co.com/z29gm45/html-1.png" alt="" />
      </div>
      <div>
        {" "}
        <img src="https://i.ibb.co.com/y8Md3Tr/es6.png" alt="" />
      </div>
      <div>
        <img src="https://i.ibb.co.com/5TtD6JW/react.png" alt="" />
      </div>
      <div>
        <img
          src="https://i.ibb.co.com/GxKdgcY/express-removebg-preview.png"
          alt=""
        />
      </div>
      <div>
        <img src="https://i.ibb.co.com/hd1f9b3/tailwind.png" alt="" />
      </div>
      <div>
        <img src="https://i.ibb.co.com/k817Sb3/node.png" alt="" />
      </div>
      <div>
        <img src="https://i.ibb.co.com/0945WhB/mongo.png" alt="" />
      </div>
    </div>
  </div>
</main>

  )
};

export default About;
