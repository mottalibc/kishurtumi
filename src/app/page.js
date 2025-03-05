import SelectableCard from "@/components/Card";
import Image from "next/image";

const profiles = [
  {
    name: "মোত্তালিব",
    profile: "/image/profile/1.png",
    content:
      "একজন দক্ষ ওয়েবসাইট এবং ন্যাটিভ অ্যাপ ডেভেলপার, যিনি আধুনিক প্রযুক্তি ব্যবহার করে উন্নতমানের সফটওয়্যার সমাধান তৈরি করেন। তিনি ৭০+ সফল প্রজেক্ট সম্পন্ন করেছেন এবং ক্লায়েন্টদের জন্য উচ্চমানের ডিজিটাল অভিজ্ঞতা নিশ্চিত করেন।",
  },
  {
    name: "আরিফুল ইসলাম",
    profile: "/image/profile/2.webp",
    content:
      "একজন সিনিয়র ফুল-স্ট্যাক ডেভেলপার, যিনি MERN স্ট্যাকের মাধ্যমে স্কেলেবল এবং পারফরম্যান্স-অপটিমাইজড ওয়েব অ্যাপ্লিকেশন তৈরি করেন। তার ৫ বছরের অভিজ্ঞতা এবং ৫০+ সফল প্রজেক্ট রয়েছে।",
  },
  {
    name: "সাদিয়া রহমান",
    profile: "/image/profile/3.jpg",
    content:
      "একজন অভিজ্ঞ UI/UX ডিজাইনার, যিনি ব্যবহারকারী-কেন্দ্রিক ডিজাইন নীতিগুলি অনুসরণ করে 30+ মোবাইল এবং ওয়েব ডিজাইন প্রজেক্ট সম্পন্ন করেছেন। তার ডিজাইন দক্ষতা ব্যবহারকারীদের জন্য নিখুঁত অভিজ্ঞতা তৈরি করে।",
  },
];

export default function Home() {
  return (
    <div className="m-auto flex flex-col justify-center items-center  w-[90%]">
      <div className="text-center my-7">
        <h3 className="text-4xl font-bold">
          <span className="text-blue-400">'কিশোর তুমি'</span> সোস্যাল
          এওয়্যারন্যাস টিম লীড কে করবে?
        </h3>
        <h5 className="text-2xl">ভোট দিয়ে আপনার সমর্থন জানান দিন আমাদের।</h5>
      </div>
      {profiles.map((data, i) => {
        return (
          <SelectableCard
            key={i}
            name={data.name}
            content={data.content}
            profile={data.profile}
          />
        );
      })}
    </div>
  );
}
