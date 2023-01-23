import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ImgCard from "../Herosec/Herocard/imgcard";
const Example = () => {
  const cards = [
    {
      ner: "cardu",
      name: "Canon camera",
      imageURL: "./zurag/2.png",
      count: "(item 5)",
    },
    {
      ner: "cardu",
      name: "Desktop & laptop",
      imageURL: "./zurag/2.png",
      count: "(item 6)",
    },
    {
      ner: "cardu",
      name: "DSLR camera",
      imageURL: "./zurag/5.png",
      count: "(item 6)",
    },
    {
      ner: "cardu",
      name: "Canon camera",
      imageURL: "./zurag/2.png",
      count: "(item 5)",
    },
    {
      ner: "cardu",
      name: "Desktop & laptop",
      imageURL: "./zurag/2.png",
      count: "(item 6)",
    },
    {
      ner: "cardu",
      name: "DSLR camera",
      imageURL: "./zurag/5.png",
      count: "(item 6)",
    },
  ];
  return (
    <div className="container ">
      <Swiper
        className="swiper ms-4"
        spaceBetween={5}
        slidesPerView={3}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        onSlideChange={() => console.log("slide change")}
      >
        {cards.map((card, index) => (
          <SwiperSlide>
            <ImgCard card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Example;
