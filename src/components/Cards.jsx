
import HOME_LOGO from "../assets/HOME_LOGO.png"

const Cards = () => {
  return (
    <div className="grid grid-flow-col grid-rows-2   gap-24 items-center justify-center ">
        <div className="flex flex-col items-center">
            <img src={HOME_LOGO} className="w-20"/>
            <p className=" font-semibold" >FLIGHTS</p>
        </div>
         <div className="flex flex-col items-center">
            <img src={HOME_LOGO} className="w-20"/>
            <p className=" font-semibold">HOTELS</p>
        </div>
         <div className="flex flex-col items-center">
            <img src={HOME_LOGO} className="w-20"/>
            <p  className="font-semibold" >RAIL DRISHTI</p>
        </div>
          <div className="flex flex-col items-center">
            <img src={HOME_LOGO} className="w-20"/>
            <p  className=" font-semibold" >E-CATERING</p>
        </div>
       
          <div className="flex flex-col items-center">
            <img src={HOME_LOGO} className="w-20"/>
            <p  className="font-semibold" >BUSES</p>
        </div>
       
          <div className="flex flex-col items-center">
            <img src={HOME_LOGO} className="w-20"/>
            <p  className=" font-semibold" >HOLIDAY PACKAGES</p>
        </div>
          <div className="flex flex-col items-center">
            <img src={HOME_LOGO} className="w-20"/>
            <p  className=" font-semibold">TOURIST TRAIN</p>
        </div>
         <div className="flex flex-col items-center">
            <img src={HOME_LOGO} className="w-20"/>
            <p  className="font-semibold" >HILLS RAILWAYS</p>
        </div>
          <div className="flex flex-col items-center">
            <img src={HOME_LOGO} className="w-20"/>
            <p  className="font-semibold" >CHARTER TRAIN</p>
        </div>
          <div className="flex flex-col items-center">
            <img src={HOME_LOGO} className="w-20 "/>
            <p  className="font-semibold" >GALLERY</p>
        </div>
       
        
        
    </div>
  )
}

export default Cards