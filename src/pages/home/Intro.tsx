import { Link } from 'react-router-dom';

const Intro = () => {
    return (
      <section className="max-w-1920 flex flex-col justify-center items-start gap-6 px-6 md:px-10 bg-main-bg">
        <p className="text-lg text-gray-500 ">안녕하세요 👋</p>
  
        <h1 className="text-4xl md:text-5xl  text-gray-800 leading-tight">
          I'm <span className="text-blue-600 font-tway">Your Name</span><br />
          Front-End Developer
        </h1>
  
        <p className="font-nanum max-w-xl text-gray-700 text-base md:text-lg leading-relaxed">
          사용자 중심의 UI/UX를 고민하는 프론트엔드 개발자입니다. <br />
          React, Tailwind, Git을 기반으로 한 팀 프로젝트 경험이 있습니다.
        </p>
  
        <div className="flex gap-4 mt-4">
          <Link
            to="/about"
            className="font-nanum bg-main-bg text-main px-8 py-2 rounded-3xl hover:bg-main hover:text-white transition ">
            더보기
          </Link>
          
        </div>
      </section>
    );
  };
  
  export default Intro;
  
