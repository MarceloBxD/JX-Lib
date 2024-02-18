import { countryList } from "./countryList";

interface getCountryNameByDDIProps {
  DDI: number;
  countryName: string;
}

const COUNTRY_NAME_DEFAULT = "Brasil";
export function getCountryNameByDDI({ DDI, countryName }: getCountryNameByDDIProps) {

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
    const responseCountry = countries.find(item => item.country.en === countryName)

    if (responseCountry === undefined) {
      return COUNTRY_NAME_DEFAULT;
    }

    return responseCountry.country.pt;
  }

  return countries.length === 1 ? countries[0].country.pt : COUNTRY_NAME_DEFAULT;
}