import React from "react";
import { PiGraduationCapFill } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";
import { BiSolidPaint } from "react-icons/bi";

const Home = () => {
  return (
    <>
      <div className="w-screen  flex justify-center">
        <div className="max-w-[1440px] w-full ">
          <div className="flex justify-center items-center  h-[400px] flex-col">
            <div className="w-2/5 max-md:w-3/4 text-center">
              <h1 className="text-5xl max-md:text-3xl flex font-medium">
                Welcome to TechFusion Unleashing Creativity!
              </h1>
              <p className="my-8 max-md:text-sm font-sans  font-normal">
                TechFusion is an electrifying event pulsating with innovation,
                creativity, and intellect, organized by the vibrant minds of
                Information Technology Department.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <a
                href="https://forms.office.com/r/QXmxKMem9G"
                className="font-semibold font-sans py-2 px-8 text-sm text-white rounded-md bg-black"
              >
                Register Now
              </a>
              <p className="font-semibold font-sans py-2 px-4 text-sm text-white rounded-md bg-blue-600">
                Date:04 April 2024
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen my-10 max-md:my-5  flex justify-center">
        <div className="max-w-[1440px] w-full max-md:w-screen flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=" w-5/6 h-[500px] max-md:rounded-lg max-md:h-[400px] object-cover rounded-3xl"
            alt="img"
          />
        </div>
      </div>
      <div className="bg-white h-[500px] flex justify-center">
        <div className="flex justify-center flex-col max-md:w-4/5 w-2/5 items-center">
          <p className="text-5xl">
            {" "}
            <PiGraduationCapFill />{" "}
          </p>
          <h1 className="font-medium max-md:text-4xl text-5xl">
            About TechFusion
          </h1>
          <p className="font-sans max-md:text-sm  mt-10 text-center">
            At TechFusion, we believe in fostering a culture of innovation and
            exploration. Through a myriad of technical and non-technical events,
            workshops, and competitions, we aim to ignite the spark of
            TechFusion within every participant. Whether you’re a tech
            enthusiast, an aspiring entrepreneur, or a creative thinker,
            TechFusion offers something for everyone.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-[1440px] ">
          <div className="w-full ">
            <div className="mt-20 text-center">
              <h1 className="text-5xl">Events</h1>
            </div>
            <div className="m-20 max-md:m-3 max-md:mx-10 grid max-md:grid-cols-1 grid-cols-2">
              <div className="flex justify-start max-md:mt-14 flex-col mt-20">
                <p className="text-3xl mb-2">
                  <GrTechnology />
                </p>
                <h1 className="text-4xl">Technical Events</h1>
                <ul className="mt-3 text-lg list-decimal list-inside">
                  <li>CodeReflex</li>
                  <li>Speed Googling</li>
                  <li>TechTalks(PTT's)</li>
                  <li>Brain Battle(Quiz)</li>
                  <li>Scavenger Hunt</li>
                  <li>Puzzle Maze</li>
                </ul>
                <div className="flex justify-center items-center">
                  <a
                    href="https://forms.office.com/r/QXmxKMem9G"
                    className="font-semibold max-md:my-5 font-sans py-2 px-4 text-sm text-white rounded-md bg-black"
                  >
                    Register
                  </a>
                </div>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="rounded-xl w-full max-md:rounded-lg object-cover h-[400px]"
                  alt="img2"
                />
              </div>
            </div>
            <div className="m-20 max-md:m-3 max-md:mx-10  grid max-md:grid-cols-1 grid-cols-2">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="rounded-xl w-full max-md:rounded-lg object-cover h-[400px]"
                  alt="img3"
                />
              </div>
              <div className="flex text-left mx-16 max-md:mx-0 max-md:text-left items-start flex-col mt-16">
                <p className="text-3xl  mb-2">
                  <BiSolidPaint />
                </p>
                <h1 className="text-4xl">Non-Technical Events</h1>
                <ul className="mt-3 text-lg list-decimal  list-inside">
                  <li>Meme Lord </li>
                  <li>Art Gallery</li>
                  <li>Game Monitoring</li>
                  <li>Crumbly Crunch Challenge</li>
                  <li>Riddle Quest</li>
                  <li>Picto Competition</li>
                  <li>Rythm Riddle</li>
                </ul>
                <div className="flex w-full justify-end max-md:justify-center max-md:mb-10 mt-10   items-center">
                  <a
                    href="https://forms.office.com/r/QXmxKMem9G"
                    className="font-semibold font-sans py-2 px-4 text-sm text-white rounded-md bg-black"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" max-w-screen w-screen flex justify-center bg-black text-white">
          <div className="w-2/5 max-md:w-4/5 flex flex-col justify-center m-20">
            <div>
              {" "}
              <h1 className="text-4xl max-md:text-2xl text-center">
                Don’t miss out on the latest updates, announcements, and
                behind-the-scenes and actions. Follow us on social media.
              </h1>
            </div>
            <div className="flex max-md:flex-col max-md:gap-3  gap-20 ">
              <div className="flex flex-col justify-center items-center max-md:mt-14 mt-10">
                <h1 className="font-sans text-lg">Dr.P.Epsiba</h1>
                <p className="font-sans text-neutral-400">HOD,IT Department</p>
              </div>
              <div className="flex flex-col justify-center items-center mt-10">
                <h1 className="font-sans text-lg">Dr.T.Charan Singh</h1>
                <p className="font-sans text-neutral-400">
                  HOD,CSIT Department
                </p>
              </div>
              <div className="flex flex-col justify-center items-center mt-10">
                <h1 className="font-sans text-lg">Dr.G.Suresh</h1>
                <p className="font-sans text-neutral-400">Principal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
