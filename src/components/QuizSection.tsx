import { useState } from "react";
import { QuizQuestion } from "@/data/quizzes";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  questions: QuizQuestion[];
}

export default function QuizSection({ questions }: Props) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[currentQ];

  const handleSelect = (idx: number) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);
    if (idx === q.correctIndex) setScore((s) => s + 1);
  };

  const next = () => {
    if (currentQ + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentQ((c) => c + 1);
      setSelected(null);
      setShowResult(false);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="bg-card rounded-xl p-8 card-elevated text-center">
        <h3 className="font-heading text-2xl font-bold mb-2">Quiz Complete!</h3>
        <p className="text-4xl font-heading font-extrabold text-primary mb-1">{pct}%</p>
        <p className="text-sm text-muted-foreground mb-4">{score} / {questions.length} correct</p>
        <button onClick={restart} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold">
          <RotateCcw size={14} /> Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl p-6 card-elevated">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-muted-foreground">Question {currentQ + 1} of {questions.length}</span>
        <span className="text-xs font-medium text-primary">Score: {score}</span>
      </div>
      <div className="w-full bg-muted rounded-full h-1.5 mb-5">
        <div className="bg-primary h-1.5 rounded-full transition-all" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
      </div>

      <h3 className="font-heading font-semibold text-base mb-4">{q.question}</h3>

      <div className="space-y-2">
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            className={cn(
              "w-full text-left px-4 py-3 rounded-lg text-sm border transition-all",
              showResult && idx === q.correctIndex && "border-primary bg-primary/10",
              showResult && idx === selected && idx !== q.correctIndex && "border-destructive bg-destructive/10",
              !showResult && selected === null && "border-border hover:border-primary/40 hover:bg-muted/50",
              !showResult && "cursor-pointer"
            )}
          >
            <span className="flex items-center gap-2">
              {showResult && idx === q.correctIndex && <CheckCircle2 size={16} className="text-primary" />}
              {showResult && idx === selected && idx !== q.correctIndex && <XCircle size={16} className="text-destructive" />}
              {opt}
            </span>
          </button>
        ))}
      </div>

      {showResult && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
          <p className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3">{q.explanation}</p>
          <button onClick={next} className="mt-3 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold">
            {currentQ + 1 >= questions.length ? "See Results" : "Next Question"}
          </button>
        </motion.div>
      )}
    </div>
  );
}
