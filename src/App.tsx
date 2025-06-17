import { useState } from "react";
import "./App.css";
import { Bag, Cart, Account, Heart } from "./icons";
interface accordianType {
  id: number;
  question: string;
  answer: string;
}
function App() {
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
      answer: "Yes they are",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <div className="text-darkgreen  bg-lightgreen font-inter flex flex-col gap-[50px]">
      <nav className="  px-[30px] lg:px-[100px] lg:py-[40px]   py-[30px] flex justify-between items-center">
        <div className="text-[20px] md:text-[25px]  font-extrabold uppercase  leading-[1]  ">
          Skincare
        </div>
        <div className="hidden  md:flex md:gap-[30px]  font-normal md:text-[12px] lg:text-[16px] md:tracking-[-0.05em]">
          <p>All Products</p>
          <p>Serum</p>
          <p>Sunscreen</p>
        </div>
        <div className="font-normal text-[20px] tracking-[-0.05em] flex gap-[20px] lg:gap-[30px] ">
          <div>
            <Bag></Bag>
          </div>
          {/* <p>Cart (1)</p> */}
          <div>
            <Heart></Heart>
          </div>
          <div>
            <Account></Account>
          </div>
        </div>
      </nav>
      <div className="md:hidden flex flex-col gap-[50px]">
        <header className="md:hidden flex flex-col gap-[20px]">
          <div className="w-full uppercase font-black text-[75px] tracking-[-0.05em] overflow-hidden ">
            <div className=" flex flex-col gap-0 relative -left-[5px]">
              <p className="leading-[0.9]">Glowwww</p>
              <p className="leading-[0.9]">Naturally</p>
            </div>
          </div>
          <div className="px-[30px] font-normal text-[16px] tracking-[-0.05em]">
            <p className="leading-[1.3]">
              Transform your skincare routine with premium products that
              restore, protect, and enhance your natural glow every day.
            </p>
          </div>
        </header>
        <div className="relative h-fit ">
          <div className="relative h-220  w-screen ">
            <div className="h-fit w-screen overflow-hidden absolute  bottom-[46.5%] ">
              <div className="-mx-[12px] uppercase text-[85px] font-extrabold leading-[0.9]">
                Skincare
              </div>
            </div>
            <div className="absolute top-0 flex flex-col gap-10">
              <img
                className="w-[100%]"
                src="images\eaf98c86e767898b5d5bf09e2afbcbba14d30f51.png"
              />
              <img
                className="w-[100%]"
                src="images\bfa6cb471def1625f335564f2d78bc0748f6b64c.jpg"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex lg:hidden flex-col gap-[256px]">
        <header className="h-fit  relative flex flex-col gap-[20px]">
          <div className="absolute -bottom-0 translate-y-1/2 w-full uppercase font-black text-[135px] tracking-[-0.05em] overflow-hidden ">
            <div className=" flex flex-col gap-0 relative -left-[5px]">
              <p className="leading-[0.76] ">Glowwww</p>
              <p className="leading-[0.76] ">Naturally</p>
            </div>
          </div>
          <div className="px-[40px] flex justify-between gap-16 items-center">
            <div className=" font-normal text-[16px] tracking-[-0.05em]">
              <p className="leading-[1.3]">
                <span className="inline-block w-1/3"></span>
                Transform your skincare routine with premium products that
                restore, protect, and enhance your natural glow every day.
              </p>
            </div>
            <img
              className="w-[100%] max-h-[335px] aspect-square"
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
        <div className=" flex flex-col gap-[30px]  items-center">
          <p className=" text-[24px] font-normal tracking-tighter px-[30px]">
            Experience the ultimate in skincare with our expertly formulated
            products, crafted to nourish, protect, and rejuvenate your skin.
            Combining the finest natural ingredients with advanced science, our
            collection ensures every skin type can achieve a radiant, healthy
            glow. Embrace your beauty with confidence every day. Experience the
            ultimate in skincare with our expertly formulated products, crafted
            to nourish, protect, and rejuvenate your skin.
          </p>
        </div>
      </div>
      <div className="hidden  lg:flex flex-col gap-[256px]">
        <header className="h-fit items-center justify-between flex  px-[100px]">
          {/* <div className="px-[40px] flex justify-between gap-16 items-center"> */}
          <div className=" font-normal text-[18px] tracking-[-0.05em]">
            <p className="leading-[1.3]">
              <span className="inline-block w-1/3"></span>
              Transform your skincare
              <br /> routine with premium products that
              <br /> restore, protect, and enhance your natural <br />
              glow every day.
            </p>
          </div>
          <div className="  uppercase font-bold text-[100px] tracking-[-0.05em] leading-[0.76] ">
            <div className=" ">
              <p>Glow</p>
              <p> Natur-</p>
              <p> ally</p>
            </div>
          </div>
          <img
            className="max-h-[220px] rounded-2xl aspect-square"
            src="images\bfa6cb471def1625f335564f2d78bc0748f6b64c.jpg"
          ></img>
          {/* </div> */}
        </header>
        <div className="relative h-fit ">
          <div className="relative h-120 w-full ">
            <div className=" absolute bottom-0  w-full  overflow-hidden ">
              <div className=" -mx-[66px] uppercase  text-[350px] font-extrabold leading-[0.74]">
                Skincare
              </div>
            </div>
            <div className=" absolute bottom-0 left-1/2 -translate-x-1/2   w-fit  items-center  justify-between">
              <img
                className="rounded-2xl  max-w-[450px]  max-h-[500px]"
                src="images\eaf98c86e767898b5d5bf09e2afbcbba14d30f51.png"
              />
            </div>
            <button className="absolute top-30 left-25 border h-fit rounded-3xl w-fit px-[36px] py-[8px]">
              <p className="text-[16px]">Shop Now</p>
            </button>
          </div>
        </div>
        <div className=" flex flex-col gap-[30px]  items-center">
          <p className=" text-[24px] font-normal tracking-tighter px-[100px]">
            Experience the ultimate in skincare with our expertly formulated
            products, crafted to nourish, protect, and rejuvenate your skin.
            Combining the finest natural ingredients with advanced science, our
            collection ensures every skin type can achieve a radiant, healthy
            glow. Embrace your beauty with confidence every day. Experience the
            ultimate in skincare with our expertly formulated products, crafted
            to nourish, protect, and rejuvenate your skin.
          </p>
        </div>
      </div>

      <article className="flex flex-col gap-[50px]">
        <div className="px-[30px]  flex flex-col gap-[16px] lg:flex-row lg:px-[100px]">
          <div>
            <div className=" flex flex-col gap-[50px] ">
              <button className="border rounded-[100px] w-fit px-[36px] py-[8px] ">
                <p className="text-[20px] font-normal">Why Our Products</p>
              </button>
              <h1 className="font-normal text-[50px] tracking-tighter leading-[1.25]">
                YOUR SKIN DESERVES THE BEST CARE.
              </h1>
              <p className="text-greyish font-normal text-[16px]">
                Discover a curated collection of skincare products designed to
                rejuvenate, protect, and pamper your skin. Explore our rage
                crafted with love backed by science, and inspired by nature.
              </p>
            </div>
            <div className=" flex flex-col gap-[48px]">
              <div className="flex gap-[30px] md:gap-[60px] lg:gap-[24px]">
                <div className="text-[34px] md:text-[60px]">01</div>
                <div className="flex flex-col gap-[8px]">
                  <header className="text-[34px] md:text-[60px] tracking-tighter">
                    Bio Ingredients
                  </header>
                  <p className="text-greyish text-[16px] tracking-wide ">
                    Get naturally beautiful and transform with our bio
                    ingredients creams for healthy, radiant skin.
                  </p>
                </div>
              </div>
              <div className="flex gap-[30px]  md:gap-[60px] lg:gap-[24px]">
                <div className="text-[34px] md:text-[60px]">02</div>
                <div className="flex flex-col gap-[8px]">
                  <header className="text-[34px] md:text-[60px] tracking-tighter">
                    Everything Natural
                  </header>
                  <p className="text-greyish text-[16px] tracking-wide">
                    Pure ingredients for pure skin. The Perfect solution for
                    your skin care needs.
                  </p>
                </div>
              </div>
              <div className="flex gap-[30px] md:gap-[60px] lg:gap-[24px]">
                <div className="text-[34px] md:text-[60px]">03</div>
                <div className="flex flex-col gap-[8px]">
                  <header className="text-[34px] md:text-[60px] tracking-tighter">
                    All Handmade
                  </header>
                  <p className="text-greyish text-[16px] tracking-wide">
                    Made with love and care. Just for you. Give your skin the
                    tender loving care it deserves.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[16px] lg:min-w-1/2">
            <div>
              <img
                className="rounded-2xl"
                src="images\5617a13221609fb0ba6cd721b235ba7e9b1ffa06.png"
              ></img>
            </div>
            <div className="md:text-[20px] text-[16px] tracking-wide flex justify-between p-[30px]">
              <p className="uppercase">Since 2001</p>
              <p className="uppercase">Learn more</p>
            </div>
          </div>
        </div>
        <div className="p-[30px]">
          <div>
            <button className="border rounded-[100px] w-fit px-[36px] py-[8px]">
              <p className="text-[16px] font-normal">Best Selling Products</p>
            </button>
          </div>
          <div>
            <h1 className=" leading-[1.25] tracking-tighter text-[34px] md:text-[50px]">
              Skincare That Brings Out Your Natural Radiance
            </h1>
          </div>
          <div>
            <img></img>
          </div>
          <div>Arrow</div>
        </div>
        <div className="p-[30px]">
          <div>
            <p className="text-[34px] md:text-[50px] tracking-tighter leading-[1.25]">
              Feel Beautiful Inside and Out with Every Product.
            </p>
          </div>
          <div className="flex justify-start flex-wrap gap-[8px]">
            <button className="border rounded-[100px] w-fit px-[36px] py-[8px]">
              <p className="text-[16px] font-normal">New Arrival</p>
            </button>
            <button className="border rounded-[100px] w-fit px-[36px] py-[8px]">
              <p className="text-[16px] font-normal">Acne Fighter</p>
            </button>
            <button className="border rounded-[100px] w-fit px-[36px] py-[8px]">
              <p className="text-[16px] font-normal">Anti Aging</p>
            </button>
            <button className="border rounded-[100px] w-fit px-[36px] py-[8px]">
              <p className="text-[16px] font-normal">Cleansing</p>
            </button>
          </div>
          <div>Carousel</div>
          <div>Buttons</div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse p-[30px] lg:px-[100px] lg:gap-[100px]">
          <div className=" flex flex-col">
            <div>
              <button className="border rounded-[100px] w-fit px-[36px] py-[8px]">
                <p className="text-[16px] font-normal">
                  Frequently Asked Questions
                </p>
              </button>
            </div>
            <div className="text-[34px] md:text-[50px] tracking-tight leading-[1.25]">
              <h1>Answer to All Your Skincare Questions All in One Place</h1>
            </div>
            <div className="h-full relative w-full ">
              <div className="absolute top-0 left-0  h-full w-full flex flex-col gap-[12px] ">
                {accordianData.map((value) => {
                  return (
                    <div className="flex justify-between border rounded-md lg:p-[16px]">
                      <div className="flex flex-col gap-[12px]">
                        <div>{value.question}</div>
                        <div
                          className={`${
                            activeIndex === value.id ? "block" : "hidden"
                          } transition-all duration-200`}
                        >
                          {value.answer}
                        </div>
                      </div>
                      <div
                        className={`${
                          activeIndex === value.id ? "hidden" : "block"
                        } `}
                        onClick={() => setActiveIndex(value.id)}
                      >
                        +
                      </div>
                      <div
                        className={`${
                          activeIndex === value.id ? "block" : "hidden"
                        } `}
                        onClick={() => setActiveIndex(-1)}
                      >
                        -
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="lg:max-w-1/3 ">
            <img
              className=" rounded-2xl"
              src="images\fd338a13c8c498ae831bdf0de86301e74edb43f1.jpg"
            ></img>
          </div>
        </div>
        <footer className="h-fit lg:min-h-[600px] relative text-lightgreen bg-darkgreen p-[30px] pb-[100px]  flex flex-col lg:flex-row lg:justify-between gap-[44px] overflow-hidden">
          <div className="flex flex-col lg:gap-[60px] text-[34px] md:text-[50px] tracking-tight leading-[1.25]">
            <h1 className="lg:h-50">
              Join the Skincare <br />
              Community Now
            </h1>
            <div className="flex justify-between text-[14px] md:text-[20px] tracking-tighter">
              <button>Facebook</button>
              <button>Instagram</button>
              <button>Youtube</button>
            </div>
          </div>

          <div className="flex flex-col lg:gap-[60px]">
            <div className="lg:h-50">
              <p className="text-[14px] md:text-[20px] tracking-tighter">
                Get in Touch
              </p>
              <button className="text-[34px] md:text-[50px] tracking-tight leading-[1.25] ">
                contact.skincare.com
              </button>
            </div>

            <div className="flex justify-between text-[14px] md:text-[20px] tracking-tighter ">
              <button>Terms of Services</button>
              <button>Privacy Policy</button>
              <button>Cookies Policy</button>
            </div>
          </div>

          <div className="absolute -bottom-8 -left-4 md:-bottom-16 lg:-bottom-[140px] uppercase text-[90px] md:text-[170px] lg:text-[420px] font-black tracking-tighter opacity-10 leading-[1]">
            Skincare
          </div>
        </footer>
      </article>
    </div>
  );
}

export default App;
