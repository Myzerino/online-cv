import avatar from "../../assets/avatar.png";
import Image from "next/image";
import type { ReactElement } from "react";

export default function Avatar(): ReactElement {
  return (
      <Image
        src={avatar}
        alt="Márcio Sousa profile picture"
        width={256}
        height={256}
        className="border-8 border-solid border-retro-brown"
        priority
      />
  );
}
