import { useState, useRef } from "react";
import { FaTiktok, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

function CarouselAbout() {
  return (
    <>
      <div className="mt-10 p-2 font-inter grid grid-cols-2 gap-2 md:grid-cols-4 md:p-4">
        <h2 className="text-xl h-15 font-semibold text-slate-700 md:col-start-4 md:row-start-2 md:flex">
          <span className="self-center">Welcome to Indonesia</span>
        </h2>
        <div className="h-15 text-lg font-bold text-slate-500 md:col-start-2 md:row-start-2 md:flex">
          <span className="self-end">@abdullah</span>
        </div>

        <div className="grid-card group">
          <div className="bg-[url('src/assets/img/grid/1.jpeg')] grid-card-img"></div>
        </div>
        <div className="grid-card group md:col-start-3">
          <div className="bg-[url('src/assets/img/grid/2.jpeg')] grid-card-img"></div>
        </div>
        <div className="grid-card group">
          <div className="bg-[url('src/assets/img/grid/3.jpeg')] grid-card-img"></div>
        </div>
        <div className="grid-card group">
          <div className="bg-[url('src/assets/img/grid/4.jpeg')] grid-card-img"></div>
        </div>
        <div className="grid-card group">
          <div className="bg-[url('src/assets/img/grid/5.jpeg')] grid-card-img"></div>
        </div>
        <div className="grid-card group md:col-start-2">
          <div className="bg-[url('src/assets/img/grid/6.jpeg')] grid-card-img"></div>
        </div>
        <div className="grid-card group md:col-start-4">
          <div className="bg-[url('src/assets/img/grid/7.jpeg')] grid-card-img"></div>
        </div>
        <div className="grid-card group">
          <div className="bg-[url('src/assets/img/grid/8.jpeg')] grid-card-img"></div>
        </div>
        <div className="grid-card group md:col-start-3">
          <div className="bg-[url('src/assets/img/grid/9.jpeg')] grid-card-img"></div>
        </div>
        <div className="grid-card group md:col-start-3">
          <div className="bg-[url('src/assets/img/grid/10.jpeg')] grid-card-img"></div>
        </div>
      </div>
    </>
  );
}

function CarouselHobi() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <img
            src="https://source.unsplash.com/600x1000"
            alt="google"
            className="rounded-lg w-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://source.unsplash.com/600x1000"
            alt="google"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://source.unsplash.com/600x1000"
            alt="google"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://source.unsplash.com/600x1000"
            alt="google"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://source.unsplash.com/600x1000"
            alt="google"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://source.unsplash.com/600x1000"
            alt="google"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://source.unsplash.com/600x1000"
            alt="google"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://source.unsplash.com/600x1000"
            alt="google"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://source.unsplash.com/600x1000"
            alt="google"
            className="rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

function Footer() {
  return (
    <>
      <div className="flex flex-wrap justify-betwee">
        <div className="w-80 mb-12 md:w-1/4  p-5">
          <h6 className="font-semibold text-xl text-white mb-5">Hubungi Kami</h6>
          <div className="font-semibold text-sm text-white mb-5 hover:text-primary">
            <p>abdullahhusairin5@gmail.com</p>
            <p>Jalan arzimar 2 no.95</p>
            <p>Bogor</p>
          </div>
        </div>
        <div className="w-80  mb-12 md:w-1/4  p-5">
          <h6 className="font-semibold text-xl text-white mb-5">Social</h6>
          <div className="font-semibold text-xl text-white mb-5">
            <a
              href="https://www.youtube.com/@AbdulFilm"
              className="block text-base hover:text-primary mb-3"
            >
              <li>Youtube</li>
            </a>
            <a
              href="https://www.instagram.com/abdulfilm_/"
              className="block text-base hover:text-primary mb-3"
            >
              <li>Instagram</li>
            </a>
            <a
              href="https://www.tiktok.com/@abdulfilm_?is_from_webapp=1&sender_device=pc"
              className="block text-base hover:text-primary mb-3"
            >
              <li>Tiktok</li>
            </a>
            <a
              href="#facebook"
              className="block text-base hover:text-primary mb-3"
            >
              <li>Facebook</li>
            </a>
            <a
              href="#twitter"
              className="inline-block text-base hover:text-primary mb-3"
            >
              <li>Twitter</li>
            </a>
          </div>
        </div>
        <div className="w-80  mb-12 md:w-1/4  p-5">
          <h6 className="font-semibold text-xl text-white mb-5">Sitemaps</h6>
          <div className="font-semibold text-xl text-white mb-5">
            <a
              href="https://www.youtube.com/@AbdulFilm"
              className="block text-base hover:text-primary mb-3"
            >
              <li>Beranda</li>
            </a>
            <a
              href="https://www.instagram.com/abdulfilm_/"
              className="block text-base hover:text-primary mb-3"
            >
              <li>Tentang Kami</li>
            </a>
            <a
              href="https://www.tiktok.com/@abdulfilm_?is_from_webapp=1&sender_device=pc"
              className="block text-base hover:text-primary mb-3"
            >
              <li>Project</li>
            </a>
            <a
              href="#facebook"
              className="block text-base hover:text-primary mb-3"
            >
              <li>Hobi</li>
            </a>
            <a
              href="#twitter"
              className="inline-block text-base hover:text-primary mb-3"
            >
              <li>Kontak</li>
            </a>
          </div>
        </div>
        <div className="w-80  mb-12 md:w-1/4  p-5">
          <h6 className="font-semibold text-xl text-white mb-5">Elements</h6>
          <div className="font-semibold text-xl text-white mb-5">
            <span className="block text-base hover:text-primary mb-3">HTML</span>
            <span className="block text-base hover:text-primary mb-3">TailwindCSS</span>
            <span className="block text-base hover:text-primary mb-3">React JS</span>
            <span className="block text-base hover:text-primary mb-3">Library</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default function home() {
  const [hamburger, setHamburger] = useState(false);

  return (
    <>
      {/* Header Section Start */}
      <header className="fixed flex bg-white w-full z-10">
        <nav className="w-full justify-between">
          <div className="container flex justify-between items-center py-6 px-6">
            <div>
              <h1 className="text-2xl font-bold text-primary">A H</h1>
            </div>

            <div
              className="cursor-pointer flex items-center px-4 lg:hidden"
              onClick={() => setHamburger(hamburger ? false : true)}
            >
              {hamburger ? (
                <button
                  id="hamburger"
                  name="hamburger"
                  type="button"
                >
                  <span className="hamburger-line transition duration-300 ease-in-out rotate-45 origin-top-left"></span>
                  <span className="hamburger-line transition duration-300 ease-in-out scale-0"></span>
                  <span className="hamburger-line transition duration-300 ease-in-out -rotate-45 origin-bottom-left"></span>
                </button>
              ) : (
                <button
                  id="hamburger"
                  name="hamburger"
                  type="button"
                >
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                </button>
              )}
            </div>

            <div className="hidden lg:block">
              <div className="uppercase text-primary flex">
                <a
                  href="#home"
                  className="px-5 py-3"
                >
                  Beranda
                </a>

                <a
                  href="#about"
                  className=" px-5 py-3"
                >
                  Tentang Saya
                </a>

                <a
                  href="#project"
                  className="px-5 py-3"
                >
                  My Project
                </a>

                <a
                  href="#hobi"
                  className="px-5 py-3"
                >
                  Hobi
                </a>

                <a
                  href="#contact"
                  className="px-5 py-3"
                >
                  Kontak
                </a>
              </div>
            </div>
          </div>
          <div className={`${hamburger ? "block" : "hidden"} lg:hidden opacity-100 `}>
            <ul className="uppercase text-primary">
              <li className="px-5 py-3 border-b-2 border-dark">
                <a href="#home">Beranda</a>
              </li>
              <li className="px-5 py-3 border-b-2 border-dark">
                <a href="#about">Tentang Saya</a>
              </li>
              <li className="px-5 py-3 border-b-2 border-dark">
                <a href="#project">My Project</a>
              </li>
              <li className="px-5 py-3 border-b-2 border-dark">
                <a href="#hobi">Hobi</a>
              </li>
              <li className="px-5 py-3 border-b-2 border-dark">
                <a href="#contact">Kontak</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/* Header Section End */}

      {/* Hero Section Start */}
      <section
        id="home"
        className="pt-32 md:h-[80%] sm:h-[60%]"
      >
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">
                Hallo Semua 👋, saya
                <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">
                  Abdullah Husairin
                </span>
              </h1>
              <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">
                Web Developer & <span className="text-dark">Content Creator</span>
              </h2>
              <p className="font-sm text-secondary mb-10 leading-relaxed">
                Belajarlah tanpa melihat jam hingga belanja tanpa melihat harga
              </p>
              <a
                href="#contact"
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
              >
                Hubungi Saya
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2 ">
              <div className="lg:right-0">
                <img
                  src="src/assets/img/profil.png"
                  alt="abdul"
                  className="hover:rotate-6 hover:scale-110 transition"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* About Section Start */}
      <section
        id="about"
        className="pt-32 pb-10"
      >
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-primary text-lg mb-3">Tentang Saya</h4>
              <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">
                Mari belajar bersamaku
              </h2>
              <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate enim asperiores
                voluptatibus repellendus magni ducimus esse.
              </p>
            </div>
            <div className="w-full px-6 lg:w-1/2">
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">
                Mari berteman
              </h3>
              <p className="font-medium text-base text-secondary mb-6 lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nesciunt dignissimos
                quae quidem quos asperiores dolorum nobis quis.
              </p>
              <div className="flex items-center">
                <a
                  href="https://www.tiktok.com/@abdulfilm_"
                  target="_blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <FaTiktok />
                </a>
                <a
                  href="https://www.instagram.com/abdulfilm_/"
                  target="_blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.youtube.com/@AbdulFilm"
                  target="_blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.youtube.com/@AbdulFilm"
                  target="_blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.youtube.com/@AbdulFilm"
                  target="_blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <FaSquareXTwitter />
                </a>
              </div>
            </div>
          </div>
          <div className="block px-4 h-full w-full">
            <CarouselAbout />
          </div>
        </div>
      </section>
      {/* About Section End */}

      {/* Project Section Start */}
      <section
        id="project"
        className="pt-32 bg-slate-100"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">My Project</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Project Terkini
              </h2>
              <p className="font-medium text-md text-secondary md:text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat laudantium maiores
                odit quia ullam error?Lorem ipsum
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <img
                  src="https://source.unsplash.com/360x200?keyboard"
                  alt="progamming"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                    >
                      Keyboard
                    </a>
                  </h3>
                  <p className="font-medium text-base text-secondary mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.lorem dqwidhoqwi
                    ihdoihdw
                  </p>
                  <a
                    href="#"
                    className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <img
                  src="https://source.unsplash.com/360x200?pc"
                  alt="progamming"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                    >
                      PC untuk progamming
                    </a>
                  </h3>
                  <p className="font-medium text-base text-secondary mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.lorem dqwidhoqwi
                    ihdoihdw
                  </p>
                  <a
                    href="#"
                    className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <img
                  src="https://source.unsplash.com/360x200?progamming"
                  alt="progamming"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                    >
                      Tips belajar progamming
                    </a>
                  </h3>
                  <p className="font-medium text-base text-secondary mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.lorem dqwidhoqwi
                    ihdoihdw
                  </p>
                  <a
                    href="#"
                    className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Section End */}

      {/* Hobby Section Start */}
      <section
        id="hobi"
        className="pt-32 pb-32 bg-slate-700"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">Hobi</h4>
              <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Konten Kreator
              </h2>
              <p className="font-medium text-md text-secondary md:text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
            <CarouselHobi />
          </div>
        </div>
      </section>
      {/* Hobby Section End */}

      {/* Contact Section Start */}
      <section
        id="contact"
        className="pt-32 pb-32"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">Kontak</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Hubungi Kami
              </h2>
              <p className="font-medium text-md text-secondary md:text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat laudantium maiores
                odit quia ullam error?Lorem
              </p>
            </div>
          </div>
          <form>
            <div className="w-full lg:w-2/3 lg:mx-auto">
              <div className="w-full px-4 mb-8">
                <label
                  form="name"
                  className="text-base text-primary font-bold after:content-['*'] after:text-red-600 after:ml-0.5"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  form="email"
                  className="text-base text-primary font-bold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary  invalid:text-red-600 invalid:focus:ring-red-700 peer"
                />
                <p className="m-1 text-sm text-red-500 invisible peer-invalid:visible">
                  Email tidak valid
                </p>
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  form="message"
                  className="text-base text-primary font-bold"
                >
                  Pesan
                </label>
                <textarea
                  type="email"
                  id="email"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
                ></textarea>
              </div>
              <div className="w-full px-4">
                <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">
                  Kirim
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* Contact Section End */}

      <section className="bg-slate-700 pt-32 pb-5">
        <div className="container">
          <div className="w-full px-4">
            <Footer />
          </div>
        </div>
        <div className="w-full h-0.5 bg-slate-100"></div>
        <div className="flex justify-center mt-3">
          <p className="block text-base text-white hover:text-primary">
            © 2023 Abdullah Husairin | All Rights Reserved
          </p>
        </div>
      </section>
    </>
  );
}
