import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import exampleimg from '../../assets/exampleimg.png';

const Intro = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const vh = window.innerHeight;
  const ratio = scrollY / vh;

  // 텍스트 별 보임 구간 (범위 내면 보임, 범위 밖이면 숨김)
  const isInRange = (start: number, end: number) => ratio >= start && ratio <= end;

  // 인사말
  const helloOpacity = isInRange(0.1, 0.5) ? 1 : 0;
  const helloTransform = helloOpacity ? 'translateX(0)' : ratio < 0.1 ? 'translateX(-100px)' : 'translateX(100px)';

  // 타이틀
  const titleOpacity = isInRange(0.4, 0.8) ? 1 : 0;
  const titleTransform = titleOpacity ? 'translateY(0)' : ratio < 0.4 ? 'translateY(20px)' : 'translateY(-20px)';

  // 설명
  const descOpacity = isInRange(0.7, 1.1) ? 1 : 0;
  const descTransform = descOpacity ? 'translateY(0)' : ratio < 0.7 ? 'translateY(40px)' : 'translateY(-40px)';

  // 버튼
  const buttonOpacity = ratio >= 1 ? 1 : 0;

  return (
    <div className="relative h-[200vh]">
      {/* 🎯 이미지 고정 (배경 역할) */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[600px] h-auto pointer-events-none">
        <img src={exampleimg} alt="배경 이미지" className="w-full h-auto object-cover" />
      </div>

      {/* ⬇️ 텍스트 콘텐츠 */}
      <div className="sticky top-0 h-screen flex flex-col justify-center items-start max-w-1440 mx-auto px-6 md:px-10">
        {/* 인사말 */}
        <h1
          className="text-main-slide text-lg mt-40"
          style={{
            transform: helloTransform,
            opacity: helloOpacity,
            transition: 'all 0.8s ease-in-out',
          }}
        >
          안녕하세요
        </h1>
          {/*<--두번째 h1 나오면 첫번째 h1은 사라지게*/}
        {/* 타이틀 */}
        <h1
          className="text-6xl md:text-5xl font-tway text-main-slide mb-32"
          style={{
            opacity: titleOpacity,
            transform: titleTransform,
            transition: 'all 0.6s ease-out',
          }}
        >
          What <span className="text-main">Your Name</span>
          <br />
          gjaLSTlqWERLAJSDGK
        </h1>

        {/* 설명 */}
        <p
          className="font-nanum max-w-xl text-gray-700 text-base md:text-lg leading-relaxed mb-20"
          style={{
            transform: descTransform,
            opacity: descOpacity,
            transition: 'all 0.6s ease-out',
          }}
        >
          소개글을 여기도 쓸지 말지. <br />
          소개글을 무ㅝ라고 쓰면 좋을까나?
        </p>

        {/* 버튼 */}
        <div
          className="flex gap-4 pb-10"
          style={{
            opacity: buttonOpacity,
            transition: 'opacity 1s ease-out',
          }}
        >
          <Link
            to="/about"
            className="font-nanum text-main border border-main rounded-[50px] px-12 py-4 hover:bg-main hover:text-white transition-colors duration-300"
          >
            더보기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
