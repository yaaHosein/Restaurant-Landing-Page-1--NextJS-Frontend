"use client";

/**
 * Footer – Site footer: logo, three link columns (Blog, New Item, Socials), and copyright.
 * Background from tailwind theme (bg-footer). All links currently point to /.
 */
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="bg-footer bg-cover bg-no-repeat text-white pt-16"
    >
      <div className="container mx-auto">
        <div className="flex flex-col justify-between xl:flex-row">
          <div className="w-[300px] mb-8 xl:mb-0">
            <Link href="/">
              <Image src="/logo.svg" width={90} height={36} alt="W'Food" />
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16">
            <div>
              <h4 className="font-semibold mb-5">مدونة</h4>
              <ul className="flex flex-col gap-y-6 text-sm">
                <li>
                  <Link href="/">
المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد
                  </Link>
                </li>
                <li>
                  <Link href="/">
المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزي
                  </Link>
                </li>
                <li>
                  <Link href="/">
المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزي
                  </Link>
                </li>
                <li>
                  <Link href="/">
المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزي
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-5">عنصر جديد</h4>
              <ul className="flex flex-col gap-y-6 text-sm">
                <li>
                  <Link href="/">
                    المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزي                  </Link>
                </li>
                <li>
                  <Link href="/">
                    المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزي                  </Link>
                </li>
                <li>
                  <Link href="/">
                    المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزي                 </Link>
                </li>
                <li>
                  <Link href="/">
المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد المزيد 
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-5">Socials</h4>
              <ul className="flex flex-col gap-y-6 text-sm">
                <li>
                  <Link href="/">Youtube</Link>
                </li>
                <li>
                  <Link href="/">Facebook</Link>
                </li>
                <li>
                  <Link href="/">Instagram</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-4 border-t border-white/10">
          <p className="text-white/60 text-center text-sm">
            &copy; {new Date().getFullYear()} جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
