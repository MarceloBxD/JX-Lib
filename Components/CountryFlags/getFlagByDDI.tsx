import React from 'react';
import { countryList } from "./countryList";
import * as Flag from './icons/';

export function getFlagByDDI(DDI: number | string) {
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

  const country = countryList.find(country => country.DDI === DDI);

  return country ? country.flag : <Flag.BR />;
}