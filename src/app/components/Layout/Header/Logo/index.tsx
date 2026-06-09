import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 17.481A21.88 21.88 0 0 1 12 21.75c-2.905-.18-5.724-1.077-8.156-2.617m16.156-4.148A21.862 21.862 0 0 0 21 12c0-1.126-.086-2.233-.251-3.313m-13.784 12.014a22.56 22.56 0 0 1-2.227-2.333m15.319-3.214A22.59 22.59 0 0 0 21 12c0-2.357-.361-4.63-.1.08m-17.65 0C3.086 7.37 3 8.613 3 10c0 3.86 1.83 7.29 4.654 9.479"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight text-primary dark:text-white leading-none">
          AMITH
        </span>
        <span className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-400 font-semibold mt-1">
          Civil Consultancy
        </span>
      </div>
    </Link>
  );
};

export default Logo;
