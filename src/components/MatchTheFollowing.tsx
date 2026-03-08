import { useState, useCallback } from "react";
import { CheckCircle2, XCircle, RotateCcw, Shuffle } from "lucide-react";
import { cn } from "@/lib/utils";

interface MatchPair {
  left: string;
  right: string;
}

interface Props {
  pairs: MatchPair[];
  title?: string;
}

export default function MatchTheFollowing({ pairs, title }: Props) {
  const shuffleArray = useCallback((arr: string[]) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  const [shuffledRight, setShuffledRight] = useState(() => shuffleArray(pairs.map(p => p.right)));
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matches, setMatches] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);

  const handleLeftClick = (idx: number) => {
    if (checked) return;
    setSelectedLeft(idx);
  };

  const handleRightClick = (idx: number) => {
    if (checked || selectedLeft === null) return;
    const newMatches = { ...matches };
    // Remove previous match for this left
    Object.keys(newMatches).forEach(k => {
      if (Number(k) === selectedLeft) delete newMatches[Number(k)];
    });
    // Remove previous match for this right
    Object.keys(newMatches).forEach(k => {
      if (newMatches[Number(k)] === idx) delete newMatches[Number(k)];
    });
    newMatches[selectedLeft] = idx;
    setMatches(newMatches);
    setSelectedLeft(null);
  };

  const checkAnswers = () => setChecked(true);

  const isCorrect = (leftIdx: number) => {
    if (matches[leftIdx] === undefined) return false;
    return shuffledRight[matches[leftIdx]] === pairs[leftIdx].right;
  };

  const score = Object.keys(matches).filter(k => isCorrect(Number(k))).length;

  const reset = () => {
    setShuffledRight(shuffleArray(pairs.map(p => p.right)));
    setSelectedLeft(null);
    setMatches({});
    setChecked(false);
  };

  return (
    <div className="bg-card rounded-xl p-6 card-elevated">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold">{title || "Match the Following"}</span>
        {checked && <span className="text-xs font-medium text-primary">{score}/{pairs.length} correct</span>}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {pairs.map((p, i) => (
            <button
              key={i}
              onClick={() => handleLeftClick(i)}
              className={cn(
                "w-full text-left px-3 py-2.5 rounded-lg text-sm border transition-all",
                selectedLeft === i && "border-primary bg-primary/10 ring-1 ring-primary",
                matches[i] !== undefined && !checked && "border-accent bg-accent/5",
                checked && isCorrect(i) && "border-primary bg-primary/10",
                checked && !isCorrect(i) && matches[i] !== undefined && "border-destructive bg-destructive/10",
                !checked && selectedLeft !== i && matches[i] === undefined && "border-border hover:border-primary/40"
              )}
            >
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-muted flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                  {String.fromCharCode(65 + i)}
                </span>
                {p.left}
                {checked && isCorrect(i) && <CheckCircle2 size={14} className="text-primary ml-auto" />}
                {checked && !isCorrect(i) && matches[i] !== undefined && <XCircle size={14} className="text-destructive ml-auto" />}
              </span>
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {shuffledRight.map((item, i) => {
            const matchedBy = Object.entries(matches).find(([, v]) => v === i);
            return (
              <button
                key={i}
                onClick={() => handleRightClick(i)}
                className={cn(
                  "w-full text-left px-3 py-2.5 rounded-lg text-sm border transition-all",
                  matchedBy && !checked && "border-accent bg-accent/5",
                  checked && matchedBy && isCorrect(Number(matchedBy[0])) && "border-primary bg-primary/10",
                  checked && matchedBy && !isCorrect(Number(matchedBy[0])) && "border-destructive bg-destructive/10",
                  !matchedBy && "border-border hover:border-primary/40",
                  selectedLeft !== null && "cursor-pointer"
                )}
              >
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-muted flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  {item}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-3">
        {!checked && Object.keys(matches).length === pairs.length && (
          <button onClick={checkAnswers} className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold">
            Check Answers
          </button>
        )}
        {checked && (
          <button onClick={reset} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold">
            <RotateCcw size={14} /> Try Again
          </button>
        )}
        {!checked && Object.keys(matches).length < pairs.length && (
          <p className="text-xs text-muted-foreground">Click a term on the left, then its match on the right</p>
        )}
      </div>
    </div>
  );
}
