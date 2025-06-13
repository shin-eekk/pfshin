interface TripcarProps {
    title: string;
    p: string;
    cls?: string;
  }
  
  export default function Tripcar({ title, p, cls }: TripcarProps) {
    return (
      <div>  
        <div className="max-w-1440 mx-auto justify-end">
            <div className={cls}>
                <h1 className="font-tway">{title}</h1> 
                <p>{p}</p>
                <div className="max-w-[200px] max-h-[200px] flex bg-main">
                    <div className="w-[48%] aspect-square bg-gray-300"></div>
                    <div className="w-[48%] aspect-square bg-gray-400"></div>
                    <div className="w-[48%] aspect-square bg-gray-500"></div>
                    <div className="w-[48%] aspect-square object-cover"></div>
                </div>
            </div>
        </div>
            
        
      </div>
    );
  }
  