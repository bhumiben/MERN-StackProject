import { Link } from 'react-router-dom';

export default function Home() {
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <header className="text-3xl font-bold text-center mb-6">
        Welcome to Friendsbook
      </header>
      <div className='flex flex-col gap-6 p-3 max-w6xl'>
        <p className="text-lg text-center mb-6">
          Connect with friends, share your thoughts, and explore the world on Friendsbook.
        </p>
        <Link to={"/create-posting"} className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'>
          create post
        </Link>
      </div>
    </div>
  );
}
