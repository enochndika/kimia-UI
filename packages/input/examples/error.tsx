import Input from '../index';

/* Example*/
export const InputErrorExample = () => (
  <div className="mb-12">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-6">
      Error Message
    </h2>
    <Input
      aria-required={true}
      aria-invalid={false}
      dot={true}
      label="Password"
      name="password"
      error={true}
      errorMessage="Password is required"
    />
  </div>
);
