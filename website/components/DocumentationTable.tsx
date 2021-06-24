import documentation from '../data/documentation.json';

interface Props {
  name: 'autocomplete' | 'field' | 'copyToClipboard';
}

export default function Table({ name }: Props) {
  return (
    <div className="max-w-full pr-1 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {documentation.headers.map((column) => (
              <th key={column.id} className="text-left p-4">
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm">
          {documentation.body[name].map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 text-left p-4">
                {item.prop}
              </td>
              <td className="border border-gray-300 text-left p-4">
                {item.type}
              </td>
              <td className="border border-gray-300 text-left p-4">
                {item.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
