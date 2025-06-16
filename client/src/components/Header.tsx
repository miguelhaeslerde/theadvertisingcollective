import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'AGENCY MAXXING', href: '/agency-maxxing' },
    { name: '2025 GROWTH STRATEGY', href: '/growth-strategy' },
    { name: 'Blog', href: '/blog' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && location === '/') return true;
    if (href !== '/' && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="bg-brightest dark:bg-main-dark shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <div className="font-bowlby text-xl text-gray-900 dark:text-white">TAC</div>
            <div className="ml-2 text-sm text-gray-600 dark:text-gray-300 font-medium">
              The Advertising Collective
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:text-accent-yellow'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Dark Mode Toggle */}
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4 text-gray-600 dark:text-gray-300" />
              <Button
                onClick={toggleTheme}
                variant="outline"
                size="sm"
                className={`relative h-6 w-11 rounded-full p-0 border-2 ${
                  theme === 'dark' 
                    ? 'bg-accent-yellow border-accent-yellow' 
                    : 'bg-gray-200 border-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                    theme === 'dark' ? 'translate-x-5' : 'translate-x-0.5'
                  }`}
                />
              </Button>
              <Moon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Dark Mode Toggle */}
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="sm"
              className="text-gray-600 dark:text-gray-300"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800'
                      : 'text-gray-600 dark:text-gray-300 hover:text-accent-yellow hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
