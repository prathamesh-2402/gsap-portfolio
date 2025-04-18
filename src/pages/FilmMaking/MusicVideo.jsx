import ParallaxWindow from "../../components/FilmMaking/ParallaxVideo";

const MusicVideo = () => {
  const serviceData = [
    {
      id: 1,
      title: "Hinduja 1",
      location: "New York, USA",
      date: "March 2023",
    },
    {
      id: 2,
      title: "Hinduja 2",
      location: "New York, USA",
      date: "March 2023",
    },
    {
      id: 3,
      title: "Hinduja 3",
      location: "New York, USA",
      date: "March 2023",
    },
    {
      id: 4,
      title: "Hinduja 4",
      location: "New York, USA",
      date: "March 2023",
    },
    {
      id: 5,
      title: "Lisen",
      location: "New York, USA",
      date: "March 2023",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex flex-col justify-center items-center gap-20 px-[10%] md:text-center">
        <h1 className="text-[54px] sm:text-[90px] font-semibold h-[85vh] content-center">
          Music Video
        </h1>
        <h1 className="text-[34px] sm:text-[54px] font-semibold ">
          “Where Sound Discovers Its Soul in Visuals”
        </h1>
        <p className="text-[18px] sm:text-[24px]  ">
          We don&apos;t just make music videos, we bring your songs to life with
          bright artwork and a personal touch. Whether it&apos;s love, tragedy,
          or triumph, our crew infuses each frame with meaning, ensuring your
          message is heard. With creativity at its core, we combine humour and
          inspiration to make your music stand out.
        </p>
        <p className="text-[18px] sm:text-[24px]  ">
          Music videos are more than simply promotional tools, they help artists
          connect with their audience. We make videos that inspire, bring
          excitement, and leave a lasting impression by combining visual
          direction with emotional storytelling. Let us make your song unique by
          creating visuals that hit all the perfect notes.
        </p>
      </div>
      {serviceData.map((item, index) => (
        <ParallaxWindow serviceData={item} key={index} />
      ))}
    </div>
  );
};

export default MusicVideo;
