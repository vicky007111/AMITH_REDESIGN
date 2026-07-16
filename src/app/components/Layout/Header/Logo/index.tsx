import Link from 'next/link';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo-blue.png"
        alt="AMITH Civil Consultancy Logo"
        width={160}
        height={80}
        className="h-14 w-auto object-contain"
        priority
      />
      <Image
        src="/logo-white.png"
        alt="AMITH Civil Consultancy Logo"
        width={160}
        height={80}
        className="h-14 w-auto object-contain hidden"
        priority
      />
    </Link>
  );
};

export default Logo;
