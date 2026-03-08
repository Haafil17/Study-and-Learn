import { useParams, Link } from "react-router-dom";
import { getSubject } from "@/data/subjects";
import { motion } from "framer-motion";
import { ArrowRight, Clock, BookOpen } from "lucide-react";

export default function SubjectPage() {
  const { subjectKey } = useParams<{ subjectKey: string }>();
  const subject = getSubject(subjectKey || "");

  if (!subject) {
    return <div className="p-8 text-center text-muted-foreground">Subject not found.</div>;
  }

  return (
    <div className="px-6 py-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-start gap-4 mb-8">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${subject.badgeClass}`}>
          <subject.icon size={28} />
        </div>
        <div>
          <h1 className="font-heading text-3xl font-extrabold">{subject.name}</h1>
          <p className="text-sm text-muted-foreground mt-1">{subject.publisher} • {subject.book}</p>
          <p className="text-sm text-muted-foreground mt-1">{subject.description}</p>
        </div>
      </div>

      {/* Chapters */}
      <h2 className="font-heading text-lg font-bold mb-4 flex items-center gap-2">
        <BookOpen size={18} className="text-primary" /> Chapters ({subject.chapters.length})
      </h2>
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
        className="space-y-3"
      >
        {subject.chapters.map((chapter) => (
          <motion.div
            key={chapter.id}
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
          >
            <Link
              to={`/subject/${subject.key}/chapter/${chapter.id}`}
              className="block bg-card rounded-xl p-5 card-elevated group"
            >
              <div className="flex items-start gap-4">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold ${subject.badgeClass}`}>
                  {chapter.number}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold group-hover:text-primary transition-colors">
                    {chapter.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{chapter.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {chapter.keyTopics.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-full bg-muted text-[11px] text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={12} /> {chapter.estimatedTime}
                  </span>
                  <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
