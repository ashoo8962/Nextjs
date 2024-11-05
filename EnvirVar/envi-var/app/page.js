'USE CLIENT'
export default function Home() {
  console.log('the id is :',process.env.ID)
  console.log('the name is :',process.env.SECRET)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        hery this is home the id is {process.env.NEXT_PUBLIC_ID}
        the secret is {process.env.SECRET}
      </div>
    </div>
  );
}
