interface TripterProps {
    id: string;
    title: string;
    p: string;
    p2: string;
    bigimg: string;
    cls?: string;
    cls2?: string; 
    cls3?: string;   
  }
  
  export default function Tripter({ title, p, p2, cls, cls2, cls3, bigimg, id }: TripterProps) {
    return (
    <div id={id} className={`${cls} flex mx-auto pt-40 pb-60 bg-main-bg`}>
        <a className="block"  href="./TeamProject">
            <img src={bigimg}
            alt="트립터썸네일" className=" hover:brightness-75 w-[968px] h-[726px]" />
        </a>
        <div className="max-w-1440 mx-auto lg:ml-[50px] flex flex-col justify-between ">
            <div className={`flex flex-col ${cls3} gap-6 pt-4`}>
                <h1 className="font-tway text-main-slide ">{title}</h1> 
                <p className="font-jamsil text-big">{p}</p>
                <p className="font-nanum text-medium">{p2}</p>
            </div>
                <div className={`${cls2} w-[640px] h-[200px] flex gap-[20px] mt-auto`}>
                    <div className="flex-1 bg-gray-400 aspect-square">
                    <img src="" alt="" /></div>
                    <div className="flex-1 bg-white aspect-square">
                    <img src="" alt="" /></div>
                    <div className="flex-1 bg-white aspect-square">
                    <img src="" alt="" /></div>
                </div>
        </div> 
    </div>    
    );
  }
  