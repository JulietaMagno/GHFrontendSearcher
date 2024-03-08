"use client";

import InfoSearch from '@/components/InfoSearch'
import GitSearchbar from '@/components/GitSearchbar'
import { useState } from 'react';
import { User } from '@/interfaces/user';

const Home = () => {

  const [user, setUser] = useState <User | null >(null);
  const [error, setError] = useState <string | null>(null);

  const getUser = async (username: string) => {
    const response = await fetch(`https://api.github.com/users/${username}`)
    console.log(response);
    if (!response.ok) {
      setUser(null);
      setError("User not found");
      return;
    }
    setUser(await response.json());
    setError(null);
  };

  return (
    <>
      <GitSearchbar getUser={getUser} />
      {user && <InfoSearch user={user} />}
      {error && (
        <div className="rounded-lg bg-red-500 mt-4 p-4 text-white">{error}</div>
      )}
    </>
    
  )
}

export default Home