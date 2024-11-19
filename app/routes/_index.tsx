import type { MetaFunction } from "@remix-run/node";
import burnIn from "assets/burnIn.png";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { BlurIn } from "~/components/BlurIn";
import { FeatureCell } from "~/components/FeatureCell";
import homeRedesign from "assets/screenshots/homeRedesign.svg";
import marketplace from "assets/screenshots/marketplace.svg";
import handleEvents from "assets/screenshots/handleEvents.svg";
import bulletproof from "assets/screenshots/bulletproof.svg";
import bubble from "assets/screenshots/bubble.svg";
import prokur from "assets/screenshots/prokur.svg";
import jouzu from "assets/screenshots/jouzu.svg";
import regauto from "assets/screenshots/regauto.svg";
import journez from "assets/screenshots/journez.svg";
import adventureIcon from "assets/adventureIcon.svg";
import arrowRightIcon from "assets/arrowRightIcon.svg";
import { Container } from "~/components/Container";
import compass from "assets/compass.svg";
import { posthog } from "posthog-js";

export const meta: MetaFunction = () => {
  return [
    { title: "Matt Vaccaro" },
    { name: "description", content: "It's lovely to meet you" },
  ];
};

export default function Index() {
  const activityRef = useRef(null);
  const activityIsInView = useInView(activityRef, { once: true });

  useEffect(() => {
    if (activityIsInView) {
      console.log("running activityIsInView catpure call");
      posthog.capture("depth_points", {
        property: {
          point: "activityIsInView",
        },
      });
    }
  }, [activityIsInView]);

  const topBurnRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: topBurnRef,
    offset: ["start start", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], [50, 3000]);

  const bottomBurnRef = useRef(null);
  const { scrollYProgress: scrollYProgressBottom } = useScroll({
    target: bottomBurnRef,
    offset: ["start end", "end end"],
  });

  const bottomHeight = useTransform(scrollYProgressBottom, [0, 1], [3000, 50]);

  const [direction, setDirection] = useState<number>(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < direction) {
          return prevCount + 1;
        }

        if (prevCount > direction) {
          return prevCount - 1;
        } else {
          return prevCount;
        }
      });
    }, 20);

    return () => clearInterval(interval);
  }, [direction]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newRandomNum = Math.floor(Math.random() * 361) - 180;
      setDirection(newRandomNum);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const rotate = useTransform(() => count);

  return (
    <div>
      <section
        ref={topBurnRef}
        className="flex flex-col h-screen relative overflow-hidden"
      >
        <nav className="py-8">
          <Container className="flex justify-center sm:justify-between w-full">
            <div className="w-0 sm:w-1/5" />
            <div>
              <div className="flex gap-2 border-[1px] border-opacity-30 rounded-full border-brand-orange py-1 px-2">
                <img
                  src={adventureIcon}
                  alt="Two mountain peaks that are outlined in orange"
                />
                <p className="text-brand-orange whitespace-nowrap">
                  Seeking new adventure!
                </p>
              </div>
            </div>
            <a
              className="text-right hidden sm:block sm:w-1/5 "
              href="https://www.linkedin.com/in/matthew-vaccaro/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </Container>
        </nav>

        <p className="text-center opacity-60 md:mt-32"> Matt Vaccaro </p>
        <div className="mx-auto relative w-full">
          <motion.div
            style={{
              background: `radial-gradient(circle,
                 #e5cd22 4%,
                 #e5cd22 12.25%,
                 #dc8d08 31.25%,
                 #af1204 50%,
                 #000 60%)`,
            }}
            initial={{ x: `-50%` }}
            animate={{ x: `50%` }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
            className="absolute w-full h-full"
          />
          <h1 className="text-[42px] sm:text-[56px] text-center font-bold mix-blend-screen w-full bg-white">
            Product Engineer
          </h1>
        </div>
        <Container className="flex flex-col gap-4 mt-1 items-center">
          <h4 className="text-center opacity-60">
            Full Stack Engineer with rich product knowledge
          </h4>

          <h4 className="text-center max-w-[600px] font-semibold">
            My focus is driving meaningful impacts by focusing on value,
            communication & data validation. I thrive on small teams that move
            fast & trust each other
          </h4>
          <a
            href="https://calendly.com/matthewvaccaro/1-1-with-matt-vaccaro?month=2024-11"
            target="_blank"
            rel="noreferrer"
            className="mx-auto mt-4"
          >
            <button className="group flex gap-6 px-6 py-3 rounded-md bg-brand-orange text-white border-[1px] border-brand-orange hover:bg-white  transition-all duration-300">
              <p className="group-hover:translate-x-1/4 group-hover:text-brand-orange transition-all duration-300">
                Schedule Chat
              </p>
              <img src={arrowRightIcon} alt="A white arrow pointing right" />
            </button>
          </a>
        </Container>
        <motion.img
          style={{ height, width: "100%" }}
          src={burnIn}
          className="absolute bottom-0 left-0"
          alt="A mixture of colors that looks like the screen has pixels that are burned out"
        />
      </section>
      <div className=" bg-black h-[150vh] sm:h-screen mt-[-1px] px-10 pt-20 flex justify-center">
        <div className="max-w-[600px] pt-9">
          <BlurIn>
            In the summer of 2015 there was once a timid dreamer who dreamt of
            being a part of the tech industry. By a stroke of luck or fate he
            landed his first role. // // “We’ll give you enough rope to be
            creative and enough to hang yourself” said my manager. Thus my
            introduction to tech started as a trial-by-fire, a recurring theme I
            not only embraced but thrived in. // // After a decade, dozens of
            projects, a failed start-up, and loads of new friends made, it still
            feels like a dream. // // My focus has expanded far beyond myself; I
            want to be a bridge and a beacon to illuminate the path for others
            to flourish.
          </BlurIn>
        </div>
      </div>

      <div className="bg-black w-full px-4">
        <Container className="text-white text-center mb-12">
          <h2 ref={activityRef}> Activity </h2>
          <p className="opacity-70">
            I{"'"}ve been very engaged these last three years
          </p>
        </Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 max-w-[933px] mx-auto pb-16">
          <div className="h-[487px] order-1 lg:order-1 overflow-hidden rounded-lg bg-gradient-to-t from-[#ffffff50] to-[#ffffff90]  p-[1px] ">
            <FeatureCell
              title="Home Redesigned"
              place="Brigit"
              img={homeRedesign}
              color="#24956A"
              details="Increased activation rate by 3%, reduced view from 1500+ to 184 lines, and cut loading speed by 19%"
              alt="UI that shows the new home screen that was created for Brigit"
            />
          </div>
          <div className="h-[487px] order-2 lg:order-2 overflow-hidden rounded-lg bg-gradient-to-t from-[#ffffff50] to-[#ffffff90]  p-[1px] ">
            <FeatureCell
              title="Marketplace Redesigned"
              place="Brigit"
              img={marketplace}
              color="#24956A"
              details="Increased user conversion by ~19%, scroll depth by ~50%  and setup foundation for additional features"
              alt="UI that shows the new marketplace screen that was created for Brigit"
            />
          </div>
          <div className="h-[487px] order-3 lg:order-3 md:order-4 overflow-hidden rounded-lg bg-gradient-to-t from-[#ffffff50] to-[#ffffff90]  p-[1px] ">
            <FeatureCell
              title="Handle 15x more events"
              place="Bulletproof Inbox"
              img={handleEvents}
              color="#45C1FF"
              details="Increased handling 1 email event per second (Gmail limit) to 15 per second by using Redis & a diffing algorithm  "
              alt="UI that shows a number of different icons to help explain the types of events come in and how often"
            />
          </div>
          <div className="md:col-span-2 order-4 lg:order-4 md:order-3 h-[487px] overflow-hidden rounded-lg bg-gradient-to-t from-[#ffffff50] to-[#ffffff90] p-[1px]">
            <FeatureCell
              title="Wrote Bulletproof Inbox V1 "
              place="Bulletproof Inbox"
              img={bulletproof}
              color="#45C1FF"
              details="A simple frontend to connect unlimited emails and manage a safe sender list. The complexity exists on the backend, which integrates with Outlook and Gmail to organize emails based on your sender list."
              alt="UI that shows a number of different icons to help explain the types of events come in and how often"
            />
          </div>
          <div className="order-5 flex flex-col gap-4">
            <div className="h-1/2 overflow-hidden rounded-lg bg-gradient-to-t from-[#ffffff50] to-[#ffffff90] p-[1px]">
              <FeatureCell
                title="Notification Bubble"
                place="Brigit"
                color="#24956A"
                img={bubble}
                details="Increased user conversion by ~40%"
                alt="UI that shows a number of different icons to help explain the types of events come in and how often"
              />
            </div>
            <div className="h-1/2 overflow-hidden rounded-lg bg-gradient-to-t from-[#ffffff50] to-[#ffffff90] p-[1px]">
              <FeatureCell
                title="Reduced ship time by ~4 months"
                place="Prokur"
                color="#2584C6"
                details="Rescoped the focus of the alpha to remove bloat & focus on high-quality features required for a strong MVP."
              />
            </div>
          </div>
          <div className="h-[487px] flex flex-col gap-4 order-6 lg:order-6 md:order-7">
            <div className="h-1/2 overflow-hidden rounded-lg bg-gradient-to-t from-[#ffffff50] to-[#ffffff90] p-[1px]">
              <FeatureCell
                title="Seen-on-Scroll Handler"
                place="Brigit"
                color="#24956A"
                details="Functionality to measure what the user has seen, skipped over, scroll depth and more. Handling 3+ million a day per week. "
              />
            </div>
            <div className="h-1/2 overflow-hidden rounded-lg bg-gradient-to-t from-[#ffffff50] to-[#ffffff90] p-[1px]">
              <FeatureCell
                title="Marketplace Data Schema "
                place="Prokur"
                color="#2584C6"
                details="Extended the data model to allow for a bi-directional marketplace for the Business & vendors"
              />
            </div>
          </div>
          <div className="md:col-span-2 order-7 lg:order-7 md:order-6 h-[487px] overflow-hidden rounded-lg bg-gradient-to-t from-[#ffffff50] to-[#ffffff90] p-[1px]">
            <FeatureCell
              title="Wrote Prokur Platform V1"
              place="Prokur"
              img={prokur}
              color="#2584C6"
              details="A simple frontend to connect unlimited emails and manage a safe sender list. The complexity exists on the backend, which integrates with Outlook and Gmail to organize emails based on your sender list."
              alt="UI that shows a number of different icons to help explain the types of events come in and how often"
            />
          </div>
          <div className="h-[487px] order-8 lg:order-8 overflow-hidden rounded-lg bg-gradient-to-t from-[#ffffff50] to-[#ffffff90]  p-[1px] ">
            <FeatureCell
              title="Wrote V1"
              place="Registration Automation"
              img={regauto}
              color="#488D23"
              details="Uses OCR to scan health insurance & licenses & automates the process of getting setup for the Dr’s office"
              alt="UI that shows the new home screen that was created for Brigit"
            />
          </div>
          <div className="h-[487px] order-9 lg:order-9 overflow-hidden rounded-lg bg-gradient-to-t from-[#ffffff50] to-[#ffffff90]  p-[1px] ">
            <FeatureCell
              title="Wrote V1"
              place="Jouzu"
              img={jouzu}
              color="#F3D539"
              details="Live community stat tracking for youth basketball thats optimized for offline & poor (gym quality) internet connections"
              alt="UI that shows the new home screen that was created for Brigit"
            />
          </div>
          <div className="h-[487px] order-10 lg:order-10 overflow-hidden rounded-lg bg-gradient-to-t from-[#ffffff50] to-[#ffffff90]  p-[1px] ">
            <FeatureCell
              title="Wrote V1"
              place="Journez"
              img={journez}
              color="#ED7373"
              details="Roadtrip planning application that focuses on story telling"
              alt="UI that shows the new home screen that was created for Brigit"
            />
          </div>
        </div>
      </div>

      <div ref={bottomBurnRef} className="flex flex-col h-screen relative ">
        <motion.img
          style={{ height: bottomHeight, width: "100%" }}
          src={burnIn}
          className="rotate-180 mt-[-4px]"
          alt="A mixture of colors that looks like the screen has pixels that are burned out"
        />
      </div>
      <Container className="overflow-hidden">
        <h1 className="overflow-hidden w-full text-center">
          {count}
          <sup>º</sup>
        </h1>
        <motion.div
          style={{ rotate }}
          className="max-w-[375px] md:max-w-[432px]  mx-auto rounded-full"
        >
          <img
            src={compass}
            alt="A compass that moves left and right to illustrate the change of direction companies take"
          />
        </motion.div>
        <BlurIn tint="light">
          Being a Product Engineer means I understand the direction the ship is
          going and where the icebergs rest. This vision allows me to help my
          team understand the problem space with much more clarity and move with
          tailwinds. Constantly keeping focus on user value and needs.
        </BlurIn>
        <div className="mt-8 flex justify-center mb-[180px]">
          <a
            href="https://calendly.com/matthewvaccaro/1-1-with-matt-vaccaro?month=2024-11"
            target="_blank"
            rel="noreferrer"
          >
            <button className="group flex gap-6 px-6 py-3 rounded-md bg-brand-orange text-white border-[1px] border-brand-orange hover:bg-white  transition-all duration-300">
              <p className="group-hover:translate-x-1/4 group-hover:text-brand-orange transition-all duration-300">
                Schedule Chat
              </p>
              <img src={arrowRightIcon} alt="A white arrow pointing right" />
            </button>
          </a>
        </div>
      </Container>
      <footer>
        <div className="w-full h-[2px] bg-black opacity-10 mb-6" />
        <Container className="flex flex-col md:flex-row gap-3 justify-center items-center sm:justify-between w-full mb-6">
          <div className="text-center sm:text-left">
            <p className="note"> Made in Texas in 2024 </p>
          </div>
          <div>
            <div className="flex gap-2 border-[1px] border-opacity-30 rounded-full border-brand-orange py-1 px-2">
              <img
                src={adventureIcon}
                alt="Two mountain peaks that are outlined in orange"
              />
              <p className="text-brand-orange whitespace-nowrap">
                Seeking new adventure!
              </p>
            </div>
          </div>
          <a
            className="text-center sm:text-right "
            href="https://www.linkedin.com/in/matthew-vaccaro/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </Container>
      </footer>
    </div>
  );
}
