"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {

  const router=useRouter();

    const navigate=(name)=>{
      router.push(name)
    }

  const apple = (item) => {
    // alert("Fruit")
    alert(); 
  };
  const InnerComp = () => {
    return <h1>My Inner Component</h1>;
  };
  return (
    // <main className={styles.main}>
    //   {/* <h1>Home page</h1>
    //   <User name="Bhatt"/> */}
    //   <h1>Event, Functions and state</h1>
    //   <Link href="/login">GO TO LOGIN</Link>
    //   <Link href="/about">GO TO ABOUT US</Link>
    //   <button onClick={()=>navigate("login")}>Go to login</button>
    //   <button onClick={()=>router.push("/about")}>Go to About</button>
    //   {/* <button onClick={()=>alert('next js')}>Click me</button> */}
    //   <button onClick={() => apple("Fruitt ")}>Click me</button>
    // <InnerComp/>
    // </main>
    <>
        <Link href="productlist">Go TO Product List</Link>

    </>
  );
}

