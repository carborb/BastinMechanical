import InformationBox from "../components/informationBox";
import Navbar from "../components/navbar";
import Inquiry from "../components/inquiry";
import ac1 from "../assets/ac1.jpg";
import ac2 from "../assets/ac2.jpg";

function Home() {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="bg-primary-100 text-white flex justify-center items-center space-x-4 px-20">
        <div className="absolute font-semibold  z-50 relative">
          <div className="text-8xl  drop-shadow-md">Bastin Mechanical</div>
          <div className="text-2xl ">
            lorem ipsum dolor sit amet consectetur adipiscing elit temporibus
            sint qui
          </div>
        </div>
        <div className="">
          <img src={ac1} className="max-h-[800px] object-cover z-10" />
        </div>
      </div>
      <InformationBox></InformationBox>
      <div className="bg-primary-100 text-white flex justify-center items-center space-x-4 mb-12 px-20">
        <div className="absolute font-semibold  z-50 relative w-1/2">
          <div className="text-6xl  drop-shadow-md">About Us</div>
          <div className="text-2xl ">
            lorem ipsum dolor sit amet consectetur adipiscing elit temporibus
            sint qui
          </div>
          <div className="text-xl ">
            Lorem ipsum dolor sit amet consectetur adipiscing elit possimus
            voluptatum. Et voluptas commodo sunt voluptas est. Eu fuga nam eu
            expedita in repellendus dignissimos cupidatat est vel in.Lorem ipsum
            dolor sit amet consectetur adipiscing elit possimus voluptatum. Et
            voluptas commodo sunt voluptas est. Eu fuga nam eu expedita in
            repellendus dignissimos cupidatat est vel in.
          </div>
        </div>
        <div className="">
          <img src={ac2} className="max-h-[600px] object-cover z-10" />
        </div>
      </div>
      <Inquiry></Inquiry>

      <Navbar></Navbar>
    </div>
  );
}

export default Home;
