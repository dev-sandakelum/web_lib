export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {" "}
      {children}
      <footer className="border-t border-slate-200 bg-white px-3 py-3 sm:px-6 sm:py-6 text-center shadow-sm bottom-0 fixed w-full z-100">
        <p className="text-base font-bold text-slate-900">
          AI Questions Generator v{process.env.NEXT_PUBLIC_QUESTION_APP_VERSION}
        </p>
        <p className="text-xs font-medium mt-1 text-blue-500">
          Created by Hasitha Sandakelum
        </p>
      </footer>
    </>
  );
}
