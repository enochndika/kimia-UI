const table = {
  headers: [
    { id: 1, name: 'Prop' },
    { id: 2, name: 'Type' },
    { id: 3, name: 'Description' },
  ],
};

const FieldTableProps = () => {
  return (
    <div className="max-w-full pr-1 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {table.headers.map((column) => (
              <th key={column.id} className="text-left p-4">
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm">
          <tr>
            <td className="border border-gray-300 text-left p-4">disabled</td>
            <td className="border border-gray-300 text-left p-4">Boolean</td>
            <td className="border border-gray-300 text-left p-4">
              it specifies that the field should be disabled.
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 text-left p-4">dot</td>
            <td className="border border-gray-300 text-left p-4">Boolean</td>
            <td className="border border-gray-300 text-left p-4">
              If true, a dot will be displayed on the side of the label to
              indicate a required field
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 text-left p-4">error</td>
            <td className="border border-gray-300 text-left p-4">String</td>
            <td className="border border-gray-300 text-left p-4">
              Will display an error message (when its value is not null)
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 text-left p-4">*label</td>
            <td className="border border-gray-300 text-left p-4">String</td>
            <td className="border border-gray-300 text-left p-4">
              label of the field
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 text-left p-4">*name</td>
            <td className="border border-gray-300 text-left p-4">String</td>
            <td className="border border-gray-300 text-left p-4">
              name of the field
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 text-left p-4">ref</td>
            <td className="border border-gray-300 text-left p-4">any</td>
            <td className="border border-gray-300 text-left p-4">React ref</td>
          </tr>
          <tr>
            <td className="border border-gray-300 text-left p-4">*type</td>
            <td className="border border-gray-300 text-left p-4">String</td>
            <td className="border border-gray-300 text-left p-4">
              type of the field (select, textarea, text, number, checkbox,
              password etc...)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FieldTableProps;
