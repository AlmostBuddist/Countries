import { ICountry } from "@/_types/coutry";
import styled from "./page.module.css";
import { BubleBackground, CountryList } from "@/_components";

export default async function Home() {
  const countriesData = await fetch(
    "https://gist.githubusercontent.com/sanchezzzhak/8606e9607396fb5f8216/raw/39de29950198a7332652e1e8224f988b2e94b166/ISO3166_RU.json"
  );
  const countriesParsed = (await countriesData.json()) as ICountry[];

  return (
    <div className={styled.main}>
      <BubleBackground />
      <div className={`${styled.container} nice-scroll`}>
        <CountryList countriesList={countriesParsed} />
      </div>
    </div>
  );
}
