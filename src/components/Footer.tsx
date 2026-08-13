export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#fafafa] py-8 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm font-medium">
          © {currentYear} Srajan Kulal. All rights reserved.
        </p>
        <p className="text-slate-400 text-sm">
          Built with React, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
}
