const table = {
  headers: [
    { id: 1, name: 'Prop' },
    { id: 2, name: 'Type' },
    { id: 3, name: 'Description' },
  ],
};

const AutocompleteTableProps = () => {
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
              it specifies that the autocomplete should be disabled.
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 text-left p-4">value</td>
            <td className="border border-gray-300 text-left p-4">string</td>
            <td className="border border-gray-300 text-left p-4">
              value of the autocomplete input
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 text-left p-4">setValue</td>
            <td className="border border-gray-300 text-left p-4">Function</td>
            <td className="border border-gray-300 text-left p-4">
              a function for handling the autocomplete value
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 text-left p-4">options</td>
            <td className="border border-gray-300 text-left p-4">
              Array[String]
            </td>
            <td className="border border-gray-300 text-left p-4">
              Array of options used to autocomplete input
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
        </tbody>
      </table>
    </div>
  );
};

export default AutocompleteTableProps;
