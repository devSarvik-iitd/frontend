import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, loading } = useAuth();

  if (loading) return <p className="text-center mt-8 text-gray-500">Loading...</p>;
  if (!user) return <p className="text-center mt-8 text-red-500">User not logged in</p>;

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center space-y-4">
        <img
          src={user.picture}
          alt={user.name}
          className="w-24 h-24 rounded-full shadow-md border-4 border-white -mt-16 bg-gray-200"
        />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-sm text-gray-500">{user.role.toUpperCase()}</p>
        </div>
        <div className="w-full border-t pt-4 space-y-2 text-gray-700">
          <div className="flex items-center justify-between">
            <span className="font-medium">Display Name:</span>
            <span>{user.displayName}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Email:</span>
            <span>{user.email}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Phone:</span>
            <span>{user.phone}</span>
          </div>
        </div>

        <button
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
