import Field, { LockIcon } from '../field';

const DefaultFieldExample = () => (
  <div className="mt-16">
    <h2 className="mb-6 text-gray-600 text-lg font-bold md:text-2xl">
      Example
    </h2>
    <div className="mb-6 p-6 border">
      <Field label="Name" name="name" placeholder="name" type="text" />
      <Field label="Fullname disabled" name="fullName" disabled type="text" />
      <Field
        dot={true}
        label="Password"
        icon={<LockIcon />}
        name="password"
        placeholder="password"
        type="password"
        error="Password is required"
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
  </div>
);

export default DefaultFieldExample;
