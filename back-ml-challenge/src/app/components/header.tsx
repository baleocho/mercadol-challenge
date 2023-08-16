import Link from "next/link";

export default function Header() {
    return (
        <header className="flex h-16 bg-yellow-300 px-4 ">
            
            <form action="/items" className="m-auto  max-w-screen-lg flex flex-1">
            <Link className="border p-1" href={'/'}>Home</Link>
                <input type="text" name="search" className="h-8 flex-1 px-4" />
                <button typeof="submit" className="bg-gray-300 px-4 py-1 h-8 text-slate-700">Buscar</button>
            </form>
        </header>
    )
}
