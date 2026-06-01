import Cards from "./Cards"
import TRAIN_IMG from "../assets/TRAIN_IMG.avif"
import Holidays from "./Holidays";

const Body = () => {
  return (
    <div >
        <img src={TRAIN_IMG} alt='logo' className="h-[550px] w-full mt-20"/>
         <hr className="w-full border-y-2 border-gray-200 my-4"/>
        <div className="flex items-center justify-center">
             <img src="http://contents.irctc.co.in/en/GPT_NWEB_HOME_TOP1.jpeg" alt="error" className="mt-6 mb-6 w-8/12"/>
               </div>
                <hr className="w-full border-y-2 border-gray-200 my-4"/>
             <div className="flex items-center justify-center">
             <img src="http://contents.irctc.co.in/en/GPT_NWEB_HOME_TOP.jpeg" alt="error" className="mt-6 mb-6 w-8/12" />
             </div>
             <hr className="w-full border-y-2 border-gray-200 my-4"/>
             <div className="grid grid-flow-row  justify-center  ">
                <p className="font-bold text-4xl mt-4 ">
                    Have you not found the right one? 
                </p>
                <p className="font-bold text-4xl mb-4">
                     Find a service suitable for you here.
                </p>
             </div>
             <div>
                <Cards/>
             </div>
             <div className="flex items-center justify-center">
                <img src="http://contents.irctc.co.in/en/GPT_NWEB_HOME_CENTER.jpeg" className="mt-10 mb-6 w-8/12"/>
             </div>
             <div>
               <hr className="w-full border-y-2 border-gray-200 my-4"/>
                <h1 className="flex justify-center font-semibold text-4xl my-10">HOLIDAYS</h1>
                <Holidays/>
             </div>
           
      
       
        
    </div>
  )
}

export default Body;