import Link from "next/link"

export default function Header() {
    return  <header className="bg-black shadow-lg">
                <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                    <Link href="/"><h1 className=" text-white text-2xl">Blog</h1></Link>
                    <nav className="space-x-4">
                        <Link href="/" className="text-blue-500">Home</Link>
                        <Link href="/about" className="text-blue-500">About</Link>
                        <Link href="/contact" className="text-blue-500">Contact</Link>
                    </nav>
                </div>
            </header>
}