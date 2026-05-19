export const AdminPlaceholder = () => (
  <div className="pt-24 pb-20 px-4 md:px-12 min-h-screen max-w-7xl mx-auto">
    <div className="mb-12">
      <h1 className="text-3xl font-bold mb-2">Content Management</h1>
      <p className="text-gray-500">Manage catalog, users, and system settings</p>
    </div>

    <div className="bg-white dark:bg-[#1C1C24] rounded-2xl border border-black/5 dark:border-white/5 overflow-hidden">
      <div className="p-6 border-b border-black/5 dark:border-white/5 flex items-center justify-between">
        <h3 className="font-bold">Content Inventory</h3>
        <button className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-lg">Add New Media</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-black/5 dark:bg-white/5 text-[10px] font-bold uppercase tracking-widest text-gray-500">
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Year</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i} className="border-b border-black/5 dark:border-white/5 last:border-0 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-bold">Demo Content {i}</td>
                <td className="px-6 py-4 text-gray-500">Movie</td>
                <td className="px-6 py-4 text-gray-500">2024</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-0.5 bg-green-500/10 text-green-500 rounded text-[10px] font-bold uppercase">Published</span>
                </td>
                <td className="px-6 py-4 text-accent font-bold">Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
