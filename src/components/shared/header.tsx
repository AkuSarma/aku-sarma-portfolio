
"use client";

import Link from 'next/link';
import { Menu, X, Code2Icon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { akuSarmaData } from '@/lib/resume-data';
import type { NavItem } from '@/lib/resume-data';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ item, mobile = false }: { item: NavItem, mobile?: boolean }) => (
    <Link
      href={item.href}
      passHref
      legacyBehavior={mobile}
    >
      {mobile ? (
          <SheetClose asChild>
            <Button
            variant="ghost"
            className={cn(
              "w-full justify-start text-lg py-3 transition-colors duration-200",
              pathname === item.href ? "text-primary font-semibold bg-primary/10" : "text-foreground hover:text-primary hover:bg-primary/5"
            )}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.label}
          </Button>
        </SheetClose>
      ) : (
        <Button
          variant="ghost"
          asChild
          className={cn(
            "transition-colors duration-200",
            pathname === item.href ? "text-primary font-semibold bg-primary/10" : "text-foreground hover:text-primary hover:bg-primary/5"
          )}
        >
          <a><item.icon className="mr-2 h-4 w-4 md:hidden lg:inline-block" />{item.label}</a>
        </Button>
      )}
    </Link>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-background/30 backdrop-blur-sm" // Ensure some background even when not scrolled for theme toggle visibility
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" passHref legacyBehavior>
          <a className="flex items-center text-2xl font-bold text-primary hover:text-accent transition-colors duration-200">
            <Code2Icon className="mr-2 h-8 w-8" />
            Aku Sarma
          </a>
        </Link>

        <nav className="hidden md:flex items-center space-x-2">
          {akuSarmaData.navItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
          {akuSarmaData.socialLinks.slice(0,2).map((link) => ( 
            <Button key={link.label} variant="ghost" size="icon" asChild className="text-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-200">
              <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                <link.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary transition-colors duration-200">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6 shadow-xl">
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-center mb-6">
                   <Link href="/" passHref legacyBehavior>
                    <a className="flex items-center text-xl font-bold text-primary" onClick={() => setIsSheetOpen(false)}>
                      <Code2Icon className="mr-2 h-7 w-7" />
                      Aku's Digital Nexus
                    </a>
                  </Link>
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                  </SheetClose>
                </div>

                {akuSarmaData.navItems.map((item) => (
                   <NavLink key={item.href} item={item} mobile={true} />
                ))}
                <div className="pt-6">
                  <p className="text-sm text-muted-foreground mb-2 px-2">Connect</p>
                  <div className="flex space-x-3">
                  {akuSarmaData.socialLinks.map((link) => (
                    <Button key={link.label} variant="outline" size="icon" asChild className="text-foreground hover:text-primary hover:border-primary transition-colors duration-200">
                      <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} onClick={() => setIsSheetOpen(false)}>
                        <link.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
