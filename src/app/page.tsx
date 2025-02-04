import Image from "next/image";

export default function Home() {
    return (
        <div className="grid grid-rows-[80px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Image
                src="/zweit_logo.png"
                alt="Zweit Logo"
                width={128}
                height={128}
            />
            <main className="flex flex-col gap-8 row-start-2 items-center">
                <div className="flex gap-4 items-center flex-col">
                    <h1 className="text-3xl font-semibold">
                        Join the Zweit Development Community!
                    </h1>
                </div>
                <div className="flex gap-4 text-xl flex-col">
                    <h1 className="text-2xl font-semibold">We welcome:</h1>
                    <ul className="list-disc list-inside">
                        <li>Software and Hardware Hobbyists</li>
                        <li>Tech Enthusiasts</li>
                        <li>Game Developers</li>
                        <li>Homelabbers</li>
                        <li>...and more!</li>
                    </ul>
                    <p className="">
                        Come join and start a discussion about what you&apos;re
                        working on, or what you would like to work on!
                    </p>
                </div>
                <div className="flex gap-4 text-xl flex-col">
                    <a
                        className="flex text-xl items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://discord.gg/uNPczUYSdb"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className="dark:invert"
                            aria-hidden
                            src="/discord.svg"
                            alt="Globe icon"
                            width={64}
                            height={64}
                        />
                        Join the Discord Server →
                    </a>
                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
        </div>
    );
}
