import * as Yup from 'yup';

export const emailValidation = ({ value }) => {
  return {
    field: Yup.string()
      .required('E-mail obrigatório')
      .email('E-mail inválido')
      .test({
        name: 'validEmailValue',
        message: 'E-mail inválido',
        exclusive: true,
        test: () => {
          if (value?.length == 0) return true;
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
        },
      }),
  };
};
