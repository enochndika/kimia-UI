import Field from '../index';

const DefaultFieldExample = () => (
  <div className="mt-16">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-6">
      Example
    </h2>
    <Field label="Name" name="name" placeholder="name" type="text" />
    <Field
      aria-required={true}
      aria-invalid={true}
      dot={true}
      label="password"
      name="password"
      type="password"
      error={true}
      errorMessage="Password is required"
    />
    <Field label="Description" name="description" type="textarea" />
    <Field label="Accept terms" name="terms" type="checkbox" />
    <Field label="Choose a framework" name="framework" type="select">
      <option value="" />
      <option>Next.js</option>
      <option>Nuxt.js</option>
      <option>Angular</option>
    </Field>
  </div>
);

export default DefaultFieldExample;
