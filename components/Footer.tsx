import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center bg-neutral-700 text-neutral-50 p-12">
            <div className="flex gap-4">
                <Image
                    src="/Logo.png"
                    alt=""    
                    width={40}
                    height={40}
                />
                <h2 className="text-3xl">Pokédex</h2>
            </div>

            <p className="p-6">Explore the world of Pokémon</p>

            <div className="flex gap-8">
                {/* Facebook */}
                <Link href="">
                    <Image
                        src="/Facebook.svg"
                        alt="Facebook icon"
                        width={30}
                        height={30}
                    />
                </Link>

                {/* Instagram */}
                <Link href="">
                    <Image
                        src="/Instagram.svg"
                        alt="Instagram icon"
                        width={30}
                        height={30}
                    />
                </Link>
            </div>
        </footer>
    );
}