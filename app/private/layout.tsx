'use client';

import { useState } from 'react';
import { Lock } from 'lucide-react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // In your actual Next.js project, use: process.env.NEXT_PUBLIC_ACCESS_PASSWORD
  const ACCESS_PASSWORD = "2000";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ACCESS_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  if (!isAuthenticated) {
    return (
      <html lang="en">
        <body>
          <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Lock className="w-12 h-12 text-blue-600" />
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-center text-slate-800 mb-2">
                Restricted Area
              </h1>
              <p className="text-center text-slate-600 mb-8">
                Please enter the password to access this content
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Enter password"
                    required
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  Access Content
                </button>
              </form>

              <div className="mt-6 text-center text-xs text-slate-500">
                <p>This is a password-protected area</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}