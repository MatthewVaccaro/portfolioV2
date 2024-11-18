import { motion, useScroll, useTransform } from "motion/react";
import { HTMLAttributes, useEffect, useRef, useState } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  tint?: "dark" | "light";
}

export const BlurIn = ({ children, tint = "dark" }: Props) => {
  if (typeof children !== "string") {
    throw Error("Burn in only accepts string values, no dom elements");
  }

  const ref = useRef(null);
  const length = children.split(" ").length;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "end end"],
  });
  const [index, setIndex] = useState<number>(-1);
  const progress = useTransform(scrollYProgress, [0, 1], [0, length]);

  useEffect(() => {
    console.log(index);
    const unsubscribe = progress.onChange((e) => setIndex(Math.round(e)));
    return () => unsubscribe();
  }, [progress, index]);

  const item = {
    hidden: { opacity: 0.2, filter: "blur(10px)" },
    show: { opacity: 1, filter: "blur(0px)" },
  };

  return (
    <motion.p
      ref={ref}
      className={`${
        tint === "dark" ? "text-white" : "text-dark"
      } text-2xl leading-9`}
    >
      {children.split(" ").map((v, i) => {
        if (v === "//") {
          return <br key={v + i} />;
        }
        return (
          <motion.span
            variants={item}
            style={{ filter: "blur(0px)" }}
            animate={i < index ? "show" : "hidden"}
            key={v + i}
          >
            {v}{" "}
          </motion.span>
        );
      })}
    </motion.p>
  );
};
