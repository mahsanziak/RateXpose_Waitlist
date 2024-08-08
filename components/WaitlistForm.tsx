import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('waitlist').insert([{ email }]);
    if (error) {
      setMessage('Error joining the waitlist. Please try again.');
    } else {
      setMessage('Successfully joined the waitlist!');
      setEmail('');
    }
  };

  return (
    <div className=" gap-5 mt-8  ">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:gap-4 items-center w-full">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-blue-900 p-2 px-2 rounded-l-md md:w-96 mb-2 md:mb-0 "
          required
        />
        <button type="submit" className="bg-blue-900 text-white p-2 rounded-r-md md:flex-1 w-full md:px-2">
          Join Waitlist
        </button>
      </form>
      {message && <p className="text-center mt-4 text-white">{message}</p>}
    </div>
  );
};

export default WaitlistForm;
