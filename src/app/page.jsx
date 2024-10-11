import Link from "next/link";
import Image from "next/image";

import HeroImage from "./img/hero-bg.svg";
import LigntImage from "./img/light-image.jpg";
import icon_1 from "./img/icon-1.svg";
import image_1 from "./img/image-1.jpg";
import image_2 from "./img/image-2.jpg";
import image_3 from "./img/image-3.jpg";
import border from "./img/border.svg";

export default function Home() {
    return (
        <main>

            <section className="relative">
                <div className="relative lg:absolute top-0 left-[15px] lg:left-0 w-full h-full z-0">
                    <Image className="h-full w-full lg:w-auto lg:ms-auto" src={HeroImage} alt="hero image" />
                </div>
                <div className="container pb-20 md:py-20 lg:min-h-screen items-center flex z-10 relative">
                    <div className="text-[#505F98] text-lg max-w-full lg:max-w-[540px]">
                        <h1 className="text-[#091133] font-medium text-[40px]/normal lg:text-[50px]/normal mb-8">Introduce Your Product Quickly & Effectively</h1>
                        <p className="mb-6">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                        <div className="flex gap-3 md:gap-8 flex-wrap mt-10 md:mt-[70px]">
                            <Link className="text-white font-medium bg-[#111B47] border-2 border-[#111B47] rounded-sm w-full md:w-48 inline-block text-center px-[5px] py-[2px] hover:text-[#111B47] hover:bg-transparent transition-all" href="#">Purchase UI Kit</Link>
                            <Link className="text-[#091133] font-medium rounded-sm w-full md:w-48 inline-block text-center px-[5px] py-[2px] hover:text-white hover:bg-[#091133] transition-all border-2 border-[#091133]" href="#">Learn More</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 lg:py-28">
                <div className="container">
                    <div className="grid lg:grid-cols-2 items-center gap-10">
                        <div className="lg:order-1">
                            <Image className="mx-auto" src={LigntImage} alt="light image" />
                        </div>
                        <div className="lg:order-0">
                            <h2 className="text-[#091133] font-medium text-3xl/normal lg:text-4xl/normal mb-4">Light, Fast & Powerful</h2>
                            <p className="mb-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.</p>
                            <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                            <div className="grid md:grid-cols-2 gap-10 mt-[80px]">
                                <div className="text-[#5D6970]">
                                    <Image src={icon_1} className="w-9 h-9 mb-4" alt="icon" />
                                    <h4 className="text-[#091133] font-medium mb-1 text-xl">Title Goes Here</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                                </div>
                                <div className="text-[#5D6970]">
                                    <Image src={icon_1} className="w-9 h-9 mb-4" alt="icon" />
                                    <h4 className="text-[#091133] font-medium mb-1 text-xl">Title Goes Here</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-28">
                <div className="container">
                    <div className="grid md:grid-cols-2 items-center gap-10">
                        <div>
                            <Image className="mx-auto" src={image_1} alt="light image" />
                        </div>
                        <div>
                            <h2 className="text-[#091133] font-medium text-2xl/normal lg:text-4xl/normal mb-4">Light, Fast & Powerful</h2>
                            <p className="mb-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.</p>
                            <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-28">
                <div className="container">
                    <div className="grid md:grid-cols-2 items-center gap-10">
                        <div className="md:order-1">
                            <Image className="mx-auto" src={image_2} alt="light image" />
                        </div>
                        <div className="md:order-0">
                            <h2 className="text-[#091133] font-medium text-2xl/normal lg:text-4xl/normal mb-4">Light, Fast & Powerful</h2>
                            <p className="mb-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.</p>
                            <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-28">
                <div className="container">
                    <div className="grid md:grid-cols-2 items-center gap-10">
                        <div>
                            <Image className="mx-auto" src={image_3} alt="light image" />
                        </div>
                        <div>
                            <h2 className="text-[#091133] font-medium text-2xl/normal lg:text-4xl/normal mb-4">Light, Fast & Powerful</h2>
                            <p className="mb-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.</p>
                            <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#F3F5FF] py-20 md:py-44 relative">
                <Image src={border} alt="border" className="absolute w-full top-0 left-0" />
                <div className="container relative z-20">
                    <div className="max-w-[600px] mx-auto text-center">
                        <h2 className="text-[#091133] font-medium text-2xl/normal lg:text-4xl/normal mb-3">A Price To Suit Everyone</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                        <h3 className="text-[#222F65] font-medium text-5xl/normal mt-9">$40</h3>
                        <p className="text-[#37447E] mb-14">UI Design Kit</p>
                        <p className="mb-2">See, One price. Simple.</p>
                        <Link className="text-white font-medium bg-[#111B47] border-2 border-[#111B47] rounded-sm w-48 inline-block text-center px-[5px] py-[2px] hover:text-[#111B47] hover:bg-transparent transition-all" href="#">Purchase Now</Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
