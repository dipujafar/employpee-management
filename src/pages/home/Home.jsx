import About from "./About";
import HomeBanner from "./HomeBanner";
import OurProcess from "./OurProcess";
import Services from "./Services";



const Home = () => {
    return (
        <div>
            <div className="min-h-fit">
            <HomeBanner></HomeBanner>
            </div>
            <Services></Services>
            <About></About>
            <OurProcess></OurProcess>
        </div>
    );
};

export default Home;