"use client";

import { ICountry } from "@/_types/coutry";
import { CountryItem } from "./components";
import { useEffect } from "react";
import styled from "./CountryList.module.css";
import { AnimatePresence } from "motion/react";
import { useCountriesStore } from "@/app/_store";

interface ICountryList {
  countriesList: ICountry[];
}

export default function CountryList({ countriesList = [] }: ICountryList) {
  const { countries, setCountries } = useCountriesStore();

  useEffect(() => {
    setCountries(countriesList);
  }, []);

  return (
    <ul className={styled["country-list"]}>
      <AnimatePresence>
        {countries.map((item, index) => (
          <CountryItem key={item.iso_code3} position={index} {...item} />
        ))}
      </AnimatePresence>
    </ul>
  );
}
