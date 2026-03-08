import { useState } from "react";
import { GraduationCap, ChevronDown, ChevronUp, FileText, Target, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface ExamTip {
  category: string;
  tip: string;
}

interface SolvedExample {
  question: string;
  solution: string;
  marks?: number;
}

interface Props {
  examTips: ExamTip[];
  solvedExamples: SolvedExample[];
  markingScheme?: string[];
}

export default function ExamPrepSection({ examTips, solvedExamples, markingScheme }: Props) {
  const [expandedExample, setExpandedExample] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {/* Exam Tips */}
      <div className="bg-card rounded-xl p-6 card-elevated border-l-4 border-secondary">
        <h3 className="font-heading text-base font-bold flex items-center gap-2 mb-4">
          <Target size={16} className="text-secondary" /> ICSE Exam Tips
        </h3>
        <div className="space-y-3">
          {examTips.map((tip, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="px-2 py-0.5 rounded-full bg-secondary/15 text-secondary text-[10px] font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5">
                {tip.category}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">{tip.tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Marking Scheme */}
      {markingScheme && markingScheme.length > 0 && (
        <div className="bg-card rounded-xl p-6 card-elevated border-l-4 border-primary">
          <h3 className="font-heading text-base font-bold flex items-center gap-2 mb-3">
            <Award size={16} className="text-primary" /> Marking Scheme Guide
          </h3>
          <ul className="space-y-2">
            {markingScheme.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="text-primary mt-0.5 font-bold">•</span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Solved Examples */}
      <div className="bg-card rounded-xl p-6 card-elevated">
        <h3 className="font-heading text-base font-bold flex items-center gap-2 mb-4">
          <FileText size={16} className="text-accent" /> Solved ICSE Board Examples
        </h3>
        <div className="space-y-3">
          {solvedExamples.map((ex, i) => (
            <div key={i} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedExample(expandedExample === i ? null : i)}
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/15 text-accent text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium truncate">{ex.question}</span>
                  {ex.marks && (
                    <span className="flex-shrink-0 text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-semibold">
                      [{ex.marks} marks]
                    </span>
                  )}
                </div>
                {expandedExample === i ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
              <AnimatePresence>
                {expandedExample === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-1 border-t border-border bg-muted/20">
                      <p className="text-sm text-foreground whitespace-pre-line leading-relaxed">{ex.solution}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
