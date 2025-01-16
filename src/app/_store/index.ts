import { ICountry } from "@/_types/coutry";
import { create } from "zustand";

interface ICountryState {
  countries: ICountry[];
}

interface ICountryActions {
  setCountries: (countries: ICountry[]) => void;
  removeCountry: (countryName: string) => void;
}

type TCountryStore = ICountryState & ICountryActions;

export const useCountriesStore = create<TCountryStore>((set) => ({
  countries: [],

  setCountries: (countries) => set(() => ({ countries })),
  removeCountry: (countryName) =>
    set((state) => ({
      countries: state.countries.filter((item) => item.name_ru !== countryName),
    })),
}));
