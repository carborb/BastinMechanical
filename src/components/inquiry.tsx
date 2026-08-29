function Inquiry() {
  return (
    <>
      <div className="mb-12 ">
        <div className="text-6xl  drop-shadow-md">Contact Us</div>
        <div className="flex justify-center items-center inline-block">
          <div className="text-2xl space-x-4 content-center text-primary-500 mt-12 mb-12 ">
            <div className="flex">
              <div className="flex justify-center items-center h-10 w-96 border-3 rounded-lg border-primary-500">
                First Name
              </div>
              <div className="flex justify-center items-center h-10 w-96 border-3 rounded-lg border-primary-500">
                Last Name
              </div>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center h-10 w-96 border-3 rounded-lg border-primary-500">
                Phone
              </div>
              <div className="flex justify-center items-center h-10 w-96 border-3 rounded-lg border-primary-500">
                Email
              </div>
              <div className="flex justify-center items-center h-10 w-96 border-3 rounded-lg border-primary-500">
                <select name="Inquiry Type" className="cursor-pointer">
                  <option value="" disabled selected>
                    Inquiry Type
                  </option>
                  <option value="heating">Heating</option>
                  <option value="cooling">Cooling</option>
                  <option value="applianceRepair">Appliance Repair</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center h-72 w-1/2 border-3 rounded-lg border-primary-500 text-2xl">
            Desciprtion: Lorem ipsum dolor sit amet consectetur adipiscing elit
            possimus voluptatum. Et voluptas commodo sunt voluptas est. Eu fuga
            nam eu expedita in repellendus dignissimos cupidatat est vel in.
            Lorem ipsum dolor sit amet consectetur adipiscing elit possimus
            voluptatum.
          </div>
        </div>
      </div>
    </>
  );
}

export default Inquiry;
