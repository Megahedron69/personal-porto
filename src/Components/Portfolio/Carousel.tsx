import { type FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../../assets/css/CarouselStyles.css";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import ImageViewer from "./ImageViewer";
type Props = {
  images: Array<string> | string | undefined;
  isApp: boolean;
};
const CustomCarousel: FC<Props> = ({ images, isApp }) => {
  if (isApp && Array.isArray(images)) {
    const ind = images.findIndex((item) => item.includes("Cover"));
    if (ind !== -1) images.splice(ind, 1);
  }

  const appBreakpoints = {
    300: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3.9,
      spaceBetween: 10,
    },
  };

  const webBreakpoints = {
    300: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1.3,
      spaceBetween: 30,
    },
  };

  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerSrc, setViewerSrc] = useState<string | null>(null);

  const imgArray: string[] = Array.isArray(images)
    ? images
    : typeof images === "string"
    ? [images]
    : [];

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        autoHeight={true}
        slidesPerView={1.2}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        speed={600}
        breakpoints={isApp ? appBreakpoints : webBreakpoints}
      >
        {imgArray.map((src: string, index: number) => (
          <SwiperSlide key={index} className="bro">
            <img
              loading="eager"
              src={src}
              alt={`slide-${index}`}
              className="carousel-image"
              onLoad={(e) => {
                const img = e.target as HTMLImageElement; // Cast to HTMLImageElement
                img.classList.add(
                  img.naturalWidth > img.naturalHeight
                    ? "horizontal"
                    : "vertical"
                );
              }}
              onClick={() => {
                // open viewer
                setViewerSrc(src);
                setViewerOpen(true);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {viewerOpen && viewerSrc && (
        <ImageViewer src={viewerSrc} onClose={() => setViewerOpen(false)} />
      )}
      <div className="custom-prev">
        <IonIcon icon={chevronBack} />
      </div>
      <div className="custom-next">
        <IonIcon icon={chevronForward} />
      </div>
    </div>
  );
};

export default CustomCarousel;
