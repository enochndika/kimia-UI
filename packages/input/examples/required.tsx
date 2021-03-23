import Input from '../index';

export const InputRequiredExample = () => (
  <div className="mb-12">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-6">
      Required
    </h2>
    <Input label="Email" name="email" dot={true} aria-required={true} />
  </div>
);
