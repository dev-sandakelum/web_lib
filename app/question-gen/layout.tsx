export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {" "}
      {children}
      <footer className="border-t border-slate-200 bg-white px-3 py-4 sm:px-6 sm:py-6 text-center shadow-sm bottom-0 fixed w-full z-100">
        <p className="text-base font-bold text-slate-900">
          AI Questions Generator v0.1
        </p>
        <p className="text-xs font-medium mt-1 text-blue-500">
          Created by Hasitha Sandakelum
        </p>
      </footer>
    </>
  );
}
