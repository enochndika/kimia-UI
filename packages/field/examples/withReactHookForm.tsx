import { useForm } from 'react-hook-form';
import Field from '../index';

const FieldWithReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    window.alert(JSON.stringify(values));
  };

  return (
    <div className="mb-12 border p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          {...register('email', { required: 'Email is required' })}
          dot={true}
          error={errors?.email?.message}
          label="Email"
          name="email"
          type="text"
        />
        <Field
          {...register('password', { required: 'Password required' })}
          dot={true}
          error={errors?.password?.message}
          label="Password"
          name="password"
          type="password"
        />
        <button
          className="mt-8 bg-black active:bg-gray-900 focus:outline-none text-white shadow rounded px-4 py-1"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FieldWithReactHookForm;
