import Head from "next/head";
import Card from "@/components/Card";
import { Suspense, useState } from "react";
import { AiOutlineCloseCircle, AiOutlineMenuUnfold } from "react-icons/ai";

const Cards: Card[] = [
  {
    src: "bg-[url('/chile.jpeg')]",
    title: "Chile",
    subtitle: "Summer 2022",
  },
  { src: "bg-[url('/city.jpeg')]", title: "Budapest", subtitle: "Autumn 2022" },
  {
    src: "bg-[url('/mountains.jpeg')]",
    title: "Norway",
    subtitle: "Winter 2021",
  },
  {
    src: "bg-[url('/desert.jpeg')]",
    title: "Morocco",
    subtitle: "Spring 2021",
  },
  {
    src: "bg-[url('/istanbul.jpeg')]",
    title: "Istanbul",
    subtitle: "Winter 2020",
  },
  {
    src: "bg-[url('/dawn.jpeg')]",
    title: "Southern Poland",
    subtitle: "Autumn 2020",
  },
  {
    src: "bg-[url('/donkey.jpeg')]",
    title: "Northern Italy",
    subtitle: "Summer 2020",
  },
  { src: "bg-[url('/lake.jpeg')]", title: "Oregon", subtitle: "Spring 2020" },
];

const MainCard: Card = {
  src: "bg-[url('/forest.jpeg')]",
  title: "Northern California",
  subtitle: "Spring 2023",
};

export default function Home() {
  const [cards, setCards] = useState<Card[]>(Cards);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isZoom, setIsZoom] = useState<boolean>(false);
  const [zoomed, setZoomed] = useState<Card>(Cards[0]);

  const mobileMenu = (): JSX.Element => {
    return (
      <div
        className="absolute md:hidden bg-[#fff] rounded-full w-[50px] h-[50px] top-[10px] right-[10px] justify-center flex z-50"
        onClick={() => setIsOpen(true)}
      >
        <span className="self-center cursor-pointer">
          <AiOutlineMenuUnfold size={30} />
        </span>
      </div>
    );
  };

  const topPartSM = (): JSX.Element => {
    if (isOpen) {
      return (
        <div className="w-[100%] h-[100%] absolute top-0 left-0 bg-[rgba(13,13,13,0.6)] z-5">
          <div className="flex flex-col w-[90vw] bg-gray-700 text-[#fff] p-2 h-[30vh] left-0 right-0 top-0 bottom-0 fixed m-auto">
            <span className="cursor-pointer">
              <AiOutlineCloseCircle
                size={30}
                onClick={() => setIsOpen(false)}
              />
            </span>
            <div className="bg-[url('/artist.jpg')] bg-cover bg-no-repeat bg-center w-[100px] h-[100px] rounded-full self-center shadow-xl" />
            <h3 className="bold text-[1.3rem] text-center my-1">Jane Doe</h3>
            <p className="text-center text-[0.9rem]">
              Ex dolores quidem quo debitis corrupti hic ipsam dolorem et
              voluptatem tempore At nesciunt totam. In vero esse qui earum earum
              qui voluptas aliquid.
            </p>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  };

  const topPartMD = (): JSX.Element => {
    return (
      <div className="bg-gray-700 h-[50%] flex flex-row">
        <div className="w-[20%] h-[100%] left-0 hidden md:flex flex-col p-2 justify-center text-[#fff]">
          <div className="bg-[url('/artist.jpg')] bg-cover bg-no-repeat bg-center w-[100px] h-[100px] rounded-full self-center shadow-xl" />
          <h3 className="bold text-[1.3rem] text-center my-1">Jane Doe</h3>
          <p className="text-center text-[0.9rem]">
            Ex dolores quidem quo debitis corrupti hic ipsam dolorem et
            voluptatem tempore At nesciunt totam. In vero esse qui earum earum
            qui voluptas aliquid.
          </p>
        </div>
        {mobileMenu()}
        <div
          className={`w-[100%] md:w-[80%] h-[100%] inset-0  m-auto ${MainCard.src} bg-cover bg-no-repeat bg-center duration-300 hover:bg-[rgba(0,0,0,0.3)] group group-hover:duration-300 `}
          onClick={() => zoomFunc(MainCard)}
        >
          <div
            className="w-[100%] h-[100%] hover:bg-[rgba(0,0,0,0.3)] opacity-0
           group-hover:opacity-100 duration-300 group-hover:duration-300 text-[#fff] text-[3rem] flex flex-col justify-center text-center "
          >
            <h2 className="self-center">{MainCard.title}</h2>
            <p className="border-top-[#fff] border-t-2 w-[75%] self-center">
              {MainCard.subtitle}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const zoomFunc = (picture: Card): void => {
    setIsZoom(true);
    setZoomed(picture);
  };

  const zoom = (picture: Card): JSX.Element => {
    if (isZoom) {
      return (
        <div className="w-[100%] h-[100%] absolute inset-0 bg-[rgba(13,13,13,0.6)] flex z-5">
          <div
            onClick={() => setIsZoom(false)}
            className={`${picture.src} cursor-pointer relative w-[90%] h-[80%] z-20 bg-contain bg-center bg-no-repeat self-center p-4 inset-0 mx-auto `}
          >
            {/* <span className="cursor-pointer absolute inset-0 z-20 text-[#fff]">
              <AiOutlineCloseCircle
                size={50}
                onClick={() => setIsZoom(false)}
              />
            </span> */}
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      <Head>
        <title>Photo Blog</title>
        <meta
          name="Simple photoblog mock up"
          content="Stock photos in a selfmade photoblog"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/camera.png" />
      </Head>
      <main>
        <div className="main h-screen ">
          {/* BG */}
          <div className="h-screen bg-[url('/forest.jpeg')] bg-cover bg-no-repeat bg-center blur-md"></div>

          {/* Wrapper */}
          <div className="w-[95vw] md:w-[90vw] lg:w-[65vw] h-[95%] left-0 right-0 mx-auto flex flex-col fixed bottom-0 shadow-2xl mb-2">
            {/* Top Part */}
            {topPartMD()}

            {/* Grid */}

            <ul className="h-[50%] w-[100%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto text-[#fff]">
              <Suspense fallback="Loading">
                {cards.map((card) => {
                  return (
                    <span onClick={() => zoomFunc(card)} key={card.title}>
                      <Card
                        src={card.src}
                        title={card.title}
                        subtitle={card.subtitle}
                      />
                    </span>
                  );
                })}
              </Suspense>
            </ul>
          </div>
          {/* Mobile Menu */}
          {topPartSM()}
          {/* Zoom */}
          {zoom(zoomed)}
        </div>
      </main>
    </>
  );
}
