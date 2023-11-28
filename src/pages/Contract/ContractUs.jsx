import "./contract.css";
const ContractUs = () => {
  return (
    <div className="mt-10">
      <div className="contract-bg bg-fixed bg-center w-full h-56 flex justify-center items-center">
        <h1 className="text-4xl uppercase text-orange-400 font-medium">Contract Us</h1>
      </div>
      <div className="mt-5 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
            <h1 className="text-2xl  border-b border-gray-400 py-3 mb-8">Send <span className="text-orange-400">Message</span></h1>
            <form>
                <div className="space-y-2 mb-2">
                <label>Name:</label>
                <input type="text" placeholder="Name" className="border border-black rounded p-2 w-full"/>
                </div>
                <div className="space-y-2 mb-2">
                <label>Email:</label>
                <input type="text" placeholder="Email" className="border border-black rounded p-2 w-full"/>
                </div>
                <div className="space-y-2">
                <label>Message:</label>
                <textarea placeholder="Message" className="w-full border border-black rounded p-2"></textarea>
                </div>
            </form>
        </div>
        <div className="flex-1">
        <h1 className="text-2xl  border-b border-gray-400 py-3 mb-8">Our <span className="text-orange-400">Address</span></h1>
        <div className="text-center">
        <h4 className="text-xl">Dhaka-Branch</h4>
        <p>XYZ Road, X Tower <br /> 1st floor</p>
        <p>Mobile: 01---------</p>
        <p>Email: JUIT@gmail.com</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ContractUs;
