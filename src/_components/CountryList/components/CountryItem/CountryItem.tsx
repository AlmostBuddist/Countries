import { ICountry } from "@/_types/coutry";
import styled from "./CountryItem.module.css";
import Image from "next/image";
import { motion } from "motion/react";
import Button from "@/_components/Button/Button";
import { useCountriesStore } from "@/app/_store";

interface ICountryItem extends ICountry {
  position: number;
}

export default function CountryItem({
  name_ru,
  flag_url,
  iso_code2,
  iso_code3,
  position,
}: ICountryItem) {
  const { removeCountry } = useCountriesStore();

  const src = `https:${flag_url}`;

  return (
    <motion.li
      key={iso_code3}
      layout
      className={styled["country-item"]}
      initial={{
        scale: 0,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        ease: "backInOut",
        from: 90,
        duration: 0.2,
        scale: {
          type: "keyframes",
          delay: position < 30 ? position * 0.1 : 3.3,
        },
      }}
      exit={{
        opacity: 0,
        transform: "translateX(100%)",
      }}
    >
      <div className={styled["first-block"]}>
        <div className={styled["flag-img-wrapper"]}>
          <Image
            loader={() => src}
            src={src}
            alt={iso_code2}
            width={20}
            height={10}
          />
        </div>
        <p>{name_ru}</p>
      </div>

      <Button
        onClick={() => removeCountry(name_ru)}
        buttonStyle="icon"
        className={styled["icon-flag-wrapper"]}
      >
        <span className={`${styled["icon-flag"]} material-symbols-outlined`}>
          delete
        </span>
      </Button>
    </motion.li>
  );
}
