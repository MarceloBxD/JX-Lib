import React from 'react';
import { countryList } from "./countryList";
import * as Flag from './icons/';

interface getFlagByDDIProps {
  DDI: number;
  countryName: string;
}

export function getFlagByDDIAndName({ DDI, countryName }: getFlagByDDIProps) {
  if (typeof DDI === 'string') {
    try {
      DDI = parseInt(DDI);
      if (isNaN(DDI)) {
        throw new Error("Not a number");

      }
    } catch (error) {
      throw new Error("Error on convert string to integer");
    }


    try {
      DDI = Number(DDI);
    } catch (error) {
      console.log(error);
    }
  }

  const countries = countryList.filter(country => country.DDI === DDI);

  if (countries.length > 1) {
    const country = countries.find(item => item.country.en === countryName)

    if (country === undefined) {
      return (<Flag.BR />)
    }

    return country.flag;
  }

  return countries.length === 1 ? countries[0].flag : <Flag.BR />;
}