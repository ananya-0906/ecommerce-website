import "./BrandStrip.css";
import { brands } from "../../data/brandStripData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

function BrandStrip() {
    const swiperRef = useRef(null);

  return (
    <section className="brand-strip">

        <h4 className="brand-title"> TRUSTED BY TOP AUDIO BRANDS </h4>

        <button 
            className="custom-prev" 
            onClick={() => swiperRef.current?.slidePrev()}>
            <FaChevronLeft />
        </button>

        <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            navigation={false}
            slidesPerView={4}
            spaceBetween={20}
            className="brand-swiper"
        >
            {brands.map((brand) => (
                <SwiperSlide key={brand.id}>
                    <img 
                        src={brand.logo} 
                        alt={brand.name} 
                        className={brand.className} 
                        style={{
                            width: brand.width,
                            height: brand.height,
                            transform: brand.transform
                        }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>

        <button 
            className="custom-next" 
            onClick={() => swiperRef.current?.slideNext()}>
            <FaChevronRight />
        </button>
    </section>
  );
}

export default BrandStrip;