import Image from "next/image"
import Link from "next/link"
import Logo from "./dojo-logo.png"

const Navbar = () => {
  return (
    <nav>
      <Image
        src={Logo}
        alt="dojo helpDesk logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>Dojo HelpDesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/tickets/create">Add Ticket</Link>
    </nav>
  )
}

export default Navbar