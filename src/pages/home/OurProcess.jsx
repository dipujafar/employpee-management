import processImg from '../../assets/image/develop-process.jpg'

const OurProcess = () => {
    return (
        <div className="mt-10">
            <h1 className="text-3xl text-center uppercase text-orange-400 font-medium mb-2">Our Development Process</h1>
            <div className="flex justify-center">
            <img src={processImg} alt="" className='max-h-[500px]' />
            </div>
        </div>
    );
};

export default OurProcess;