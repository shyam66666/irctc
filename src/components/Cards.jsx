
import HOME_LOGO from "../assets/HOME_LOGO.png"

const Cards = () => {
  return (
    <div className="grid grid-flow-col grid-rows-2  gap-24 items-center justify-center ">
        <div>
            <img src={HOME_LOGO} className="w-28"/>
            <p className="flex justify-center" >FLIGHTS</p>
        </div>
        <div>
            <img src={HOME_LOGO} className="w-28"/>
            <p className="flex justify-center">HOTELS</p>
        </div>
        <div>
            <img src={HOME_LOGO} className="w-28"/>
            <p  className="flex justify-center" >RAIL DRISHTI</p>
        </div>
        <div>
            <img src={HOME_LOGO} className="w-28"/>
            <p  className="flex justify-center" >E-CATERING</p>
        </div>
        <div>
            <img src={HOME_LOGO} className="w-28"/>
            <p  className="flex justify-center" >BUS</p>
        </div>
        <div>
            <img src={HOME_LOGO} className="w-28"/>
            <p  className="flex justify-center" >HOLIDAY PACKAGES</p>
        </div>
        <div>
            <img src={HOME_LOGO} className="w-28"/>
            <p  className="flex justify-center">TOURIST TRAIN</p>
        </div>
        <div>
            <img src={HOME_LOGO} className="w-28"/>
            <p  className="flex justify-center" >HILLS RAILWAYS</p>
        </div>
        <div>
            <img src={HOME_LOGO} className="w-28"/>
            <p  className="flex justify-center" >CHARTER TRAIN</p>
        </div>
        <div>
            <img src={HOME_LOGO} className="w-28"/>
            <p  className="flex justify-center" >GALLERY</p>
        </div>
       
        
        
    </div>
  )
}

export default Cards