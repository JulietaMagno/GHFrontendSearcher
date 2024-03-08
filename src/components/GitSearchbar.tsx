import SearchIcon from '@/components/icons/SearchIcon'

interface Props {   
    getUser: (username: string) => Promise<void>
}

const GitSearchbar = ({getUser}: Props) => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const username = e.currentTarget.username.value;
        if (!username) return;
        await getUser(username);
    };

  return (
    <form 
        onSubmit={handleSubmit}
        className='flex flex-wrap items-center space-x-2 rounded-xl dark:bg-[#242D42] bg-white shadow-md  dark:shadow-none  pl-4 pr-2 py-2'
    > 
        <span className='min-w-[20px]'>
            <SearchIcon className='fill-blue-500'/>
        </span>
        <input 
            name= "username"
            type="text" 
            placeholder="Search GitHub username..." 
            className='bg-transparent rounded-lg py-2 flex-1 h-14 dark:text-white dark:placeholder:text-white-500 font-light focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
        />
        <button 
            type="submit" 
            className='bg-blue-500 rounded-lg py-4 px-4 text-white font-semibold'
            >
                Search
        </button>
    </form>
  )
}

export default GitSearchbar