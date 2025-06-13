import Intro from './home/Intro';
import Tripter from './home/Tripter';
import Tripcar from './home/Tripcar';
import Myworks from './home/Myworks';
import MyCareer from './home/MyCareer';

const Home = () => {
    return (
     <>
     <div className="max-w-1920 bg-main-bg">
      <Intro></Intro>
      <Myworks></Myworks>
      <Tripter title="Team Project Tripter" p="당신에게 딱 맞춘 자유여행 플랫폼 트립터" cls="w-[50%] ms-auto bg-bg-gray"></Tripter> 
      <Tripcar title="Team Project Tripcar" p="자유여행에 날개를 달아줄 트립카"></Tripcar> 
      <MyCareer></MyCareer>
     </div>
     </>
    );
  };
  
  export default Home;
  
