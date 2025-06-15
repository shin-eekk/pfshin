interface TripterProps {
    title: string;
    p: string;
    cls?: string;
  }
  
  export default function Tripter({ title, p, cls }: TripterProps) {
    return (
    <div className="relative">
        <a href="./TeamProject">
            <img src="https://raw.githubusercontent.com/shin-eekk/pfshin/imgsource/tripter_img/thumnail.png"
            alt="트립터썸네일" className="absolute left-0 z-0 hover:brightness-75 md:w-[700px] md:h-[525px] sm:w-[350px] sm:h-[263px]" />
        </a>
        <div className="max-w-1440 mx-auto relative flex justify-end [gap:30px]">
            <div className={`{cls} flex flex-col h-full justify-end text-right relative bg-main-bg [gap:20px]`}>
                <h1 className="font-tway text-5xl text-right">{title}</h1> 
                <span className="font-jamsil font-medium text-4xl text-right">Tripter</span>
                <p className="font-nanum text-right">{p}</p>
                <div className="max-w-[640px] max-h-[200px] flex relative [gap:20px] ">
                    <div className="w-[30%] aspect-square bg-gray-400">
                        <img src="" alt="" />
                    </div>
                    <div className="w-[30%] aspect-square bg-white">
                        <img src="" alt="" />
                    </div>
                    <div className="w-[30%] aspect-square bg-white">
                        <img src="" alt="" />
                    </div>
                </div>    
            </div>
        </div>
        {/* <div className="absolute w-[968px] h-[726px] md:w-[700px] md:h-[525px] sm:w-[350px] sm:h-[263px] left-0 bg-main z-0"> */}
            홈페이지 썸네일
            
            {/* </div>   */}
        
    </div>      
    );
  }
  