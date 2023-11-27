import About from "./About";
import HomeBanner from "./HomeBanner";
import OurProcess from "./OurProcess";
import Services from "./Services";
import Testimonial from "./Testimonial";



const Home = () => {
    return (
        <div>
            <div className="min-h-fit">
            <HomeBanner></HomeBanner>
            </div>
            <Services></Services>
            <About></About>
            <OurProcess></OurProcess>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;