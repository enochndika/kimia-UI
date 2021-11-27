import documentation from '../data/documentation.json';

interface Props {
  name:
    | 'autocomplete'
    | 'field'
    | 'copyToClipboard'
    | 'Navbar'
    | 'NavbarNav'
    | 'NavbarLink';
}

export default function Table({ name }: Props) {
  return (
    <div className="pr-1 max-w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {documentation.headers.map((column) => (
              <th key={column.id} className="p-4 text-left">
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm">
          {documentation.body[name].map((item, index) => (
            <tr key={index}>
              <td className="p-4 text-left border border-gray-300">
                {item.prop}
              </td>
              <td className="p-4 text-left border border-gray-300">
                {item.type}
              </td>
              <td className="p-4 text-left border border-gray-300">
                {item.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
