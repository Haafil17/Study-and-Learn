import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { subjects } from "@/data/subjects";
import {
  BookOpen, Home, LayoutDashboard, Gamepad2, Lightbulb, Search,
  Menu, X, ChevronDown, ChevronRight, GraduationCap, Sun, Moon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/games", label: "Learning Games", icon: Gamepad2 },
    { path: "/analogies", label: "Learn with Analogies", icon: Lightbulb },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isSubjectActive = (key: string) => location.pathname.startsWith(`/subject/${key}`);

  return (
    <div className="min-h-screen flex w-full">
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden lg:flex flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-300 fixed inset-y-0 left-0 z-40",
          sidebarOpen ? "w-72" : "w-16"
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 p-4 border-b border-sidebar-border">
          <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-5 h-5 text-sidebar-primary-foreground" />
          </div>
          {sidebarOpen && (
            <div className="overflow-hidden">
              <h1 className="font-heading font-bold text-sm text-sidebar-foreground">EduVerse</h1>
              <p className="text-[10px] text-sidebar-foreground/60">Class 8 • ICSE</p>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="ml-auto text-sidebar-foreground/60 hover:text-sidebar-foreground p-1"
          >
            {sidebarOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                isActive(item.path)
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon size={18} />
              {sidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}

          {sidebarOpen && (
            <div className="pt-4 pb-2 px-3">
              <span className="text-[10px] uppercase tracking-wider text-sidebar-foreground/40 font-semibold">Subjects</span>
            </div>
          )}

          {subjects.map((subject) => (
            <div key={subject.key}>
              <button
                onClick={() => {
                  if (sidebarOpen) setExpandedSubject(expandedSubject === subject.key ? null : subject.key);
                }}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors w-full",
                  isSubjectActive(subject.key)
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <subject.icon size={18} className={subject.colorClass} />
                {sidebarOpen && (
                  <>
                    <span className="flex-1 text-left">{subject.name}</span>
                    {expandedSubject === subject.key ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  </>
                )}
              </button>

              {sidebarOpen && expandedSubject === subject.key && (
                <div className="ml-7 mt-1 space-y-0.5">
                  <Link
                    to={`/subject/${subject.key}`}
                    className="block px-3 py-1.5 text-xs text-sidebar-foreground/60 hover:text-sidebar-foreground rounded-md hover:bg-sidebar-accent transition-colors"
                  >
                    All Chapters
                  </Link>
                  {subject.chapters.slice(0, 5).map((ch) => (
                    <Link
                      key={ch.id}
                      to={`/subject/${subject.key}/chapter/${ch.id}`}
                      className={cn(
                        "block px-3 py-1.5 text-xs rounded-md transition-colors",
                        location.pathname.includes(ch.id)
                          ? "text-sidebar-primary bg-sidebar-accent"
                          : "text-sidebar-foreground/50 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                      )}
                    >
                      {ch.number}. {ch.title.length > 22 ? ch.title.slice(0, 22) + "…" : ch.title}
                    </Link>
                  ))}
                  {subject.chapters.length > 5 && (
                    <Link
                      to={`/subject/${subject.key}`}
                      className="block px-3 py-1.5 text-[11px] text-sidebar-primary hover:underline"
                    >
                      + {subject.chapters.length - 5} more
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground z-40 lg:hidden"
              onClick={() => setMobileSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed inset-y-0 left-0 w-72 bg-sidebar text-sidebar-foreground z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex items-center gap-3 p-4 border-b border-sidebar-border">
                <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-sidebar-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-heading font-bold text-sm">EduVerse</h1>
                  <p className="text-[10px] text-sidebar-foreground/60">Class 8 • ICSE</p>
                </div>
                <button onClick={() => setMobileSidebarOpen(false)} className="ml-auto p-1"><X size={18} /></button>
              </div>
              <nav className="py-3 px-2 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileSidebarOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm",
                      isActive(item.path) ? "bg-sidebar-primary text-sidebar-primary-foreground" : "text-sidebar-foreground/70 hover:bg-sidebar-accent"
                    )}
                  >
                    <item.icon size={18} /><span>{item.label}</span>
                  </Link>
                ))}
                <div className="pt-4 pb-2 px-3">
                  <span className="text-[10px] uppercase tracking-wider text-sidebar-foreground/40 font-semibold">Subjects</span>
                </div>
                {subjects.map((s) => (
                  <Link
                    key={s.key}
                    to={`/subject/${s.key}`}
                    onClick={() => setMobileSidebarOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent"
                  >
                    <s.icon size={18} className={s.colorClass} />
                    <span>{s.name}</span>
                  </Link>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className={cn("flex-1 flex flex-col transition-all duration-300", sidebarOpen ? "lg:ml-72" : "lg:ml-16")}>
        {/* Header */}
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border h-14 flex items-center px-4 gap-4">
          <button onClick={() => setMobileSidebarOpen(true)} className="lg:hidden p-1.5 rounded-lg hover:bg-muted">
            <Menu size={20} />
          </button>
          <div className="flex-1 max-w-md relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search subjects, chapters, topics…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-lg bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary/50 placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 text-secondary">
              <BookOpen size={14} />
              <span className="text-xs font-medium">7 Subjects</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
