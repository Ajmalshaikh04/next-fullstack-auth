'use client'

// import { usePathname } from 'next/navigation';
// import { useEffect,useRef } from 'react';
// import  toast,{Toaster } from 'react-hot-toast';


const Profile = () => {

  // const path=usePathname()
  // const timeoutRef = useRef(null);
  
  // useEffect(() => {
  //   if (path === '/profile') {
  //     toast.success('Login Successfully', { duration: 2000 });
      
  //     timeoutRef.current = setTimeout(() => {
  //       toast.success('Welcome to Profile', { duration: 2000 });
  //     }, 2000);
  //   }

  //   return () => {
  //     clearTimeout(timeoutRef.current);
  //   };
  // }, [path]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Profile</h1>
        <hr/>
        <p>Profile page</p>
        {/* <Toaster position='top-right'/> */}
    </div>
  )
}

export default Profile