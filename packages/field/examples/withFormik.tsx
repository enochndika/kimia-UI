import { useFormik } from 'formik';
import * as Yup from 'yup';
import Field from '../index';

/* Yup validation schema*/
const validateSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email required'),
  password: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Password required'),
});

const FieldWithFormik = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validateSchema,
    onSubmit: (values) => {
      window.alert(JSON.stringify(values));
    },
  });

  return (
    <div className="mb-12 border p-6">
      <form onSubmit={formik.handleSubmit}>
        <Field
          dot={true}
          error={formik.touched?.email && formik.errors?.email}
          label="Email"
          name="email"
          onChange={formik.handleChange}
          type="text"
        />
        <Field
          dot={true}
          error={formik.touched?.password && formik.errors?.password}
          label="Password"
          name="password"
          onChange={formik.handleChange}
          type="password"
        />
        <button
          className="mt-8 bg-black active:bg-gray-900 focus:outline-none text-white rounded px-4 py-1"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FieldWithFormik;
