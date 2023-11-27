import aboutImg from '../../assets/image/about.jpg'

const About = () => {
    return (
        <div className="mt-10 flex flex-col-reverse md:flex-row justify-center items-center bg-[url('https://i.ibb.co/kGzRcHV/aboutBg.png')]">
            <div className='flex-1 p-5'>
                <h1 className="font-semibold text-2xl mb-5"><span className="text-orange-400">About</span> Us</h1>
                <p>
                At JUIT, we embody innovation and excellence. Our dynamic team excels in web and app development, graphic design, desktop software, and SEO. Committed to client success, we leverage expertise to deliver bespoke solutions, fostering creativity and technological advancement. We prioritize collaboration, ensuring every project reflects our commitment to quality, innovation, and client satisfaction. With a relentless pursuit of excellence, JUIT stands as a digital partner, dedicated to transforming ideas into impactful realities. Join us on a journey of innovation and success, where every project is an opportunity to redefine and elevate the digital landscape
                </p>
            </div>
            <div className='flex-1'>
                <img src={aboutImg} alt="AboutUsImage" />
            </div>
        </div>
    );
};

export default About;