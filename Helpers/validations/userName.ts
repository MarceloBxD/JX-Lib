import * as Yup from 'yup';

export const userNameValidation = ({ value }) => {
  return {
    field: Yup.string()
      .min(5, 'O nome deve conter no mínimo 5 caracteres')
      .test({
        message: 'O nome deve ser completo',
        test: () => {
          if (value === '' || value === null) {
            return true;
          }

          return value.split(' ').filter(value => value != '').length > 1;
        },
      })
      .test({
        message: 'Nome completo inválido',
        test: () => {
          if (value === '' || value === null) {
            return true;
          }

          return /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/g.test(
            value,
          );
        },
      })
      .required('Nome completo obrigatório')
      .nullable(),
  };
};
