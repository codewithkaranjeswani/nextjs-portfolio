import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-20 py-20">
        <Image
          className="rounded-xl"
          src="/faceimg.png"
          alt="my face image"
          priority={false}
          quality={75}
          loading="lazy"
          width={300}
          height={300}
        />
        <div>
          <h1 className="font-bold text-4xl my-6">
            Hi 👋, I&#39;m Karan Jeswani!
          </h1>
          <p className="text-lg my-6">
            I&#39;m a{" "}
            <span className="semi-bold text-teal-900">Data Scientist </span>
            interested in applied mathematics and web development!
          </p>
        </div>
      </div>
    </section>
  );
}
