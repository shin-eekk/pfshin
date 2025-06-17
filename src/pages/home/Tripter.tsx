interface TripterProps {
    id: string;
    title: string;
    p: string;
    p2: string;
    bigimg: string;
    cls?: string;
    cls2?: string;
    cls3?: string;
    cls4?: string;
    smimg: string[];
    link?: string;
    hovertext?: string;
  }
  
  export default function Tripter({ id, title, p, p2, cls, cls2, cls3, cls4, bigimg, smimg, link, hovertext }: TripterProps) {
    return (
      <div id={id} className={`${cls}`}>
        <a className="block relative group w-fit" href={link} target="_blank">
          <img
            src={bigimg}
            alt="트립터썸네일"
            className="w-[968px] h-[726px] drop-shadow-custom"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 z-10 group-hover:opacity-100 transition-opacity duration-300 ">
          <span className="text-white text-medium font-jamsil font-medium">{hovertext}</span>
        </div>
        </a>
  
        <div className={cls2}>
          <div className={`${cls3}`}>
            <h1 className="font-tway text-main-slide">{title}</h1>
            <p className="font-jamsil font-bold text-big ">{p}</p>
            <p className="font-nanum text-medium">{p2}</p>
          </div>
  
          <div className={`${cls4}`}>
            {smimg.map((src, idx) => (
               <div
               key={idx}
               className="flex-1 bg-white aspect-square overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2"
             >
               <img
                 src={src}
                 alt={`썸네일-${idx}`}
                 className="w-full h-full object-cover "
               />
             </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  