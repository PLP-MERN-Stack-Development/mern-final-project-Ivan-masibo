export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-green-700 mb-6">
          Create Account
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg"
          />

          <select className="w-full px-4 py-2 border rounded-lg">
            <option>Farmer</option>
            <option>Admin</option>
          </select>

          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
