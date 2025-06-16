import { Link } from 'react-router-dom';

const Intro = () => {
    return (
      <section className="font-nanum max-w-1440 min-h-screen bg-main-bg flex flex-col justify-center items-start mx-auto gap-6 px-6 md:px-10">
        <p className="text-lg  ">안녕하세요</p>
  
        <h1 className="text-6xl md:text-5xl font-tway">
          What <span className='text-main'>Your Name</span><br/>
          gja ktjasld LSTlqWERLAJSDGKLQPLA
        </h1>
  
        <p className="font-nanum max-w-xl text-gray-700 text-base md:text-lg leading-relaxed">
          사용자 중심의 UI/UX를 고민하는 프론트엔드 개발자입니다. <br />
          React, Tailwind, Git을 기반으로 한 팀 프로젝트 경험이 있습니다.
        </p>
  
        <div className="flex gap-4 mt-4">
          <Link
            to="/about"
            className="font-nanum  text-main border-2 border-main rounded-3xl px-10 py-4 hover:bg-main hover:text-white transition ">
            더보기
          </Link>
        </div>
      </section>
    );
  };
  
  export default Intro;
  
