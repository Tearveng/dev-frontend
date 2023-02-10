import {jsonCountry} from '@screens/user/modal/countryJson';
import {CountryCodeList} from '@screens/user/phone/type';

export const mapCountry = () => {
  let data: any[] = [];

  Object.keys(jsonCountry).forEach((_key, index: number) => {
    if (index < 10) {
      let newData = {
        code: CountryCodeList[index],
        currency: jsonCountry[CountryCodeList[index]],
        callingCode: jsonCountry[CountryCodeList[index]].callingCode,
        region: jsonCountry[CountryCodeList[index]].region,
        subregion: jsonCountry[CountryCodeList[index]].subregion,
        flag: jsonCountry[CountryCodeList[index]].flag,
        name: {
          common: jsonCountry[CountryCodeList[index]].name.common,
          fra: jsonCountry[CountryCodeList[index]].name.fra,
        },
      };
      data.push(newData);
    }
  });

  return data;
};
