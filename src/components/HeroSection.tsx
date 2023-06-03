"use client"
import React from 'react'
import Image from "next/image"

function HeroSection() {
    return (
        <section id="home">
            <div className="flex flex-col text-center items-center justify-center my-10 py-16">
                <div>
                    <Image className="rounded-full shadow-2xl" src="/faceimg.jpg" alt="my face image" priority={false} quality={75} width={300} height={300} />
                </div>
                <div>
                    <h1 className="font-bold text-4xl mt-6">Hi, I&#39;m Karan Jeswani!</h1>
                    <p className="text-lg mt-4 mb-6">I&#39;m a{" "}
                    <span className="semi-bold text-teal-900">Machine Learning Engineer{" "}</span>
                    based in Bengaluru. I like applied mathematics and web development</p>
                </div>
            </div>
        </section>
    )
}

export default HeroSection