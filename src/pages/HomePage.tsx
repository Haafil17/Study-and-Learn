import { Link } from "react-router-dom";
import { subjects } from "@/data/subjects";
import { motion } from "framer-motion";
import {
  ArrowRight, BookOpen, Brain, Gamepad2, Lightbulb, Star,
  TrendingUp, Zap,
} from "lucide-react";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function HomePage() {
  return (
    <div className="pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
              <Zap size={12} /> Class 8 • ICSE / Cambridge
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
              Your Digital <span className="gradient-text">Learning Universe</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore 7 subjects, 55+ chapters, interactive quizzes, learning games, and
              unique car & airplane analogies — all designed to make Class 8 learning fun and effective.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/subject/biology"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition"
              >
                Start Learning <ArrowRight size={16} />
              </Link>
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-muted text-foreground font-semibold text-sm hover:bg-muted/80 transition"
              >
                <TrendingUp size={16} /> My Dashboard
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 -mt-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Subjects", value: "7", icon: BookOpen },
            { label: "Chapters", value: "55+", icon: Star },
            { label: "Quizzes", value: "100+", icon: Brain },
            { label: "Analogies", value: "10+", icon: Lightbulb },
          ].map((stat) => (
            <div key={stat.label} className="bg-card rounded-xl p-4 card-elevated text-center">
              <stat.icon size={20} className="mx-auto text-primary mb-2" />
              <p className="font-heading text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="px-6 py-14">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl font-bold mb-2">Explore Subjects</h2>
          <p className="text-muted-foreground text-sm mb-8">Choose a subject to dive into chapters, notes, quizzes, and more.</p>
          <motion.div variants={container} initial="hidden" animate="show" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {subjects.map((subject) => (
              <motion.div key={subject.key} variants={item}>
                <Link
                  to={`/subject/${subject.key}`}
                  className="block bg-card rounded-xl p-5 card-elevated group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${subject.badgeClass}`}>
                      <subject.icon size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-bold text-base group-hover:text-primary transition-colors">{subject.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{subject.publisher} • {subject.chapters.length} chapters</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">{subject.description}</p>
                  <div className="flex items-center gap-1.5 mt-4 text-primary text-xs font-medium group-hover:gap-2.5 transition-all">
                    Explore <ArrowRight size={13} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-10 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl font-bold mb-8 text-center">Learning Made Fun & Interactive</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Lightbulb, title: "Car & Airplane Analogies", desc: "Understand biology and physics concepts through relatable vehicle analogies." },
              { icon: Gamepad2, title: "Interactive Games", desc: "Flashcards, drag-and-drop, puzzles, and timed quizzes to reinforce learning." },
              { icon: Brain, title: "MCQ Quizzes", desc: "Test yourself with multiple-choice questions and get instant explanations." },
              { icon: BookOpen, title: "Detailed Notes", desc: "Clear explanations, key definitions, diagrams, and revision summaries." },
              { icon: Star, title: "Did You Know?", desc: "Fun facts and real-life examples that make learning memorable." },
              { icon: TrendingUp, title: "Study Dashboard", desc: "Track progress, maintain streaks, earn badges, and plan your studies." },
            ].map((f) => (
              <div key={f.title} className="bg-card rounded-xl p-5 card-elevated">
                <f.icon size={22} className="text-primary mb-3" />
                <h3 className="font-heading font-semibold text-sm mb-1">{f.title}</h3>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
