import { IconHeart, IconHome } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import Styles from "./header.module.css";

export function Header() {
  return (
    <header>
      <nav className={Styles.nav}>
        <div className={Styles.brand}>
          <Link href="/">
            <a>
              <Image
                src="/images/logo.png"
                width={45}
                height={36}
                alt="OnFood"
              />
              <span>OnFood</span>
            </a>
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/">
              <a>
                <IconHome />
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/favoritos">
              <a>
                <IconHeart /> <span>Favoritos</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
