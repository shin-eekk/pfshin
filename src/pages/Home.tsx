import Intro from './home/Intro';
import Tripter from './home/Tripter';
import Myworks from './home/Myworks';
import MyCareer from './home/MyCareer';

const Home = () => {
    return (
     <div className="max-w-1920 bg-main-bg">
        <Intro></Intro>
        <Myworks></Myworks>
        <Tripter
          id="tripter"
          title="Team Project"
          p="Trip:ter"
          p2="당신에게 딱 맞춘 자유여행 플랫폼 트립터"
          cls='flex mx-auto pt-40 pb-60 bg-bg-gray'
          cls2='max-w-1440 mx-auto md:ml-[50px] flex flex-col justify-between'
          cls4='self-end w-[640px] h-[200px] flex gap-[20px] mt-auto'
          cls3='text-right flex flex-col gap-6 pt-4'
          bigimg='https://raw.githubusercontent.com/shin-eekk/pfshin/imgsource/tripter_img/thumnail.png'
          smimg={[
            "https://raw.githubusercontent.com/shin-eekk/pfshin/imgsource/tripter_img/thumnail.png",
            "https://raw.githubusercontent.com/shin-eekk/pfshin/imgsource/tripter_img/thumnail.png",
            "https://raw.githubusercontent.com/shin-eekk/pfshin/imgsource/tripter_img/thumnail.png"
          ]}
          link='https://imyour-trip-ter.vercel.app/'
          hovertext="트립터 바로가기"
          >

        </Tripter>
        <Tripter  //트립카
        id="tripcar"
        title="Team Project" 
        p="Trip:car"
        p2="자유여행에 날개를 달아줄 트립카"
        cls='flex-row-reverse  flex mx-auto pt-40 pb-60 bg-main-bg'
        cls2='max-w-1440 mr-[50px] flex flex-col justify-between'
        cls3='text-left flex flex-col gap-6 pt-4 '
        cls4='w-[640px] h-[200px] flex gap-[20px] mt-auto'
        bigimg='https://raw.githubusercontent.com/shin-eekk/pfshin/1e74fec916798c723711b35bc3227ffc16ea0aeb/tripter_img/tripcarthumnail.png'
        smimg={[
          "https://raw.githubusercontent.com/shin-eekk/pfshin/imgsource/tripter_img/thumnail.png",
          "https://raw.githubusercontent.com/shin-eekk/pfshin/imgsource/tripter_img/thumnail.png",
          "https://raw.githubusercontent.com/shin-eekk/pfshin/imgsource/tripter_img/thumnail.png"
        ]}
        link='https://www.i-web.kr/green18/'
        hovertext="트립카 바로가기"
          >
        </Tripter> 

        <MyCareer></MyCareer>
     </div>
    );
  };
  
  export default Home;
  
