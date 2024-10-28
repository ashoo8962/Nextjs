import dynamic from "next/dynamic"

export default async function Home() {
  
 
    let data = await fetch('https://api.vercel.app/blog',
      {next:{revalidate:3600}}
    //  for cache no sto // {cache:"no-store"}
    )
    let posts = await data.json()
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
  }
export default dynamic = 'force-dynamic'
