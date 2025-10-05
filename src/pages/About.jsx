import React, { useState } from "react";

const faqs = [
  {
    q: "How can I register?",
    a: (
      <>
        You can register on our website with your <strong>ETH email address</strong>. <br />
        If you are a recent graduate or don’t have an ETH address, send an email to the PolyHACK project manager at{" "}
        <a href="mailto:miguel.castellano@telejob.ch" className="underline">
          miguel.castellano@telejob.ch
        </a>. <br />
        Registration opens on <strong>13 September</strong> and closes on <strong>25 October at midnight</strong>.
      </>
    ),
  },
  {
    q: "How much does it cost?",
    a: <>Nothing. PolyHACK is completely free. You only need to register.</>,
  },
  {
    q: "Who can register?",
    a: <>All Bachelor, Master, and Ph.D. students from ETH — as well as PostDocs — can register (except for active TeleJob members).</>,
  },
  {
    q: "What do I need to participate in the event?",
    a: (
      <>
        You’ll need a laptop and a reliable internet connection. If you're participating on-site, internet is provided. <br />
        Bonus: sleep well beforehand, bring coffee (but don’t overdo it).
      </>
    ),
  },
  {
    q: "Can I participate without a team?",
    a: (
      <>
        Yes — you don’t need to come with a team. There will be a <strong>team-matching phase</strong> to help you find teammates. <br />
        If you’re still teamless after that, we’ll help you out.
      </>
    ),
  },
  {
    q: "What is the team size?",
    a: <>Each team must consist of exactly <strong>4 participants</strong>.</>,
  },
  {
    q: "Where and when will the event take place?",
    a: (
      <>
        The event will be <strong>hybrid</strong>: physically at the SPH (Student Project House) and virtually (via Slack). <br />
        Team-matching runs from 4 October to 25 October. <br />
        The hackathon itself starts on <strong>Saturday, 30 October</strong>, at 12:00 and ends 24 h later (Sunday, 31 October) at 12:00. <br />
        On Saturday morning, there will be introductory keynote sessions starting around 09:30.
      </>
    ),
  },
  {
    q: "My background is not in climate science. Can I still participate?",
    a: <>Absolutely. No prior domain knowledge is required. You’ll only need some programming skills, creativity, and motivation.</>,
  },
  {
    q: "How do I know if my registration was successful?",
    a: (
      <>
        You’ll receive a confirmation email, inviting you to log in to the site and register for a challenge. Don’t worry — everything will be explained further.
      </>
    ),
  },
  {
    q: "Do I have to stay awake all night?",
    a: (
      <>
        Depends on you. For virtual participants, you can take naps as needed. For on-site participants, we’ll try to provide “nap spaces.” <br />
        Plan ahead: rest well before the event and pace yourself.
      </>
    ),
  },
];

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">About PolyHACK</h1>
      <p className="text-lg leading-relaxed text-gray-300 mb-12 text-center">
        PolyHACK 2026 is a 24-hour hackathon bringing together brilliant minds to collaborate,
        innovate, and push the boundaries of technology. Organised by{" "}
        <span className="font-semibold">TeleJob</span>, the event empowers participants to
        build impactful solutions, learn from experts, and connect with a supportive community.
      </p>

      <div className="mt-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="border border-gray-700 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-left hover:bg-gray-800 focus:outline-none"
                onClick={() => toggle(i)}
              >
                <span className="text-lg font-medium">{q}</span>
                <span className={`transform transition-transform ${openIndex === i ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === i ? "max-h-96 px-4 pb-4" : "max-h-0 px-4"
                }`}
              >
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PAST EDITIONS SECTION */}
      <div className="mt-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">Past Editions</h2>

        {/* 2021 Videos */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4 text-center">2021</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://www.youtube.com/embed/NJ6WWR-XCXc",
              "https://www.youtube.com/embed/t9sKuRi9YCQ",
              "https://www.youtube.com/embed/hHe04ydd9Co",
            ].map((src, i) => (
              <div key={i} className="aspect-video">
                <iframe
                  src={src}
                  title={`PolyHACK 2021 Video ${i + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-lg"
                ></iframe>
              </div>
            ))}
          </div>
        </div>

        {/* 2020 Photos */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4 text-center">2020</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "/2020_1.jpg",
              "/2020_2.jpg",
              "/2020_3.jpg",
              "/2020_4.jpeg",
              "/2020_5.jpeg",
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`2020 PolyHACK ${i + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90"
              />
            ))}
          </div>
        </div>

        {/* 2019 Photos */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-center">2019</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "/2019_1.jpg",
              "/2019_2.jpg",
              "/2019_3.jpg",
              "/2019_4.jpg",
              "/2019_5.jpg",
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`2019 PolyHACK ${i + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90"
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
