
import type { Metadata } from 'next';
import { Geist } from 'next/font/google'; // Using Geist as specified in original
import './globals.css';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Toaster } from '@/components/ui/toaster';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});


export const metadata: Metadata = {
  title: "Aku's Digital Nexus | Full Stack Developer & Data Scientist",
  description: "Portfolio of Aku Sarma, showcasing projects, skills, and experience in full stack development and data science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <body className="antialiased flex flex-col min-h-screen bg-background text-foreground" suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer />
          <Toaster />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
