"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const [staffNo, setStaffNo] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const login = async (e) => {
    e.preventDefault()
    const endpoint = '/api/login';

    // Sending login details to the backend
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ staffNo, password }),
    });

    if (response.ok) {
      // Redirect to the dashboard or another page after successful login
      router.push('/dashboard');
    } else {
      // Handle login failure (e.g., show error message)
      alert('Login failed. Please check your credentials.');
    }
  }
  return (
    <main className="flex h-screen flex-col items-center justify-between">
      <header className='bg-slate-900 w-full p-3 text-slate-100'>
          <p className=' text-xs font-bold'>Yanot Consultants Employee management</p>
      </header>
      <div className=' h-full overflow-auto w-full py-4 px-8'>
        <div className=' text-center'>
          <h1 className=' text-4xl my-12'>Payroll & HR</h1>
          <p>Welcome please sign in to continue</p>
        </div>
        <form className=' mx-auto lg:w-1/3 w-48 text-center p-2'>
          <div className=' bg-slate-300 mb-2 rounded-md overflow-hidden'>
            <input
                type="text"
                placeholder='staff no'
                className='bg-inherit w-full focus:outline-none p-2'
                value={staffNo}
                onChange={(e) => setStaffNo(e.target.value)}
              />
          </div>
          <div className=' bg-slate-300 mb-2 rounded-md overflow-hidden'>
            <input
                type="password"
                placeholder='password'
                className='bg-inherit w-full focus:outline-none p-2'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
          </div>

          <button type='submit' className=' w-1/3 hover:bg-slate-950 bg-slate-800 py-1 px-4 rounded-md text-slate-300 hover:text-white'>login</button>
        </form>
      </div>
      <footer className=' bg-slate-300 w-full p-3'>
        <p>copyright © Yanot Consultants</p>
      </footer>
      
    </main>
  )
}
