import { useEffect, useState } from "react";
import "./App.css";
import { motion } from "motion/react";
import {
  Bag,
  Account,
  Heart,
  LeftFacingArrow,
  RightFacingArrow,
  Award,
  Headset,
  Cart,
} from "./icons";
import { Plus } from "./icons/Plus";
import { Minus } from "./icons/Minus";
import { Title } from "./components/Title";
import { Button } from "./components/Button";
import { AnimatedPara } from "./components/AnimatedPara";
interface accordianType {
  id: number;
  question: string;
  answer: string;
}
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.addEventListener("load", async () => {
      setTimeout(() => setLoading(false), 2000);
    });
    return () => {
      window.removeEventListener("load", () => {
        setTimeout(() => setLoading(false), 2000);
      });
    };
  }, []);
  const accordianData: accordianType[] = [
    {
      id: 1,
      question: "Are your products safe for sensitive skin?",
      answer: "Yes they are",
    },
    {
      id: 2,
      question: "Are your products cruelty-free?",
      answer: "Yes they are",
    },
    {
      id: 3,
      question: "What is your return policy?",
      answer: "Yes they are",
    },
    {
      id: 4,
      question: "Do you ship internationally?",
      answer: "Yes they are",
    },
    {
      id: 5,
      question: "How do i choose the right product?",
      answer:
        "Yes they are Yes they areYes they areYes they areYes they areYes they areYes they areYes they areYes they areYes they areYes they areYes they areYes they are",
    },
  ];
  const [sectionIndex, setSectionIndex] = useState(0);
  const maxCarouselLength = 3;
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselIndex2, setCarouselIndex2] = useState(0);

  const handleNext2 = () => {
    setCarouselIndex2((prev) =>
      prev === maxCarouselLength - 1 ? 0 : prev + 1
    );
  };
  const handleNext = () => {
    setCarouselIndex((prev) => (prev === maxCarouselLength - 1 ? 0 : prev + 1));
  };
  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? maxCarouselLength - 1 : prev - 1));
  };
  const handlePrev2 = () => {
    setCarouselIndex2((prev) =>
      prev === 0 ? maxCarouselLength - 1 : prev - 1
    );
  };

  const [activeIndex, setActiveIndex] = useState(-1);
  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0, transform: "translateY(8px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className=" text-[18px] md:text-[24px] xl:text-[36px] text-darkgreen font-semibold tracking-tighter animate-pulse bg-lightgreen w-screen h-screen flex justify-center items-center"
      >
        Polishing your perfect skincare ritual
      </motion.div>
    );
  }
  return (
    <div className="text-darkgreen  bg-white font-inter flex flex-col ">
      <div className="bg-lightgreen h-fit flex flex-col gap-[18px] md:gap-[24px] xl:gap-[56px]">
        <motion.nav
          initial={{ transform: "translateY(8px)", opacity: 0 }}
          whileInView={{ transform: "translateY(0px)", opacity: 100 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className=" px-[30px] xl:px-[100px] xl:py-[20px]   py-[30px] flex justify-between items-center"
        >
          <motion.div className="text-[20px] md:text-[25px]  font-extrabold uppercase  leading-[1]  ">
            Skincare
          </motion.div>
          <motion.div className="hidden  md:flex md:gap-[30px]  font-normal md:text-[12px] xl:text-[14px] md:tracking-[-0.05em]">
            <p className="cursor-pointer transition-all duration-300 ease-in-out border-1 border-transparent hover:border-b-darkgreen ">
              All Products
            </p>
            <p className="cursor-pointer transition-all duration-300 ease-in-out border-1 border-transparent hover:border-b-darkgreen ">
              Serum
            </p>
            <p className="cursor-pointer transition-all duration-300 ease-in-out border-1 border-transparent hover:border-b-darkgreen ">
              Sunscreen
            </p>
          </motion.div>
          <motion.div className="font-normal text-[20px] tracking-[-0.05em] flex gap-[20px] xl:gap-[30px] ">
            <div className="flex gap-[4px] text-[14px] items-center">
              <div className="p-[4px] bg-white rounded-4xl ">
                <Bag></Bag>
              </div>
              <div className="hidden lg:block">Cart (1)</div>
            </div>
            {/* <p>Cart (1)</p> */}

            <div className="p-[4px] bg-white rounded-4xl flex justify-center items-center">
              <Heart></Heart>
            </div>
            <div className="p-[4px] bg-white rounded-4xl flex justify-center items-center">
              <Account></Account>
            </div>
          </motion.div>
        </motion.nav>
        <motion.div
          initial={{ transform: "translateY(8px)", opacity: 0 }}
          whileInView={{ transform: "translateY(0px)", opacity: 100 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="md:hidden flex flex-col gap-[50px] "
        >
          <header className="md:hidden flex flex-col gap-[20px] mb-[50px] md:my-0">
            <div className="w-full uppercase font-black text-[75px] tracking-[-0.05em] overflow-hidden ">
              <div className=" flex flex-col gap-0 relative -left-[5px]">
                <p className="leading-[0.9]">Glowwww</p>
                <p className="leading-[0.9]">Naturally</p>
              </div>
            </div>
            <div className="px-[30px] font-normal text-[18px] tracking-[-0.05em]">
              <p className="leading-[1.3]">
                Transform your skincare routine with premium products that
                restore, protect, and enhance your natural glow every day.
              </p>
              {/* <AnimatedPara content="Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day." /> */}
            </div>
          </header>
          <div className="relative  ">
            <div className="relative flex items-center justify-end my-[95vw]  w-screen ">
              <div className="w-screen relative overflow-hidden  min-h-[80px]">
                <div className="-mx-[12px] uppercase text-[85px] absolute  font-extrabold leading-[0.9]">
                  Skincare
                </div>
              </div>
              <div className="overflow-hidden absolute bottom-1/2 -translate-y-1/14 flex flex-col gap-10">
                <img
                  className="w-[100%]"
                  src="images\eaf98c86e767898b5d5bf09e2afbcbba14d30f51.png"
                />
                <div className="absolute w-full bottom-1/14 left-1/2">
                  <div className="flex justify-center items-center gap-[16px] px-[8px] py-[8px] w-fit bg-lightgreen  rounded-4xl -translate-x-1/2">
                    <div className="h-[50px] border rounded-4xl p-[0.5px] border-dashed border-darkgreen  aspect-square">
                      <img
                        className="rounded-4xl "
                        src="images\bfa6cb471def1625f335564f2d78bc0748f6b64c.jpg"
                      ></img>
                    </div>
                    <div className="text-[14px] mr-[8px]">
                      While giving you an invigorating
                      <br /> cleansing experience.
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 translate-y-1/14">
                <div className="relative overflow-hidden">
                  <img
                    className="w-[100%]"
                    src="images\bfa6cb471def1625f335564f2d78bc0748f6b64c.jpg"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="hidden md:flex xl:hidden flex-col gap-[156px]">
          <header className="h-fit  relative flex flex-col gap-[20px]">
            <div className="absolute -bottom-0 translate-y-1/2 w-full uppercase font-black text-[135px] tracking-[-0.05em] overflow-hidden ">
              <div className=" flex flex-col gap-0 relative -left-[5px]">
                <p className="leading-[0.76] ">Glowwww</p>
                <p className="leading-[0.76] ">Naturally</p>
              </div>
            </div>
            <div className="px-[40px] flex justify-between gap-16 items-start">
              <div className=" font-normal text-[16px] tracking-[-0.05em]">
                <p className="leading-[1.3]">
                  <span className="inline-block w-1/3 mt-[100px]"></span>
                  Transform your skincare routine with premium products that
                  restore, protect, and enhance your natural glow every day.
                </p>
              </div>
              <img
                className="rounded-2xl w-[100%] max-h-[335px] aspect-square"
                src="images\bfa6cb471def1625f335564f2d78bc0748f6b64c.jpg"
              ></img>
            </div>
          </header>
          <div className="relative h-fit ">
            <div className="relative h-120 w-screen ">
              <div className=" absolute bottom-0  w-screen overflow-hidden ">
                <div className=" -mx-[12px] uppercase text-[170px] font-extrabold leading-[0.9]">
                  Skincare
                </div>
              </div>
              <div className="px-[40px] absolute top-0 flex w-full items-center  justify-between">
                <img
                  className="w-[100%] max-w-[360px]  max-h-[400px]"
                  src="images\eaf98c86e767898b5d5bf09e2afbcbba14d30f51.png"
                />
                <button className="border h-fit rounded-3xl w-fit px-[36px] py-[8px]">
                  <p className="text-[16px]">Shop Now</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden  xl:flex flex-col  gap-[0px]">
          <motion.header
            initial={{ transform: "translateY(8px)", opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ transform: "translateY(0px)", opacity: 100 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className=" h-fit items-center justify-between flex  px-[100px]"
          >
            {/* <div className="px-[40px] flex justify-between gap-16 items-center"> */}
            <div className=" font-normal text-[16px] w-[450px] tracking-[-0.05em]">
              <p className="leading-[1.3]">
                <span className="inline-block w-1/3"></span>
                Transform your skincare
                <br /> routine with premium products that
                <br /> restore, protect, and enhance your natural <br />
                glow every day.
                {/* <AnimatedPara content="Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day." /> */}
              </p>
            </div>
            <div className="lg:w-[450px]   uppercase font-bold text-[70px] tracking-[-0.05em] leading-[0.76] ">
              <p>Glow</p>
              <p> Natur-</p>
              <p> ally</p>
            </div>
            <img
              className="max-h-[160px] rounded-2xl aspect-square"
              src="images\bfa6cb471def1625f335564f2d78bc0748f6b64c.jpg"
            ></img>
            {/* </div> */}
          </motion.header>
          <div className="flex flex-col gap-[54px]">
            <div className="relative h-fit ">
              <div className="relative h-120 w-full bg-lightgreen">
                <div className=" absolute bottom-0  w-full  overflow-hidden ">
                  <motion.div
                    initial={{ transform: "translateY(8px)", opacity: 0 }}
                    whileInView={{ transform: "translateY(0px)", opacity: 100 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className=" -mx-[66px] uppercase  text-[350px] font-bold leading-[0.74]"
                  >
                    Skincare
                  </motion.div>
                </div>
                <div className=" absolute bottom-0 left-1/2 -translate-x-1/2   w-fit  items-center  justify-between">
                  <motion.div
                    initial={{ transform: "translateY(-8px)", opacity: 0 }}
                    whileInView={{ transform: "translateY(0px)", opacity: 100 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <img
                      className="rounded-2xl  max-w-[350px]  max-h-[500px]"
                      src="images\eaf98c86e767898b5d5bf09e2afbcbba14d30f51.png"
                    />
                    <div className="absolute w-full bottom-1/14 left-1/2">
                      <div className="flex justify-center items-center gap-[16px] px-[8px] py-[8px] w-fit bg-lightgreen  rounded-4xl -translate-x-1/2">
                        <div className="h-[50px] border rounded-4xl p-[0.5px] border-dashed border-darkgreen  aspect-square">
                          <img
                            className="rounded-4xl "
                            src="images\bfa6cb471def1625f335564f2d78bc0748f6b64c.jpg"
                          ></img>
                        </div>
                        <div className="text-[14px] mr-[8px]">
                          While giving you an invigorating
                          <br /> cleansing experience.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ transform: "translateY(-8px)", opacity: 0 }}
                  whileInView={{ transform: "translateY(0px)", opacity: 100 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="absolute top-15 left-30"
                >
                  <Button varient="primary" text="Shop Now" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-[18px] xl:text-[28px] xl:tracking-wide font-normal  mt-[56px] md:mt-[112px]   flex flex-col gap-[30px] px-[30px] xl:px-[100px] items-center md:mb-[36px] mb-[56px] xl:mb-[128px]">
        {/* <p className=" text-[18px] xl:text-[28px] xl:tracking-wide font-normal ">
          Experience the ultimate in skincare with our expertly formulated
          products, crafted to nourish, protect, and rejuvenate your skin.
          Combining the finest natural ingredients with advanced science, our
          collection ensures every skin type can achieve a radiant, healthy
          glow. Embrace your beauty with confidence every day. Experience the
          ultimate in skincare with our expertly formulated products, crafted to
          nourish, protect, and rejuvenate your skin.
        </p> */}
        <AnimatedPara content=" Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin. Combining the finest natural ingredients with advanced science, our collection ensures every skin type can achieve a radiant, healthy glow. Embrace your beauty with confidence every day. Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin." />
      </div>
      <article className="flex flex-col gap-[36p] md:gap-[50px]">
        <motion.div
          initial={{ transform: "translateY(-8px)", opacity: 0 }}
          whileInView={{ transform: "translateY(0px)", opacity: 100 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="px-[30px]  flex flex-col gap-[56px] md:gap-[64px] xl:flex-row xl:px-[100px]"
        >
          <div className="flex flex-col gap-[28px] md:gap-[36px] xl:gap-[76px]">
            <div className=" flex flex-col gap-[28px] md:gap-[36px] xl:gap-[76px] ">
              <Title content="Why Our Products" />
              <div className="flex flex-col gap-[24px]">
                <h1 className="font-normal text-[34px] md:text-[50px] tracking-tighter leading-[1.25]">
                  YOUR SKIN DESERVES THE BEST CARE.
                </h1>
                <p className="text-greyish font-normal text-[16px]">
                  Discover a curated collection of skincare products designed to
                  rejuvenate, protect, and pamper your skin. Explore our rage
                  crafted with love backed by science, and inspired by nature.
                </p>
              </div>
            </div>
            <div className=" flex flex-col  gap-[24px] xl:gap-[48px]">
              <div className="flex gap-[30px]  md:gap-[64px] xl:gap-[24px]">
                <div className="relative text-[34px] h-fit xl:w-[136px] md:text-[60px] ">
                  01
                  <span className="absolute inset-0 bg-gradient-to-t from-white  from-0% to-70% to-transparent w-full h-full"></span>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <header className="text-[34px] md:text-[60px] tracking-tighter">
                    Bio Ingredients
                  </header>
                  <p className="text-greyish text-[16px] tracking-wide xl:w-2/3">
                    Get naturally beautiful and transform with our bio
                    ingredients creams for healthy, radiant skin.
                  </p>
                </div>
              </div>
              <div className="flex gap-[30px]  md:gap-[64px] xl:gap-[24px]">
                <div className=" relative text-[34px] xl:w-[116px] h-fit w-fit md:text-[60px]">
                  02
                  <span className="absolute inset-0 bg-gradient-to-t from-white  from-0% to-70%  to-transparent w-full h-full"></span>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <header className="text-[34px] md:text-[60px] tracking-tighter">
                    Everything Natural
                  </header>
                  <p className="text-greyish text-[16px] tracking-wide xl:w-2/3">
                    Pure ingredients for pure skin. The Perfect solution for
                    your skin care needs.
                  </p>
                </div>
              </div>
              <div className="flex gap-[30px] md:gap-[64px] xl:gap-[24px]">
                <div className="relative text-[34px] xl:w-[116px] h-fit w-fit md:text-[60px]">
                  03
                  <span className="absolute inset-0 bg-gradient-to-t from-0% to-70% from-white  to-transparent w-full h-full"></span>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <header className="text-[34px] md:text-[60px] tracking-tighter">
                    All Handmade
                  </header>
                  <p className="text-greyish text-[16px] tracking-wide xl:w-2/3">
                    Made with love and care. Just for you. Give your skin the
                    tender loving care it deserves.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[4px] md:gap-[12px] xl:min-w-1/2">
            <div className="relative overflow-hidden">
              <img
                className="rounded-2xl"
                src="images\5617a13221609fb0ba6cd721b235ba7e9b1ffa06.png"
              ></img>
              <div className="absolute w-full bottom-1/14 left-1/2">
                <div className="flex justify-center items-center gap-[16px] px-[8px] py-[8px] w-fit bg-lightgreen  rounded-4xl -translate-x-1/2">
                  <div className=" h-[50px] border rounded-4xl p-[0.5px] border-dashed border-darkgreen  aspect-square">
                    <div className=" rounded-4xl p-[4px] flex justify-center items-center bg-darkgreen">
                      <Award />
                    </div>
                  </div>
                  <div className="text-[14px] mr-[8px]">
                    Best Skin Care Product
                    <br /> Award Winning
                  </div>
                </div>
              </div>
            </div>
            <div className="md:text-[20px] text-[16px] tracking-wide flex justify-between p-[30px]">
              <p className="uppercase">Since 2001</p>
              <p className="uppercase border border-transparent cursor-pointer hover:border-b-darkgreen">
                Learn more
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ transform: "translateY(-8px)", opacity: 0 }}
          whileInView={{ transform: "translateY(0px)", opacity: 100 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="p-[30px] xl:p-[100px] flex flex-col gap-[36px] md:gap-[76px]"
        >
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-[24px] md:gap-[24px]">
            <div className="h-fit ">
              <Title content="Best Selling Products" />
            </div>
            <div className="xl:max-w-[500px]   xl:text-center xl:-translate-x-1/10 ">
              <h1 className=" leading-[1.25] tracking-tighter text-[34px] md:text-[50px] ">
                Skincare That Brings Out Your Natural Radiance
              </h1>
            </div>
            <div className="hidden md:flex w-full lg:w-fit justify-center  gap-[16px] md:gap-[12px] h-fit">
              <div
                className="max-w-[36px] md:max-w-[40px] xl:max-w-[60px]  aspect-square"
                onClick={handlePrev}
              >
                <LeftFacingArrow />
              </div>
              <div
                className="max-w-[36px] md:max-w-[40px] xl:max-w-[60px] aspect-square"
                onClick={handleNext}
              >
                <RightFacingArrow />
              </div>
            </div>
          </div>

          <div className="md:hidden overflow-hidden">
            <div
              className={`w-[300%] flex justify-around 
               ${
                 carouselIndex === 0
                   ? "-translate-x-0"
                   : carouselIndex === 1
                   ? "-translate-x-1/3"
                   : "-translate-x-2/3"
               }
                 transition-all duration-600 ease-in-out`}
            >
              <div className="w-1/4 relative">
                <img
                  className=" aspect-3/4 rounded-2xl"
                  src="images\fd338a13c8c498ae831bdf0de86301e74edb43f1.jpg"
                ></img>
                <div className="px-[8px] md:px-[8px] xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                  <div className="xl:h-[72px] md:h-fit h-[60px] p-[6px] px-[10px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                    <div className="flex flex-col gap-[4px] xl:gap-[8px]">
                      <div className="text-greyish text-[14px] md:text-[10px] xl:text-[14px] tracking-tighter">
                        RITUAL OF SAKURA.
                      </div>
                      <div className="text-[12px] xl:text-[12px] md:text-[8px] text-neutral-500 tracking-tighter">
                        FROM $19.99
                      </div>
                    </div>
                    <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                      <Cart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/4 relative">
                <img
                  className=" rounded-2xl aspect-3/4"
                  src="images\b5d506ba564dadaf25df9a99f7c08d02000e2a28.jpg"
                ></img>
                <div className="px-[8px] md:px-[8px] xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                  <div className="xl:h-[72px] md:h-fit h-[60px] p-[6px] px-[10px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                    <div className="flex flex-col gap-[4px] xl:gap-[8px]">
                      <div className="text-greyish text-[14px] md:text-[10px] xl:text-[14px] tracking-tighter">
                        THE BODY LOTION.
                      </div>
                      <div className="text-[12px] xl:text-[12px] md:text-[8px] text-neutral-500 tracking-tighter">
                        FROM $19.99
                      </div>
                    </div>
                    <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                      <Cart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/4 relative">
                <img
                  className=" aspect-3/4 rounded-2xl"
                  src="images\bfa6cb471def1625f335564f2d78bc0748f6b64c.jpg"
                ></img>
                <div className="px-[8px] md:px-[8px] xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                  <div className="xl:h-[72px] md:h-fit h-[60px] p-[6px] px-[10px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                    <div className="flex flex-col gap-[4px] xl:gap-[8px]">
                      <div className="text-greyish text-[14px] md:text-[10px] xl:text-[14px] tracking-tighter">
                        ALYA SKIN CLEANSER.
                      </div>
                      <div className="text-[12px] xl:text-[12px] md:text-[8px] text-neutral-500 tracking-tighter">
                        FROM $19.99
                      </div>
                    </div>
                    <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                      <Cart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden w-full lg:w-fit flex justify-center  gap-[16px] md:gap-[12px] h-fit">
            <div
              className="max-w-[36px] md:max-w-[40px] xl:max-w-[60px]  aspect-square"
              onClick={handlePrev}
            >
              <LeftFacingArrow />
            </div>
            <div
              className="max-w-[36px] md:max-w-[40px] xl:max-w-[60px] aspect-square"
              onClick={handleNext}
            >
              <RightFacingArrow />
            </div>
          </div>
          <div className="hidden md:block overflow-hidden">
            <div
              className={`w-[300%] flex justify-around 
               ${
                 carouselIndex === 0
                   ? "-translate-x-0"
                   : carouselIndex === 1
                   ? "-translate-x-1/3"
                   : "-translate-x-2/3"
               }
                 transition-all duration-600 ease-in-out`}
            >
              <div className="relative w-1/13 ">
                <img
                  className="aspect-2/3 rounded-2xl"
                  src="images\fd338a13c8c498ae831bdf0de86301e74edb43f1.jpg"
                ></img>
                <div className="md:px-[8px] xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                  <div className="xl:h-[72px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                    <div className="flex flex-col xl:gap-[8px]">
                      <div className="text-greyish md:text-[10px] xl:text-[14px] tracking-tighter">
                        THE BODY LOTION.
                      </div>
                      <div className="xl:text-[12px] md:text-[8px] text-neutral-600 tracking-tighter">
                        FROM $19.99
                      </div>
                    </div>
                    <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                      <Cart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-1/13">
                <img
                  className=" aspect-2/3 rounded-2xl"
                  src="images\cdce7d5f9981ad9b73f089ab3f8cffccc4a6eb76.jpg"
                ></img>
                <div className="md:px-[8px] xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                  <div className="xl:h-[72px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                    <div className="flex flex-col xl:gap-[8px]">
                      <div className="text-greyish md:text-[10px] xl:text-[14px] tracking-tighter">
                        RITUAL OF SAKURA.
                      </div>
                      <div className="xl:text-[12px] md:text-[8px] text-neutral-600 tracking-tighter">
                        FROM $19.99
                      </div>
                    </div>
                    <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                      <Cart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-1/13">
                <img
                  className=" rounded-2xl"
                  src="images\b5d506ba564dadaf25df9a99f7c08d02000e2a28.jpg"
                ></img>
                <div className="md:px-[8px] xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                  <div className="xl:h-[72px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                    <div className="flex flex-col xl:gap-[8px]">
                      <div className="text-greyish md:text-[10px] xl:text-[14px] tracking-tighter">
                        ALYA SKIN CLEANSER.
                      </div>
                      <div className="xl:text-[12px] md:text-[8px] text-neutral-600 tracking-tighter">
                        FROM $19.99
                      </div>
                    </div>
                    <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                      <Cart />
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="relative w-1/13 ">
                <img
                  className="aspect-2/3 rounded-2xl"
                  src="images\fd338a13c8c498ae831bdf0de86301e74edb43f1.jpg"
                ></img>
                <div className="md:px-[8px] xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                  <div className="xl:h-[72px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                    <div className="flex flex-col xl:gap-[8px]">
                      <div className="text-greyish md:text-[10px] xl:text-[14px] tracking-tighter">
                        THE BODY LOTION.
                      </div>
                      <div className="xl:text-[12px] md:text-[8px] text-neutral-600 tracking-tighter">
                        FROM $19.99
                      </div>
                    </div>
                    <div className=" hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                      <Cart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-1/13">
                <img
                  className=" rounded-2xl"
                  src="images\b5d506ba564dadaf25df9a99f7c08d02000e2a28.jpg"
                ></img>
                <div className="md:px-[8px] xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                  <div className="xl:h-[72px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                    <div className="flex flex-col xl:gap-[8px]">
                      <div className="text-greyish md:text-[10px] xl:text-[14px] tracking-tighter">
                        ALYA SKIN CLEANSER.
                      </div>
                      <div className="xl:text-[12px] md:text-[8px] text-neutral-600 tracking-tighter">
                        FROM $19.99
                      </div>
                    </div>
                    <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                      <Cart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-1/13">
                <img
                  className=" aspect-2/3 rounded-2xl"
                  src="images\cdce7d5f9981ad9b73f089ab3f8cffccc4a6eb76.jpg"
                ></img>
                <div className="md:px-[8px] xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                  <div className="xl:h-[72px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                    <div className="flex flex-col xl:gap-[8px]">
                      <div className="text-greyish md:text-[10px] xl:text-[14px] tracking-tighter">
                        RITUAL OF SAKURA.
                      </div>
                      <div className="xl:text-[12px] md:text-[8px] text-neutral-600 tracking-tighter">
                        FROM $19.99
                      </div>
                    </div>
                    <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                      <Cart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-1/13 ">
                <img
                  className="aspect-2/3 rounded-2xl"
                  src="images\fd338a13c8c498ae831bdf0de86301e74edb43f1.jpg"
                ></img>
                <div className="md:px-[8px] xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                  <div className="xl:h-[72px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                    <div className="flex flex-col xl:gap-[8px]">
                      <div className="text-greyish md:text-[10px] xl:text-[14px] tracking-tighter">
                        THE BODY LOTION.
                      </div>
                      <div className="xl:text-[12px] md:text-[8px] text-neutral-600 tracking-tighter">
                        FROM $19.99
                      </div>
                    </div>
                    <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                      <Cart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-1/13">
                <img
                  className=" rounded-2xl"
                  src="images\b5d506ba564dadaf25df9a99f7c08d02000e2a28.jpg"
                ></img>
                <div className="md:px-[8px] xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                  <div className="xl:h-[72px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                    <div className="flex flex-col xl:gap-[8px]">
                      <div className="text-greyish md:text-[10px] xl:text-[14px] tracking-tighter">
                        ALYA SKIN CLEANSER.
                      </div>
                      <div className="xl:text-[12px] md:text-[8px] text-neutral-600 tracking-tighter">
                        FROM $19.99
                      </div>
                    </div>
                    <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                      <Cart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-1/13">
                <img
                  className=" aspect-2/3 rounded-2xl"
                  src="images\cdce7d5f9981ad9b73f089ab3f8cffccc4a6eb76.jpg"
                ></img>
                <div className="md:px-[8px] xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                  <div className="xl:h-[72px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                    <div className="flex flex-col xl:gap-[8px]">
                      <div className="text-greyish md:text-[10px] xl:text-[14px] tracking-tighter">
                        RITUAL OF SAKURA.
                      </div>
                      <div className="xl:text-[12px] md:text-[8px] text-neutral-600 tracking-tighter">
                        FROM $19.99
                      </div>
                    </div>
                    <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                      <Cart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ transform: "translateY(-8px)", opacity: 0 }}
          whileInView={{ transform: "translateY(0px)", opacity: 100 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="relative hidden xl:block xl:px-[100px] "
        >
          <div className="rounded-2xl max-w-[1980px] overflow-hidden relative">
            <div className="absolute  bg-gradient-to-b from-55% to-100% from-transparent  to-neutral-800 h-full w-full"></div>
            <div className="absolute p-[54px] bottom-0 left-1/2 w-1/2 -translate-x-1/2 gap-[36px] flex flex-col justify-end items-center">
              <h1 className="text-lightgreen text-[50px] leading-[1.25] xl:w-150 xl:text-center xl:wrap-normal">
                Feel Beautiful Inside and Out with Every Product.
              </h1>
              {/* <button className="border bg-lightgreen rounded-[100px] w-fit px-[36px] py-[8px]">
                <p className="text-darkgreen text-[16px] font-normal">
                  Shop Now
                </p>
              </button> */}
              <Button varient="secondary" text="Shop Now" />
            </div>
            <img src="images\193c7506b5761ba24a86531417253435f11954cb.png" />
          </div>
        </motion.div>
        <motion.div
          initial={{ transform: "translateY(-8px)", opacity: 0 }}
          whileInView={{ transform: "translateY(0px)", opacity: 100 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="p-[30px]"
        >
          <div className="flex flex-col xl:items-center gap-[36px] md:gap-[44px] xl:gap-[56px]">
            <p className="text-[34px] md:text-[50px] xl:w-150 xl:text-center xl:wrap-normal tracking-tighter leading-[1.25]">
              Feel Beautiful Inside and Out with Every Product.
            </p>

            <div className="flex xl:justify-start md:justify-center flex-wrap gap-[8px]">
              <div onClick={() => setSectionIndex(0)}>
                <Button
                  varient={`${sectionIndex === 0 ? "primary" : "secondary"}`}
                  text="New Arrival"
                />
              </div>
              <div onClick={() => setSectionIndex(1)}>
                <Button
                  varient={`${sectionIndex === 1 ? "primary" : "secondary"}`}
                  text="Cleansing"
                />
              </div>
              <div onClick={() => setSectionIndex(2)}>
                <Button
                  varient={`${sectionIndex === 2 ? "primary" : "secondary"}`}
                  text="Acne Fighter"
                />
              </div>
              <div onClick={() => setSectionIndex(3)}>
                <Button
                  varient={`${sectionIndex === 3 ? "primary" : "secondary"}`}
                  text="Anti Aging"
                />
              </div>
            </div>
            <div className="hidden md:block">
              <div
                className={`${
                  sectionIndex === 0 ? " flex" : " hidden"
                } w-full  justify-around   transition-all duration-700 ease-in-out`}
              >
                <div className="md:w-1/4 relative ">
                  <img
                    className="h-full w-full  rounded-2xl"
                    src="images\fd338a13c8c498ae831bdf0de86301e74edb43f1.jpg"
                  ></img>
                  <div className="md:px-[8px] w xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                    <div className="xl:h-[72px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                      <div className="flex flex-col xl:gap-[8px]">
                        <div className="text-greyish md:text-[10px] xl:text-[14px] tracking-tighter">
                          THE BODY LOTION.
                        </div>
                        <div className="xl:text-[12px] md:text-[8px] text-neutral-600 tracking-tighter">
                          FROM $19.99
                        </div>
                      </div>
                      <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                        <Cart />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/4 relative ">
                  <img
                    className="h-full w-full  rounded-2xl"
                    src="images\cdce7d5f9981ad9b73f089ab3f8cffccc4a6eb76.jpg"
                  ></img>
                  <div className="md:px-[8px] w xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                    <div className="xl:h-[72px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                      <div className="flex flex-col xl:gap-[8px]">
                        <div className="text-greyish md:text-[10px] xl:text-[14px] tracking-tighter">
                          ALSA SKIN CLEANSER
                        </div>
                        <div className="xl:text-[12px] md:text-[8px] text-neutral-600 tracking-tighter">
                          FROM $19.99
                        </div>
                      </div>
                      <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                        <Cart />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/4 relative ">
                  <img
                    className="h-full w-full  rounded-2xl"
                    src="images\b5d506ba564dadaf25df9a99f7c08d02000e2a28.jpg"
                  ></img>
                  <div className="md:px-[8px] w xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                    <div className="xl:h-[72px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                      <div className="flex flex-col xl:gap-[8px]">
                        <div className="text-greyish md:text-[10px] xl:text-[14px] tracking-tighter">
                          RITUAL OF SAKURA
                        </div>
                        <div className="xl:text-[12px] md:text-[8px] text-neutral-600 tracking-tighter">
                          FROM $19.99
                        </div>
                      </div>
                      <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                        <Cart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${
                  sectionIndex === 1 ? " flex" : " hidden"
                } justify-around  transition-all duration-700 ease-in-out`}
              >
                <div className="md:w-1/4 relative ">
                  <img
                    className="h-full w-full  rounded-2xl"
                    src="images\cdce7d5f9981ad9b73f089ab3f8cffccc4a6eb76.jpg"
                  ></img>
                  <div className="md:px-[8px] w xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                    <div className="xl:h-[72px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                      <div className="flex flex-col xl:gap-[8px]">
                        <div className="text-greyish md:text-[10px] xl:text-[14px] tracking-tighter">
                          ALSA SKIN CLEANSER
                        </div>
                        <div className="xl:text-[12px] md:text-[8px] text-neutral-600 tracking-tighter">
                          FROM $19.99
                        </div>
                      </div>
                      <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                        <Cart />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/4 relative ">
                  <img
                    className="h-full w-full  rounded-2xl"
                    src="images\fd338a13c8c498ae831bdf0de86301e74edb43f1.jpg"
                  ></img>
                  <div className="md:px-[8px] w xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                    <div className="xl:h-[72px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                      <div className="flex flex-col xl:gap-[8px]">
                        <div className="text-greyish md:text-[10px] xl:text-[14px] tracking-tighter">
                          THE BODY LOTION.
                        </div>
                        <div className="xl:text-[12px] md:text-[8px] text-neutral-600 tracking-tighter">
                          FROM $19.99
                        </div>
                      </div>
                      <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                        <Cart />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/4 relative ">
                  <img
                    className="h-full w-full  rounded-2xl"
                    src="images\b5d506ba564dadaf25df9a99f7c08d02000e2a28.jpg"
                  ></img>
                  <div className="md:px-[8px] w xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                    <div className="xl:h-[72px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                      <div className="flex flex-col xl:gap-[8px]">
                        <div className="text-greyish md:text-[10px] xl:text-[14px] tracking-tighter">
                          RITUAL OF SAKURA
                        </div>
                        <div className="xl:text-[12px] md:text-[8px] text-neutral-600 tracking-tighter">
                          FROM $19.99
                        </div>
                      </div>
                      <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                        <Cart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${
                  sectionIndex === 2 ? " flex" : " hidden"
                }   justify-around  transition-all duration-700 ease-in-out`}
              >
                <div className="md:w-1/4 relative ">
                  <img
                    className="h-full w-full  rounded-2xl"
                    src="images\fd338a13c8c498ae831bdf0de86301e74edb43f1.jpg"
                  ></img>
                  <div className="md:px-[8px] w xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                    <div className="xl:h-[72px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                      <div className="flex flex-col xl:gap-[8px]">
                        <div className="text-greyish md:text-[10px] xl:text-[14px] tracking-tighter">
                          THE BODY LOTION.
                        </div>
                        <div className="xl:text-[12px] md:text-[8px] text-neutral-600 tracking-tighter">
                          FROM $19.99
                        </div>
                      </div>
                      <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                        <Cart />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/4 relative ">
                  <img
                    className="h-full w-full  rounded-2xl"
                    src="images\cdce7d5f9981ad9b73f089ab3f8cffccc4a6eb76.jpg"
                  ></img>
                  <div className="md:px-[8px] w xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                    <div className="xl:h-[72px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                      <div className="flex flex-col xl:gap-[8px]">
                        <div className="text-greyish md:text-[10px] xl:text-[14px] tracking-tighter">
                          ALSA SKIN CLEANSER
                        </div>
                        <div className="xl:text-[12px] md:text-[8px] text-neutral-600 tracking-tighter">
                          FROM $19.99
                        </div>
                      </div>
                      <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                        <Cart />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/4 relative ">
                  <img
                    className="h-full w-full  rounded-2xl"
                    src="images\b5d506ba564dadaf25df9a99f7c08d02000e2a28.jpg"
                  ></img>
                  <div className="md:px-[8px] w xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                    <div className="xl:h-[72px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                      <div className="flex flex-col xl:gap-[8px]">
                        <div className="text-greyish md:text-[10px] xl:text-[14px] tracking-tighter">
                          RITUAL OF SAKURA
                        </div>
                        <div className="xl:text-[12px] md:text-[8px] text-neutral-600 tracking-tighter">
                          FROM $19.99
                        </div>
                      </div>
                      <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                        <Cart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${
                  sectionIndex === 3 ? "flex" : " hidden"
                }  justify-around  transition-all duration-700 ease-in-out`}
              >
                <div className="md:w-1/4 relative ">
                  <img
                    className="h-full w-full  rounded-2xl"
                    src="images\fd338a13c8c498ae831bdf0de86301e74edb43f1.jpg"
                  ></img>
                  <div className="md:px-[8px] w xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                    <div className="xl:h-[72px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                      <div className="flex flex-col xl:gap-[8px]">
                        <div className="text-greyish md:text-[10px] xl:text-[14px] tracking-tighter">
                          THE BODY LOTION.
                        </div>
                        <div className="xl:text-[12px] md:text-[8px] text-neutral-600 tracking-tighter">
                          FROM $19.99
                        </div>
                      </div>
                      <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                        <Cart />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/4 relative ">
                  <img
                    className="h-full w-full  rounded-2xl"
                    src="images\b5d506ba564dadaf25df9a99f7c08d02000e2a28.jpg"
                  ></img>
                  <div className="md:px-[8px] w xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                    <div className="xl:h-[72px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                      <div className="flex flex-col xl:gap-[8px]">
                        <div className="text-greyish md:text-[10px] xl:text-[14px] tracking-tighter">
                          RITUAL OF SAKURA
                        </div>
                        <div className="xl:text-[12px] md:text-[8px] text-neutral-600 tracking-tighter">
                          FROM $19.99
                        </div>
                      </div>
                      <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                        <Cart />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/4 relative ">
                  <img
                    className="h-full w-full  rounded-2xl"
                    src="images\cdce7d5f9981ad9b73f089ab3f8cffccc4a6eb76.jpg"
                  ></img>
                  <div className="md:px-[8px] w xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                    <div className="xl:h-[72px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                      <div className="flex flex-col xl:gap-[8px]">
                        <div className="text-greyish md:text-[10px] xl:text-[14px] tracking-tighter">
                          ALSA SKIN CLEANSER
                        </div>
                        <div className="xl:text-[12px] md:text-[8px] text-neutral-600 tracking-tighter">
                          FROM $19.99
                        </div>
                      </div>
                      <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                        <Cart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[18px] md:hidden overflow-hidden">
              <div
                className={`w-[300%] flex justify-around 
               ${
                 carouselIndex2 === 0
                   ? "-translate-x-0"
                   : carouselIndex2 === 1
                   ? "-translate-x-1/3"
                   : "-translate-x-2/3"
               }
                 transition-all duration-600 ease-in-out`}
              >
                <div className="relative w-1/4 h-fit">
                  <img
                    className="aspect-3/4 rounded-2xl"
                    src="images\fd338a13c8c498ae831bdf0de86301e74edb43f1.jpg"
                  ></img>
                  <div className="px-[8px] md:px-[8px] xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                    <div className="xl:h-[72px] md:h-fit h-[60px] p-[6px] px-[10px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                      <div className="flex flex-col gap-[4px] xl:gap-[8px]">
                        <div className="text-greyish text-[14px] md:text-[10px] xl:text-[14px] tracking-tighter">
                          RITUAL OF SAKURA.
                        </div>
                        <div className="text-[12px] xl:text-[12px] md:text-[8px] text-neutral-500 tracking-tighter">
                          FROM $19.99
                        </div>
                      </div>
                      <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                        <Cart />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-1/4 h-fit">
                  <img
                    className="aspect-3/4 rounded-2xl"
                    src="images\cdce7d5f9981ad9b73f089ab3f8cffccc4a6eb76.jpg"
                  ></img>
                  <div className="px-[8px] md:px-[8px] xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                    <div className="xl:h-[72px] md:h-fit h-[60px] p-[6px] px-[10px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                      <div className="flex flex-col gap-[4px] xl:gap-[8px]">
                        <div className="text-greyish text-[14px] md:text-[10px] xl:text-[14px] tracking-tighter">
                          THE BODY LOTION.
                        </div>
                        <div className="text-[12px] xl:text-[12px] md:text-[8px] text-neutral-500 tracking-tighter">
                          FROM $19.99
                        </div>
                      </div>
                      <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                        <Cart />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-1/4 h-fit">
                  <img
                    className="aspect-3/4 rounded-2xl"
                    src="images\b5d506ba564dadaf25df9a99f7c08d02000e2a28.jpg"
                  ></img>
                  <div className="px-[8px] md:px-[8px] xl:px-[12px] absolute w-full bottom-1/15 left-1/2 -translate-x-1/2  ">
                    <div className="xl:h-[72px] md:h-fit h-[60px] p-[6px] px-[10px] w-full md:p-[4px] xl:p-[8px]  bg-white rounded-md flex justify-between">
                      <div className="flex flex-col gap-[4px] xl:gap-[8px]">
                        <div className="text-greyish text-[14px] md:text-[10px] xl:text-[14px] tracking-tighter">
                          ALYA SKIN CLEANSER.
                        </div>
                        <div className="text-[12px] xl:text-[12px] md:text-[8px] text-neutral-500 tracking-tighter">
                          FROM $19.99
                        </div>
                      </div>
                      <div className="hover:bg-neutral-300 cursor-pointer h-full rounded-md flex justify-center items-center aspect-square bg-neutral-200 p-[4px]">
                        <Cart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" md:hidden w-full lg:w-fit flex justify-center  gap-[24px] md:gap-[12px] h-fit">
                <div
                  className="max-w-[36px] md:max-w-[40px] xl:max-w-[60px]  aspect-square"
                  onClick={handlePrev2}
                >
                  <LeftFacingArrow />
                </div>
                <div
                  className="max-w-[36px] md:max-w-[40px] xl:max-w-[60px] aspect-square"
                  onClick={handleNext2}
                >
                  <RightFacingArrow />
                </div>
              </div>
            </div>
          </div>
          {/* <div>Carousel</div>
          <div>Buttons</div> */}
        </motion.div>
        <motion.div
          initial={{ transform: "translateY(-8px)", opacity: 0 }}
          whileInView={{ transform: "translateY(0px)", opacity: 100 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex flex-col xl:flex-row-reverse p-[30px] gap-[24px]  md:gap-[36px] xl:px-[100px] xl:gap-[100px]"
        >
          <div className=" flex flex-col gap-[28px] md:gap-[48px]">
            <div>
              <Title content="Frequently Asked Questions" />
            </div>
            <div className="text-[34px] md:text-[50px] tracking-tight leading-[1.25]">
              <h1>Answer to All Your Skincare Questions All in One Place</h1>
            </div>
            <div className="h-full  relative w-full ">
              <div className=" top-0 left-0  h-fit w-full flex flex-col  gap-[12px] ">
                {accordianData.map((value) => {
                  return (
                    <div className="flex justify-between items-start border rounded-md p-[8px] md:p-[12px] lg:p-[16px]">
                      <div
                        className={`flex flex-col ${
                          value.id === activeIndex ? "gap-[16px]" : "gap-[0px]"
                        } transition-all duration-600`}
                      >
                        <div
                          className="text-[14px] md:text-[18px] font-regular cursor-pointer"
                          onClick={() =>
                            setActiveIndex((prev) =>
                              prev === value.id ? -1 : value.id
                            )
                          }
                        >
                          {value.question}
                        </div>
                        <div
                          className={`${
                            activeIndex === value.id
                              ? "max-h-[300px]"
                              : "max-h-[0px]"
                          } transition-all duration-600 ease-in-out overflow-hidden text-[14px]`}
                        >
                          <p>{value.answer}</p>
                        </div>
                      </div>
                      <div
                        className={`${
                          activeIndex === value.id ? "hidden" : "block"
                        } max-w-[36px] cursor-pointer`}
                        onClick={() => setActiveIndex(value.id)}
                      >
                        <Plus />
                      </div>
                      <div
                        className={`${
                          activeIndex === value.id ? "block" : "hidden"
                        } max-w-[36px] cursor-pointer`}
                        onClick={() => setActiveIndex(-1)}
                      >
                        <Minus />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="overflow-hidden lg:max-w-3/7 relative ">
            <img
              className=" rounded-2xl"
              src="images\fd338a13c8c498ae831bdf0de86301e74edb43f1.jpg"
            ></img>
            <div className="absolute w-full bottom-1/14 left-1/2">
              <div className="flex justify-center items-center gap-[16px] px-[8px] py-[8px] w-fit bg-lightgreen  rounded-4xl -translate-x-1/2">
                <div className=" h-[50px] border rounded-4xl p-[0.5px] border-dashed border-darkgreen  aspect-square">
                  <div className="h-full w-full rounded-4xl p-[4px] flex justify-center items-center bg-darkgreen">
                    <Headset />
                  </div>
                </div>
                <div className="text-[14px] mr-[8px]">
                  24/7 We’re Here to
                  <br /> Help You
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <footer className="h-fit lg:min-h-[600px] relative text-lightgreen bg-darkgreen p-[30px] pb-[100px]  flex flex-col lg:flex-row lg:justify-between gap-[56px] md:gap-[86px] lg:gap-[44px] overflow-hidden">
          <div className="flex flex-col gap-[36px] md:gap-[48px] lg:gap-[60px] text-[34px] md:text-[50px] tracking-tight leading-[1.25]">
            <h1 className="lg:h-50">
              Join the Skincare <br />
              Community Now
            </h1>
            <div className="flex justify-between text-[14px] md:text-[20px] tracking-tighter">
              <button className="hover:border-b cursor-pointer">
                Facebook
              </button>
              <button className="hover:border-b cursor-pointer">
                Instagram
              </button>
              <button className="hover:border-b cursor-pointer">Youtube</button>
            </div>
          </div>

          <div className="flex flex-col gap-[36px] md:gap-[48px] lg:gap-[60px]">
            <div className="lg:h-50 ">
              <p className="text-[14px] md:text-[20px] tracking-tighter leading-[1]">
                Get in Touch
              </p>
              <button className="text-[28px] md:text-[50px] tracking-tight leading-[1.25] ">
                contact.skincare.com
              </button>
            </div>

            <div className="flex justify-between text-[12px]  text-nowrap md:text-[20px] tracking-tighter ">
              <button className="hover:border-b cursor-pointer">
                Terms of Services
              </button>
              <button className="hover:border-b cursor-pointer">
                {" "}
                Privacy Policy
              </button>
              <button className="hover:border-b cursor-pointer">
                Cookies Policy
              </button>
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-8 -left-4 md:-bottom-16 lg:-bottom-[140px] uppercase text-[90px] md:text-[170px] lg:text-[420px] font-black tracking-tighter opacity-10 leading-[1]">
            Skincare
          </div>
        </footer>
      </article>
    </div>
  );
}

export default App;
