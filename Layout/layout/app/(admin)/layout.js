import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'




export const metadata = {
  title: "Admin facebook connect wid ur frnds Create Next App",
  description: "face is ok Generated by create next app",
};

export default function AdminLayout({ children }) {
  return (
<>
<span>Admin navbar</span>
{children}
</>
  );
}
