interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
      <div className="h-screen w-screen overflow-hidden p-10 container">
        <div>{children}</div>
      </div>
    </div>
  );
}
