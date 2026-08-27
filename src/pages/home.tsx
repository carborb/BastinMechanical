import InformationBox from "../components/informationBox";
import Navbar from "../components/navbar";
import Inquiry from "../components/inquiry";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="text-3xl">Test</div>
      <InformationBox></InformationBox>
      <Inquiry></Inquiry>
    </>
  );
}

export default Home;
