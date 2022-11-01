import { removeMaskZipCode } from '@/utils/maskZipCode';
import * as Yup from 'yup';

export const addressValidation = ({ value }) => {
  const zipCode = value.zipCode ? removeMaskZipCode(value.zipCode) : "";

  const zipCodeYupValidation = Yup.string().min(8, "CEP inválido")
    .test({
      name: 'requiredZipCodeValue',
      message: 'CEP obrigatório',
      exclusive: true,
      test: () => {
        if (zipCode == '') {
          return false;
        }
        return true;
      },
    }).test({
      name: 'invalidZipCode',
      message: 'CEP inválido',
      exclusive: true,
      test: () => {
        if (zipCode == "") {
          return true;
        }

        if (zipCode.length < 8) {
          return false;
        }

        let firstChar = zipCode?.charAt(0);

        for (let i = 0; i < zipCode.length; i++) {
          if (firstChar !== zipCode?.charAt(i)) {
            return true;
          }
        }

        return false;

      },
    }).nullable();

  if (zipCode.length < 8) {
    return ({
      zipCode: zipCodeYupValidation
    });
  }

  return ({
    city: Yup.string().required('Cidade obrigatório').nullable(),
    complement: Yup.string().nullable(),
    district: Yup.string().required('Bairro obrigatório').nullable(),
    number: Yup.string().required('Número obrigatório').nullable(),
    street: Yup.string().required('Rua obrigatório').nullable(),
    zipCode: zipCodeYupValidation,
  });
};
