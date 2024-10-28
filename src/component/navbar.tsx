import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar-links-container">
                <Link href={"/"}>Home</Link>
                <Link href={"/class"}>Class</Link>
                <Link href={"/student"}>Students</Link>
            </div>
            <ConnectButton />
        </div>
    )
}