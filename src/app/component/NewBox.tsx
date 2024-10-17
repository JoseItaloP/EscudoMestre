import Link from "next/link";

export default function NewBox() {
  return (
    <Link className="rounded bg-color1-2-300 text-color1-1-100  flex flex-col justify-center h-12 w-3/6 hover:bg-color1-1-100 hover:text-white" href="/novaMesa/user">
      Abrir nova mesa
    </Link>
  )
}
