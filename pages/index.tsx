import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="px-8 py-12">
      <img className="h-10" src="vercel.svg" alt="first picture" />
      <img
        className="mt-6 rounded-lg shadow-xl"
        src="barrel.jpg"
        alt="second picture"
      />
      <h1 className="mt-6 text-2xl font-bold text-gray-900">
        You can work from anywhere.{" "}
        <span className="text-indigo-500">Take advantage of it.</span>
      </h1>
      <p className="mt-2 text-gray-600">
        Workcation helps you find work-friendly rentals in beautiful locations
        so you can enjoy some nice weather even when you're not on vacation.
      </p>
      <div className="mt-4">
        <a
          className="inline-block px-5 py-3 rounded-lg shadow-lg uppercase bg-indigo-500 text-white tracking-wider font-semibold text-sm"
          href="#"
        >
          Book your escape
        </a>
      </div>
    </div>
  );
};

export default Home;
