import Link from 'next/link';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo-blue.png"
        alt="AMITH Civil Consultancy Logo"
        width={160}
        height={56}
        className="h-14 w-auto object-contain dark:hidden"
        priority
      />
      <Image
        src="/logo-white.png"
        alt="AMITH Civil Consultancy Logo"
        width={160}
        height={56}
        className="h-14 w-auto object-contain hidden dark:block"
        priority
      />
    </Link>
  );
};

export default Logo;
