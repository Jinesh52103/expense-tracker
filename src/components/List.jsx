export default function List({ data, handleDelete }) {
  console.log("List component received:", data);
  return (
    <div className="mt-6 overflow-x-auto rounded-lg shadow-md bg-white">
      <table className="w-full table-auto border-collapse">
        <thead className="bg-purple-600 text-white">
          <tr>
            <th className="px-4 py-3 text-left">Date</th>
            <th className="px-4 py-3 text-left">Amount</th>
            <th className="px-4 py-3 text-left">Category</th>
            <th className="px-4 py-3 text-left">Description</th>
            <th className="px-4 py-3 text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } hover:bg-purple-100 transition duration-150`}
            >
              <td className="px-4 py-2">{data.date}</td>
              <td className="px-4 py-2">${data.amount}</td>
              <td className="px-4 py-2">{data.category}</td>
              <td className="px-4 py-2">{data.expense}</td>
              <td className="px-4 py-2 text-center" onClick={() => handleDelete(index)}>🗑️</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
