import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/SectionTitle";
import ServiceCard from "./ServiceCard";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import useAxiosPublic from "../../hook/useAxiosPublic";

const Services = () => {
  const axiosPublic = useAxiosPublic();
  const { data: services = [] } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axiosPublic.get("/service");
      return res.data;
    },
  });

  useEffect(() => {
    Aos.init(); 
  }, []);

  return (
    <div className="my-10">
      <SectionTitle
        heading={"Our Service"}
        subHeading={
          "JUIT offers top-notch services in web and app development, graphic design, desktop software, and SEO. Elevate your digital presence with our expert solutions tailored to your unique needs."
        }
      ></SectionTitle>
      
      <div className=" grid md:grid-cols-3 gap-5"  data-aos="fade-up"
     data-aos-duration="2000">
        {
          services.map((service,inx)=><ServiceCard key={inx} service={service}></ServiceCard>)
        }
      </div>

    </div>
  );
};

export default Services;
