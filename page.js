import React from 'react'
import Image from 'next/image'
import "./globals.css";
import Link from 'next/link';

export default function Home() {
    return (
        <main className={"globals.container items-centre"} >
            <h1 className={"globals.title"}>
                Welcome to Home page 
             </h1>
          <Link href="/page2" passHref>
         <button>
            Go to the About page 
          </button>
          </Link>
        </main>
    )
}