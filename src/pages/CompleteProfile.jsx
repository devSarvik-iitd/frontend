import { useState } from 'react';
import axios from 'axios';

export default function CompleteProfile() {
  const [form, setForm] = useState({
    contact: '',
    kerbros: '',
    hostel: '',
    gender: '',
    cluster: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/complete-profile`, form, {
      headers: { Authorization: `Bearer ${token}` }
    });
    window.location.href = '/dashboard';
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      {Object.keys(form).map((field) => (
        <input
          key={field}
          placeholder={field}
          value={form[field]}
          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          className="w-full p-2 border rounded"
        />
      ))}
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}
