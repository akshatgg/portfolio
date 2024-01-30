function Projectitem({ image, projectname, content, livepreview, github, alt }) {
  return (
    <div className="w-[25%] bg-[#151030] mr-14 ml-7 mt-11 rounded-3xl ">
      <div>
        <div>
          <img src={image} alt={alt} className="hover:scale-110 duration-500"/>
        </div>
        <div className="mt-5 ml-5">
          <p className="text-2xl font-bold">{projectname}</p>
          <p className="mt-9">{content}</p>

          <div className="grid grid-cols-2 mt-4 mb-4">
            <div className="cols-start-1">
              <a href={livepreview} className="hover:text-blue-400 transition-color duration-1000">Live Preview</a>
            </div>
            <div className="cols-start-1 flex items-center justify-center">
              <a href={github} className="hover:text-blue-400 transition-color duration-500">View Code </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectitem;
