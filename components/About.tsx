"use client";

/**
 * About – Two-column section: text (heading + paragraphs + CTA) and image.
 * Framer Motion: text fades in from right, image from left. Image hidden on mobile (xl:block).
 */
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

export default function About() {
  return (
    <section
      className="grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:p-0 items-center"
      id="about"
    >
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="xl:pl-[135px]"
      >
        <h1 className="mb-9"> دعنا &apos;نتحدث عن &apos;أكلاتي</h1>
        <p className="mb-8">
          أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق 
        </p>
        <p className="mb-10">
     أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق أكلاتي أطيب مذاق 
        </p>
        <Button>إقرأالمزيد</Button>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Image
          src="/about/img.png"
          width={705}
          height={771}
          alt="About W'Food"
          className="hidden xl:block"
        />
      </motion.div>
    </section>
  );
}
