import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ratio = scrollY / window.innerHeight;

  const showImagine = ratio >= 0.1;
  const showPlan = ratio >= 0.3;
  const showMakeReal = ratio >= 0.5;
  const showDesc = ratio >= 0.9;
  const showButton = ratio >= 0.9;

  return (
    <div className="relative h-[250vh] w-full bg-main-bg">

      {/* 고정된 배경 + 텍스트 */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-10 flex items-center justify-center">
        <div className="relative w-full max-w-1440 h-full flex flex-col items-center justify-center px-6">
          {/* 배경 이미지 */}
          {/* 배경 이미지들 */}
          {[
            {
              src: 'https://picsum.photos/400/300?1',
              top: '20%',
              left: '10%',
              width: '200px',
              rotate: '-10deg',
              zIndex: 1,
            },
            {
              src: 'https://picsum.photos/400/300?2',
              top: '40%',
              right: '5%',
              width: '300px',
              rotate: '15deg',
              zIndex: 0,
            },
            {
              src: 'https://picsum.photos/400/300?3',
              bottom: '10%',
              left: '30%',
              width: '250px',
              rotate: '5deg',
              zIndex: 2,
            },
            {
              src: 'https://picsum.photos/400/300?4',
              top: '60%',
              left: '60%',
              width: '180px',
              rotate: '-5deg',
              zIndex: 1,
            },
          ].map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={`bg-${idx}`}
              className="absolute object-cover transition-opacity duration-1000"
              style={{
                top: img.top,
                left: img.left,
                right: img.right,
                bottom: img.bottom,
                width: img.width,
                transform: `rotate(${img.rotate})`,
                zIndex: img.zIndex,
              }}
            />
          ))}


          {/* 텍스트 애니메이션 */}
          <div className="relative z-10">
            <h1
              className="font-tway text-mainIntro mx-16 transition-all duration-700 ease-in-out"
              style={{
                opacity: showImagine ? 1 : 0,
                transform: showImagine ? 'translateX(0)' : 'translateX(-40px)',
              }}
            >
              Imagine,
            </h1>

            <h1
              className="font-tway text-mainIntro mx-16 transition-all duration-700 ease-in-out"
              style={{
                opacity: showPlan ? 1 : 0,
                transform: showPlan ? 'translateX(0)' : 'translateX(40px)',
              }}
            >
              Plan,
            </h1>

            <h1
              className="font-tway text-mainIntro text-main mx-16 transition-all duration-700 ease-in-out"
              style={{
                opacity: showMakeReal ? 1 : 0,
                transform: showMakeReal ? 'translateY(0)' : 'translateY(40px)',
              }}
            >
              Make Real
            </h1>

            <p
              className="font-nanum text-semismall md:text-lg mb-8 transition-all duration-500 ease-in"
              style={{
                opacity: showDesc ? 1 : 0,
                transform: showDesc ? 'scale(1)' : 'scale(0.9)',
              }}
            >
              소개글 <br />
              소개글 간단히 있다면
            </p>

            <div
              className="transition-opacity duration-1000"
              style={{
                opacity: showButton ? 1 : 0,
                pointerEvents: showButton ? 'auto' : 'none',
              }}
            >
              <Link
                to="/about"
                className="group relative inline-block w-[200px] font-nanum text-semismall text-main border border-main px-12 py-4 transition-colors duration-300"
              >
                더보기
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-main transition-all duration-300 group-hover:left-0 group-hover:w-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
