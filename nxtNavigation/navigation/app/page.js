'use client'
import { useSearchParams } from "next/navigation";
// we canc change pg using router.push(pgname)
// usepaarams is a client compo hook lets u read the current urls query string
export default function Home() {

const searchparams=useSearchParams()

  return (
   <div>
hey thisis a page nd blog is {searchparams.get(`blog`)}
and utm source is {searchparams.get(`utm_source`)}
   </div>
  );
}
