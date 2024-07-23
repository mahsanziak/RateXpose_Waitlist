// components/WaitlistForm.tsx
import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

const WaitlistForm: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { error } = await supabase
      .from('waitlist')
      .insert([{ name, email }])

    if (error) {
      setMessage('Error joining the waitlist. Please try again.')
    } else {
      setMessage('Successfully joined the waitlist!')
      setName('')
      setEmail('')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
        <h1 className="text-2xl font-bold">Join the Waitlist</h1>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border p-2 rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Join
        </button>
        {message && <p className="text-center mt-4">{message}</p>}
      </form>
    </div>
  )
}

export default WaitlistForm
