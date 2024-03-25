//import GitHubLogo from '@/components/icons/GitHubLogo'
import LocationIcon from '@/components/icons/LocationIcon'
import LinkIcon from '@/components/icons/LinkIcon'
import PageIcon from '@/components/icons/PageIcon'
import XIcon from '@/components/icons/XIcon'
import { User } from '@/interfaces/user'
import Image from 'next/image'

interface Props { 
  user: User; 
}

function valideURL(url: string) {
  // Verificar si la URL comienza con "http://" o "https://"
  if (!/^https?:\/\//i.test(url)) {
    // Agregar "https://" al principio de la URL
    url = "https://" + url;
  }
  return url;
}


const InfoSearch = ({ user } : Props) => {
  return (
    <article className="grid-areas rounded-xl bg-white p-6 shadow-md dark:bg-[#242D42] dark:text-white dark:shadow-none mt-4">
      <div className="section-logo mr-2 grid h-24 w-24 place-content-center overflow-hidden rounded-full bg-gray-200 lg:mx-auto">
        <Image 
          src={user.avatar_url} 
          width={96}
          height={96}
          alt={ `profile img user ${user.name}`} 
          className='rounded-full'
        />
        {/* <GitHubLogo className='relative top-2 h-full w-full p-1'/> */}
      </div>
      <div className="section-title">
        <h2 className='text-2xl font-bold'>{user.name}</h2>
        <p className='text-sm text-blue-500'>@{user.login}</p>
      </div>
        <p className="section-date lg:text-right text-sm">{
        new Date(user?.created_at || "").toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      }</p>
      
      <p  className="section-description mt-8 leading-loose">
        {user.bio || 'This user has no bio.'}
      </p>
      <div className="section-number mt-3 flex justify-around rounded-xl  bg-blue-50 p-5 text-center text-blue-950 dark:bg-[#151E35] dark:text-white">
        <article>
          <p className='text-sm'>Repos</p>
          <p className='text-lg font-bold'>{user.public_repos}</p>
        </article>
        <article>
          <p className='text-sm'>Followers</p>
          <p className='text-lg font-bold'>{user.followers}</p>
        </article>
        <article>
          <p className='text-sm'>Followings</p>
          <p className='text-lg font-bold'>{user.following}</p>
        </article>
      </div>
      <div className="section-social mt-6 space-y-3 md:grid md:grid-cols-2">
      <article className="flex space-x-2">
          <i>
          <LocationIcon 
              className="h-full w-full fill-blue-950 dark:fill-white"
              width={"1rem"}
              />
          </i>
          <span>{user.location || 'Not information'} </span>
        </article>
        <article className="flex space-x-2">
          <i>
            <LinkIcon 
              className="h-full w-full fill-blue-950 dark:fill-white"
              width={"1rem"}
              />
          </i>
          <a href={valideURL(user.blog)} className='truncate'>{user.blog || 'Not information' }</a>
        </article>
        <article className="flex space-x-2">
          <i>
            <XIcon 
              className="h-full w-full fill-blue-950 dark:fill-white"
              width={"1rem"}
            />
          </i>
          <a href={`https://www.twitter.com/${user.twitter_username}`}>{user.twitter_username || 'Not information' }</a>
        </article>
        <article className="flex space-x-2">
          <i>
            <PageIcon 
              className="h-full w-full fill-blue-950 dark:fill-white"
              width={"1rem"} 
            />
          </i>
          <span>{user.company || 'Not information'} </span>
        </article>
      </div>
    </article>
  )
}

export default InfoSearch