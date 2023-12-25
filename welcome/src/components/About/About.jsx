import GithubDP from "../../assets/GithubDP";

function About() {
  return (
    
    <div className="flex justify-center h-screen bg-[#040404]   ">
      <div className="w-[80%] h-[85%] mt-[100px] text-white bg-[#151030] rounded-[80px]">
     <div className="mt-9 ml-[8%]">
      <p className="text-7xl font-semibold ">
        About Me
      </p>
      <div className="grid grid-col-2 mt-[80px]">
        <div className="col-start-1">
      <p className=" text-[130%]  ">
        Hii I,am
      </p>
      <p className="text-[200%] mt-3">
       Akshat Gupta
      </p>
      <p className="mt-3 text-[130%] font-semibold">
        Passionate Developer from India
      </p>
      <p className="mt-[2%]">
      As a dynamic and enthusiastic individual, I am always seeking new challenges that allow me to push myself beyond my limits. I thrive in competitive environments and enjoy collaborating with like-minded individuals who share my passion for continuous growth and development. I have a strong desire to acquire new skills and knowledge, and I enjoy sharing my expertise with others. I approach tasks with an open mind and constantly seek innovative ways to overcome obstacles and achieve success.
      </p>

      </div>
      <div className="col-start-2">
           <GithubDP/>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default About;
