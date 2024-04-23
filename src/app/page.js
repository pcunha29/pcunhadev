import Image from "next/image";
import { techStack } from "@/data/techStack";
import logo from "@/assets/square.jpg";

export default function Home() {
  return (
    <>
      <header className="flex justify-between">
        <span>Pedro Cunha</span>
        <button>Resume</button>
      </header>
      <main className="">
        <section className="mt-20 text-center">
          <div className="w-full h-auto flex justify-center">
            <Image
              src={logo}
              className="w-20 h-20 rounded-xl"
              alt="Pedro Cunha"
            />
          </div>
          <span className="block mt-10 text-font text-5xl">
            Senior <br /> Software Engineer <br />
            <span className="block text-xl">(Frontend)</span>
          </span>
        </section>

        <section className="mt-20 flex justify-center">
          <div class="w-[600px] inline-flex flex-nowrap overflow-hidden maskImg">
            {techStack.map((techStack, i) => (
              <ul
                key={i}
                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                aria-hidden={i !== 0}
              >
                {techStack.map((tech) => (
                  <li key={tech.name} className="mx-4 will-change-transform">
                    <Image
                      height={36}
                      width={36}
                      src={tech.logo}
                      alt={tech.name}
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>
      </main>
      <footer>footer</footer>
    </>
  );
}
