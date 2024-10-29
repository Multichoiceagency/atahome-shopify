'use client';

import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();

  return (
    <section className="relative bg-gray-100">
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-xl font-light text-gray-500 mb-2">For Your Dream Home</h2>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Get The Best And Trendy <br /> <span className="text-amber-600">Furniture</span> for your home
          </h1>
          <p className="text-gray-600 mb-6">
            Enjoy our exclusive selection of furniture for your home. They blend style with functionality, creating beautiful spaces.
          </p>
          <button
            onClick={() => router.push('/shop')}
            className="px-8 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700"
          >
            Shop Now
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img src="/images/hero-image.jpg" alt="Furniture Hero" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
