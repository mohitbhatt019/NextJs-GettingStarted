"use client";
import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";
export default function Layout({ children }) {
  const pathName = usePathname();
 // console.log(pathName, "pathName");
  return (
    <>
      <h1>Common layout for login screen</h1>
      {pathName !== "/loginteacher" ? 
        <ul className="login-menu">
          <li>
            <h4>Login menu</h4>
          </li>
          <li>
            <Link href="/login">Login Main</Link>
          </li>

          <li>
            <Link href="/login/loginstudent">Login student </Link>
          </li>

          <li>
            <Link href="/login/loginteacher">Login Teacher</Link>
          </li>
        </ul>
        : null}

      {children}
    </>
  );
}
