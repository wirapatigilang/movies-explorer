"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumbs() {
  const pathName = usePathname();
  const pathSegment = pathName.split("/").filter(Boolean);



  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {pathSegment.map((semgent, index) => {
            const href = "/" + pathSegment.slice(0, index+1).join("/")
            return(
                <li key={index}>
                    <Link href={href}>{decodeURIComponent(semgent)}</Link>
                </li>
            )
        })}
      </ul>
    </div>
  );
}
