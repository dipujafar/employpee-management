import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { EffectCoverflow, Pagination } from "swiper/modules";
import SectionTitle from "../../Components/SectionTitle";

const Testimonial = () => {
  const { data: reviews = [] } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const res = await axios.get("review.json");
      return res.data;
    },
  });
  console.log(reviews);
  return (
    <div className="mt-10">
        <SectionTitle heading="testimonials" subHeading="What Our Client Say"></SectionTitle>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {reviews.map((review, inx) => (
          <SwiperSlide key={inx}>
            <Card className="mt-6 max-w-md mx-auto">
              <CardBody>
                <img src={review.image} alt=""  className="w-20 mx-auto mb-3 rounded-full"/>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {review.name}
                </Typography>
                <Typography>
                 {review.review}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <a href="#" className="inline-block">
                  <Button
                    size="sm"
                    variant="text"
                    className="flex items-center gap-2"
                  >
                   <Rating style={{ maxWidth: 250 }} value={parseInt(review.rating)}  />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
