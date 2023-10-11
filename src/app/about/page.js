"use client"
import Link from 'next/link';
import { Router, useRouter } from 'next/navigation'
import React from 'react'

const About = () => {
    const router=useRouter();
  return (
    <>
    <h1>About page</h1>
    <button onClick={()=>router.push("/")}>Go to home page</button>
    <Link href="/about/aboutstudent">Go to about vollege page</Link>
    </>
  )
}

export default About