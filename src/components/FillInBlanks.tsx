import { useState } from "react";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FillBlankQuestion {
  sentence: string; // Use ___ for blank
  answer: string;
  hint?: string;
}

interface Props {
  questions: FillBlankQuestion[];
}

export default function FillInBlanks({ questions }: Props) {
  const [answers, setAnswers] = useState<string[]>(new Array(questions.length).fill(""));
  const [checked, setChecked] = useState<boolean[]>(new Array(questions.length).fill(false));
  const [showHints, setShowHints] = useState<boolean[]>(new Array(questions.length).fill(false));

  const checkAnswer = (idx: number) => {
    const newChecked = [...checked];
    newChecked[idx] = true;
    setChecked(newChecked);
  };

  const isCorrect = (idx: number) => {
    return answers[idx].trim().toLowerCase() === questions[idx].answer.toLowerCase();
  };

  const reset = () => {
    setAnswers(new Array(questions.length).fill(""));
    setChecked(new Array(questions.length).fill(false));
    setShowHints(new Array(questions.length).fill(false));
  };

  const score = checked.filter((c, i) => c && isCorrect(i)).length;
  const totalChecked = checked.filter(Boolean).length;

  return (
    <div className="bg-card rounded-xl p-6 card-elevated">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-muted-foreground">Fill in the blanks</span>
        {totalChecked > 0 && (
          <span className="text-xs font-medium text-primary">{score}/{totalChecked} correct</span>
        )}
      </div>
      <div className="space-y-4">
        {questions.map((q, i) => {
          const parts = q.sentence.split("___");
          return (
            <div key={i} className="space-y-1.5">
              <div className="flex items-center flex-wrap gap-1 text-sm">
                <span className="text-muted-foreground font-medium mr-1">{i + 1}.</span>
                {parts.map((part, pi) => (
                  <span key={pi} className="inline-flex items-center gap-1">
                    <span className="text-muted-foreground">{part}</span>
                    {pi < parts.length - 1 && (
                      <input
                        type="text"
                        value={answers[i]}
                        onChange={(e) => {
                          const newAnswers = [...answers];
                          newAnswers[i] = e.target.value;
                          setAnswers(newAnswers);
                        }}
                        onKeyDown={(e) => e.key === "Enter" && checkAnswer(i)}
                        disabled={checked[i]}
                        className={cn(
                          "inline-block w-28 px-2 py-0.5 rounded border text-sm text-center transition-colors",
                          checked[i] && isCorrect(i) && "border-primary bg-primary/10 text-primary",
                          checked[i] && !isCorrect(i) && "border-destructive bg-destructive/10 text-destructive",
                          !checked[i] && "border-border bg-background focus:ring-1 focus:ring-ring"
                        )}
                        placeholder="answer"
                      />
                    )}
                  </span>
                ))}
                {!checked[i] && (
                  <button
                    onClick={() => checkAnswer(i)}
                    className="ml-2 px-2 py-0.5 text-[10px] rounded bg-primary text-primary-foreground font-semibold"
                  >
                    Check
                  </button>
                )}
                {checked[i] && isCorrect(i) && <CheckCircle2 size={14} className="text-primary ml-1" />}
                {checked[i] && !isCorrect(i) && (
                  <span className="ml-1 flex items-center gap-1">
                    <XCircle size={14} className="text-destructive" />
                    <span className="text-xs text-primary font-medium">Ans: {q.answer}</span>
                  </span>
                )}
              </div>
              {q.hint && !checked[i] && (
                <button
                  onClick={() => {
                    const newHints = [...showHints];
                    newHints[i] = !newHints[i];
                    setShowHints(newHints);
                  }}
                  className="text-[10px] text-muted-foreground hover:text-foreground ml-5"
                >
                  {showHints[i] ? `Hint: ${q.hint}` : "💡 Show hint"}
                </button>
              )}
            </div>
          );
        })}
      </div>
      {totalChecked === questions.length && (
        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
          <span className="text-sm font-semibold">Score: {score}/{questions.length}</span>
          <button onClick={reset} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold">
            <RotateCcw size={12} /> Try Again
          </button>
        </div>
      )}
    </div>
  );
}
