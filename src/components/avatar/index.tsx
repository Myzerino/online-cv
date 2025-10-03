import avatar from '../../assets/avatar.png';
import Image from 'next/image';

export default function Avatar(): JSX.Element {
  return (
    <div className="font-sans p-8 items-start text-2xl font-semibold text-retro-brown text-center">
      <Image
        src={avatar}
        alt="Márcio Sousa profile picture"
        width={256}
        height={256}
        className="border-8 border-solid border-retro-brown"
        priority
      />
    </div>
  );
}
