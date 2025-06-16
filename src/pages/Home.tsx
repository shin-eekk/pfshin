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
          cls2='self-end'
          cls3='text-right'
          bigimg='https://raw.githubusercontent.com/shin-eekk/pfshin/imgsource/tripter_img/thumnail.png'
        >
        </Tripter>
        <Tripter  //트립카
        id="tripcar"
        title="Team 2nd Project" 
        p="Trip:car"
        p2="자유여행에 날개를 달아줄 트립카"
        cls='text-left flex-row-reverse mx-auto'
        cls3='text-left'
        bigimg='https://raw.githubusercontent.com/shin-eekk/pfshin/imgsource/tripter_img/thumnail.png'>
        </Tripter> 

        <MyCareer></MyCareer>
     </div>
    );
  };
  
  export default Home;
  
