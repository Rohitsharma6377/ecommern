import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, updateUser } from '../redux/adminSlice';
import AdminSidebar from '../components/AdminSidebar';

const AdminUsers = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleRoleChange = (userId, isAdmin) => {
    dispatch(updateUser({ userId, userData: { isAdmin } }));
  };

  if (loading) 
    return <div className="flex justify-center items-center h-screen text-lg font-semibold">Loading...</div>;
  
  if (error) 
    return <div className="flex justify-center items-center h-screen text-lg text-red-500 font-semibold">Error: {error}</div>;

  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-grow bg-gray-100 p-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Manage Users</h1>

          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border border-gray-200 text-left text-sm font-semibold text-gray-700">Name</th>
                  <th className="px-4 py-2 border border-gray-200 text-left text-sm font-semibold text-gray-700">Email</th>
                  <th className="px-4 py-2 border border-gray-200 text-left text-sm font-semibold text-gray-700">Role</th>
                  <th className="px-4 py-2 border border-gray-200 text-center text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user._id}
                    className="hover:bg-gray-50 transition-colors border-b border-gray-200"
                  >
                    <td className="px-4 py-3 text-gray-700 text-sm">{user.name}</td>
                    <td className="px-4 py-3 text-gray-700 text-sm">{user.email}</td>
                    <td className="px-4 py-3 text-gray-700 text-sm">
                      {user.isAdmin ? (
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          Admin
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          User
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => handleRoleChange(user._id, !user.isAdmin)}
                        className={`px-4 py-2 rounded-full text-xs font-medium shadow-md transition-transform transform hover:scale-105 ${
                          user.isAdmin
                            ? 'bg-red-500 text-white hover:bg-red-600'
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}
                      >
                        {user.isAdmin ? 'Make User' : 'Make Admin'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
