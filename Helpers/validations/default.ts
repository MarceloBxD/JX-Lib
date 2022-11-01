import * as Yup from 'yup';

export const defaultValidation = ({ value }) => {
  return ({ field: Yup.string().required('Campo obrigatório') });
};
