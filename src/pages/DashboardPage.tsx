import { useState } from "react";
import { subjects } from "@/data/subjects";
import { Link } from "react-router-dom";
import {
  TrendingUp, Flame, Trophy, BookOpen, Calendar, CheckSquare,
  Target, Clock, Star,
} from "lucide-react";
import { motion } from "framer-motion";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function DashboardPage() {
  const [studyStreak] = useState(7);
  const [completedChapters] = useState(12);
  const totalChapters = subjects.reduce((sum, s) => sum + s.chapters.length, 0);
  const progress = Math.round((completedChapters / totalChapters) * 100);

  const badges = [
    { name: "First Chapter", icon: BookOpen, earned: true },
    { name: "Quiz Master", icon: Star, earned: true },
    { name: "Week Streak", icon: Flame, earned: true },
    { name: "All Subjects", icon: Trophy, earned: false },
    { name: "Speed Solver", icon: Clock, earned: false },
    { name: "Perfect Score", icon: Target, earned: false },
  ];

  const todayPlan = [
    { time: "9:00 AM", subject: "Mathematics", chapter: "Rational Numbers", done: true },
    { time: "10:30 AM", subject: "Biology", chapter: "The Circulatory System", done: true },
    { time: "12:00 PM", subject: "Physics", chapter: "Force and Pressure", done: false },
    { time: "2:00 PM", subject: "Chemistry", chapter: "Structure of the Atom", done: false },
    { time: "4:00 PM", subject: "Computer Studies", chapter: "Introduction to Python", done: false },
  ];

  return (
    <div className="px-6 py-8 max-w-5xl mx-auto pb-16">
      <h1 className="font-heading text-3xl font-extrabold mb-2">My Dashboard</h1>
      <p className="text-muted-foreground text-sm mb-8">Track your learning progress and stay on track.</p>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-card rounded-xl p-5 card-elevated">
          <Flame size={20} className="text-secondary mb-2" />
          <p className="font-heading text-3xl font-extrabold">{studyStreak}</p>
          <p className="text-xs text-muted-foreground">Day Streak 🔥</p>
        </div>
        <div className="bg-card rounded-xl p-5 card-elevated">
          <TrendingUp size={20} className="text-primary mb-2" />
          <p className="font-heading text-3xl font-extrabold">{progress}%</p>
          <p className="text-xs text-muted-foreground">Overall Progress</p>
        </div>
        <div className="bg-card rounded-xl p-5 card-elevated">
          <CheckSquare size={20} className="text-biology mb-2" />
          <p className="font-heading text-3xl font-extrabold">{completedChapters}</p>
          <p className="text-xs text-muted-foreground">Chapters Done</p>
        </div>
        <div className="bg-card rounded-xl p-5 card-elevated">
          <Trophy size={20} className="text-mathematics mb-2" />
          <p className="font-heading text-3xl font-extrabold">{badges.filter(b => b.earned).length}</p>
          <p className="text-xs text-muted-foreground">Badges Earned</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Weekly Activity */}
          <div className="bg-card rounded-xl p-6 card-elevated">
            <h2 className="font-heading font-bold mb-4 flex items-center gap-2">
              <Calendar size={18} className="text-primary" /> Weekly Activity
            </h2>
            <div className="flex items-end gap-3 h-32">
              {weekDays.map((day, i) => {
                const h = [60, 80, 45, 90, 70, 100, 50][i];
                return (
                  <div key={day} className="flex-1 flex flex-col items-center gap-1">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className="w-full rounded-t-md bg-primary/20 relative"
                    >
                      <div className="absolute bottom-0 left-0 right-0 rounded-t-md bg-primary" style={{ height: `${h}%` }} />
                    </motion.div>
                    <span className="text-[10px] text-muted-foreground">{day}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Subject Progress */}
          <div className="bg-card rounded-xl p-6 card-elevated">
            <h2 className="font-heading font-bold mb-4">Subject Progress</h2>
            <div className="space-y-3">
              {subjects.map((s) => {
                const pct = Math.floor(Math.random() * 60) + 10;
                return (
                  <Link to={`/subject/${s.key}`} key={s.key} className="block group">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium flex items-center gap-2 group-hover:text-primary transition-colors">
                        <s.icon size={14} className={s.colorClass} /> {s.name}
                      </span>
                      <span className="text-xs text-muted-foreground">{pct}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.6 }}
                        className="h-2 rounded-full"
                        style={{ backgroundColor: `hsl(var(--${s.key}))` }}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Today's Plan */}
          <div className="bg-card rounded-xl p-6 card-elevated">
            <h2 className="font-heading font-bold mb-4 flex items-center gap-2">
              <Target size={18} className="text-secondary" /> Today's Plan
            </h2>
            <div className="space-y-3">
              {todayPlan.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 ${item.done ? "border-primary bg-primary" : "border-border"}`}>
                    {item.done && <CheckSquare size={10} className="text-primary-foreground" />}
                  </div>
                  <div className={item.done ? "opacity-60" : ""}>
                    <p className={`text-sm font-medium ${item.done ? "line-through" : ""}`}>{item.chapter}</p>
                    <p className="text-[11px] text-muted-foreground">{item.time} • {item.subject}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div className="bg-card rounded-xl p-6 card-elevated">
            <h2 className="font-heading font-bold mb-4 flex items-center gap-2">
              <Trophy size={18} className="text-mathematics" /> Badges
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {badges.map((badge) => (
                <div key={badge.name} className={`flex flex-col items-center text-center ${!badge.earned ? "opacity-30" : ""}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${badge.earned ? "bg-secondary/15 text-secondary" : "bg-muted text-muted-foreground"}`}>
                    <badge.icon size={18} />
                  </div>
                  <span className="text-[10px] mt-1">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
