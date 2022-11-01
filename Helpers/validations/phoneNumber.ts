import { getUnFormattedPhone } from '@/utils/getUnFormattedPhone';
import * as Yup from 'yup';

export const phoneNumberValidation = ({ value }) => {
  const phone = `${value?.ddd}${value?.number}`;
  const number = value?.number;
  const isBRFormat = value?.ddi == 55;

  return {
    field: Yup.string()
      .test({
        name: 'requeridPhoneValue',
        message: 'Telefone obrigatório',
        exclusive: true,
        test: () => {
          if (phone == '') {
            return false;
          }
          return true;
        },
      })
      .test({
        name: 'invalidPhoneValue',
        message: 'Telefone não é válido',
        exclusive: true,
        test: () => {
          if (phone === '') return true;
          return !/\b(\d)\1+\b/.test(getUnFormattedPhone(number));
        },
      })
      .test({
        name: 'invalidPhoneLength',
        message: 'Telefone não é válido',
        exclusive: true,
        test: () => {
          if (phone === '') return true;
          const phoneUnformatted = getUnFormattedPhone(phone);
          if (
            phoneUnformatted.length < 11 &&
            phoneUnformatted.length > 0 &&
            isBRFormat
          ) {
            return false;
          }
          return true;
        },
      })
      .nullable(),
  };
};
