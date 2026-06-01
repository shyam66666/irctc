import IRCTC_LOGO2 from "../assets/IRCTC_LOGO2.png";
import IRCTC_TITLE_LOGO from "../assets/IRCTC_TITLE_LOGO.png";
import HOME_LOGO from "../assets/HOME_LOGO.png";

function Navbar() {
  return (
    <div className=" bg-white  grid grid-flow-col  items-center p-3 w-full fixed top-0 left-0 z-50 shadow-lg mb-44">
      <div className="grid-cols-2 flex ml-3" >
        <img src={IRCTC_LOGO2} alt="logo" className="w-18 h-auto" />
      </div>
      <div className="grid-cols-8 ">
          <p className="font-medium flex justify-center items-center">
            29-May-2026 [12:12:34]  | A -  | A  | A +  |  हिंदी
          </p>
          <div className="flex  justify-center items-center gap-4 mt-3 cursor-pointer">
          <img  src={HOME_LOGO}  className="w-4 h-auto"/>
          <button className="bg-blue-900 text-white text-xs border p-1 font-bold  rounded-sm cursor-pointer">LIOGIN / REGISTRATION</button>
          <h4 className="text-xs hover:text-amber-600 hover:underline ">TRAINS</h4>
          <h4 className="text-xs hover:text-amber-600 hover:underline">MEALS</h4>
          <button className="text-xs bg-blue-900 text-white p-1 hover:text-amber-600 hover:underline">UPTO 10% DISCOUNT</button>
          <h4 className="text-xs hover:text-amber-600 hover:underline">E-WALLET</h4>
          <h4 className="text-xs hover:text-amber-600 hover:underline">OTHER SERVICES</h4>
          <h4 className="text-xs hover:text-amber-600 hover:underline">CONTACT US</h4>
          </div>
      </div>
      <div className="grid-rows-2 flex justify-end ">
        <img src={IRCTC_TITLE_LOGO} alt="logo" className="w-28 h-auto" />
      </div>
    </div>
  );
}
export default Navbar;
