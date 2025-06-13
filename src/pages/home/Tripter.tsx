interface TripterProps {
    title: string;
    p: string;
    cls?: string;
  }
  
  export default function Tripter({ title, p, cls }: TripterProps) {
    return (
    <div>  
        <div className="w-1920 mx-auto relative flex justify-end [gap:30px]">
            <div className={cls}>
                <h1 className="font-tway">{title}</h1> 
                <p>{p}</p>
                <div className="max-w-[530px] max-h-[500px] flex relative [gap:30px]">
                    <div className="w-[50%] aspect-square bg-gray-400"></div>
                    <div className="w-[50%] aspect-square bg-white"></div>
                </div>    
                <div className=" max-w-[530px] max-h-[500px] flex relative  [gap:30px]">
                    <div className="w-[50%] aspect-square bg-gray-300"></div>
                    <div className="w-[50%] aspect-square bg-white"></div>
                </div>
            </div>
            <div className="absolute w-[968px] h-[726px] md:w-[700px] md:h-[525px] sm:w-[350px] sm:h-[263px] left-0 bg-main z-0">
                
            홈페이지 썸네일
                
            </div>  
        </div>
        
        
    </div>      
    );
  }
  