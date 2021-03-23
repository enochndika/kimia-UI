import { useForm } from 'react-hook-form';
import Input from '../index';

export const InputWithReactHookForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mb-12 border p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          aria-required={true}
          aria-invalid={errors && errors.email}
          label="Email"
          name="email"
          error={errors && errors.email}
          errorMessage={errors && errors.email?.message}
          ref={register({ required: 'Email is required' })}
          dot={true}
        />
        <Input
          aria-required={true}
          aria-invalid={errors && errors.password}
          label="Mot de passe"
          name="password"
          error={errors && errors.password}
          errorMessage={errors && errors.password?.message}
          ref={register({ required: 'Password required' })}
          dot={true}
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
