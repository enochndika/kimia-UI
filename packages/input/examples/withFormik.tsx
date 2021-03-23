import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../index';

export const InputWithFormik = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validateSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="mb-12 border p-6">
      <form onSubmit={formik.handleSubmit}>
        <Input
          aria-required={true}
          aria-invalid={formik.errors.email && formik.touched.email}
          label="Email"
          name="email"
          error={formik.errors.email && formik.touched.email}
          errorMessage={formik?.errors?.email}
          onChange={formik.handleChange}
          dot={true}
        />
        <Input
          aria-required={true}
          aria-invalid={formik.errors.password && formik.touched.password}
          label="Mot de passe"
          name="password"
          error={formik.errors.password && formik.touched.password}
          errorMessage={formik?.errors?.password}
          onChange={formik.handleChange}
          dot={true}
        />
        <button
          className="mt-8 bg-black focus:outline-none active:bg-gray-900 text-white shadow rounded px-4 py-1"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

/* Yup validation schema*/
const validateSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email required'),
  password: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Password required'),
});
