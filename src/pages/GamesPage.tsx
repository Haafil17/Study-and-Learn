import { useState } from "react";
import { Gamepad2, Brain, Puzzle, Zap, RotateCcw, CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Simple word scramble game
const scienceWords = [
  { word: "NUCLEUS", hint: "Control center of the cell", subject: "Biology" },
  { word: "FRICTION", hint: "Force opposing motion", subject: "Physics" },
  { word: "ELECTRON", hint: "Negatively charged particle", subject: "Chemistry" },
  { word: "PHOTOSYNTHESIS", hint: "How plants make food", subject: "Biology" },
  { word: "VELOCITY", hint: "Speed with direction", subject: "Physics" },
  { word: "ALGORITHM", hint: "Step-by-step instructions", subject: "Computer" },
  { word: "LATITUDE", hint: "Angular distance from equator", subject: "Geography" },
  { word: "DEMOCRACY", hint: "Government by the people", subject: "History" },
];

function scramble(word: string) {
  return word.split("").sort(() => Math.random() - 0.5).join("");
}

export default function GamesPage() {
  const [currentWord, setCurrentWord] = useState(0);
  const [guess, setGuess] = useState("");
  const [scrambledWord, setScrambledWord] = useState(scramble(scienceWords[0].word));
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [gameScore, setGameScore] = useState(0);

  const word = scienceWords[currentWord];

  const checkAnswer = () => {
    if (guess.toUpperCase().trim() === word.word) {
      setResult("correct");
      setGameScore((s) => s + 1);
    } else {
      setResult("wrong");
    }
  };

  const nextWord = () => {
    const next = (currentWord + 1) % scienceWords.length;
    setCurrentWord(next);
    setScrambledWord(scramble(scienceWords[next].word));
    setGuess("");
    setResult(null);
  };

  // Quick quiz game
  const [timedScore, setTimedScore] = useState(0);
  const [timedQ, setTimedQ] = useState(0);
  const [timedStarted, setTimedStarted] = useState(false);

  const quickQuestions = [
    { q: "What is the powerhouse of the cell?", a: "Mitochondria", opts: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Body"] },
    { q: "What is H₂O commonly known as?", a: "Water", opts: ["Salt", "Sugar", "Water", "Acid"] },
    { q: "What planet is closest to the Sun?", a: "Mercury", opts: ["Venus", "Mars", "Mercury", "Earth"] },
    { q: "What is the SI unit of force?", a: "Newton", opts: ["Joule", "Newton", "Watt", "Pascal"] },
    { q: "What does CPU stand for?", a: "Central Processing Unit", opts: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Core Processing Unit"] },
  ];

  return (
    <div className="px-6 py-8 max-w-5xl mx-auto pb-16">
      <div className="flex items-center gap-3 mb-2">
        <Gamepad2 size={28} className="text-accent" />
        <h1 className="font-heading text-3xl font-extrabold">Learning Games</h1>
      </div>
      <p className="text-muted-foreground text-sm mb-8">Fun interactive games to test and reinforce your knowledge!</p>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Word Scramble */}
        <div className="bg-card rounded-xl p-6 card-elevated">
          <h2 className="font-heading font-bold text-lg flex items-center gap-2 mb-1">
            <Puzzle size={18} className="text-secondary" /> Word Scramble
          </h2>
          <p className="text-xs text-muted-foreground mb-5">Unscramble the science term!</p>

          <div className="text-center mb-4">
            <p className="font-heading text-3xl font-extrabold tracking-[0.3em] text-primary mb-2">{scrambledWord}</p>
            <p className="text-sm text-muted-foreground">Hint: {word.hint}</p>
            <span className={`subject-badge mt-2 inline-block subject-${word.subject.toLowerCase()}`}>{word.subject}</span>
          </div>

          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
              placeholder="Your answer…"
              className="flex-1 px-4 py-2.5 rounded-lg bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button onClick={checkAnswer} className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold">
              Check
            </button>
          </div>

          {result && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={cn("p-3 rounded-lg text-sm flex items-center gap-2", result === "correct" ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive")}>
              {result === "correct" ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
              {result === "correct" ? "Correct! 🎉" : `Wrong! The answer is ${word.word}`}
            </motion.div>
          )}

          <div className="flex items-center justify-between mt-4">
            <span className="text-xs text-muted-foreground">Score: {gameScore}</span>
            <button onClick={nextWord} className="text-sm text-primary font-medium flex items-center gap-1">
              Next Word <RotateCcw size={13} />
            </button>
          </div>
        </div>

        {/* Speed Quiz */}
        <div className="bg-card rounded-xl p-6 card-elevated">
          <h2 className="font-heading font-bold text-lg flex items-center gap-2 mb-1">
            <Zap size={18} className="text-mathematics" /> Speed Quiz
          </h2>
          <p className="text-xs text-muted-foreground mb-5">Answer as fast as you can!</p>

          {!timedStarted ? (
            <div className="text-center py-8">
              <Brain size={40} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-sm text-muted-foreground mb-4">{quickQuestions.length} questions • Tap to answer fast!</p>
              <button
                onClick={() => setTimedStarted(true)}
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm"
              >
                Start Quiz
              </button>
            </div>
          ) : timedQ >= quickQuestions.length ? (
            <div className="text-center py-8">
              <p className="font-heading text-4xl font-extrabold text-primary mb-2">{timedScore}/{quickQuestions.length}</p>
              <p className="text-sm text-muted-foreground mb-4">Great effort! 🎉</p>
              <button
                onClick={() => { setTimedQ(0); setTimedScore(0); setTimedStarted(false); }}
                className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold inline-flex items-center gap-2"
              >
                <RotateCcw size={14} /> Play Again
              </button>
            </div>
          ) : (
            <div>
              <div className="flex justify-between mb-3">
                <span className="text-xs text-muted-foreground">Q{timedQ + 1}/{quickQuestions.length}</span>
                <span className="text-xs font-medium text-primary">Score: {timedScore}</span>
              </div>
              <h3 className="font-heading font-semibold mb-4">{quickQuestions[timedQ].q}</h3>
              <div className="space-y-2">
                {quickQuestions[timedQ].opts.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      if (opt === quickQuestions[timedQ].a) setTimedScore((s) => s + 1);
                      setTimedQ((q) => q + 1);
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg text-sm border border-border hover:border-primary/40 hover:bg-muted/50 transition-colors"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Match the Pairs placeholder */}
        <div className="bg-card rounded-xl p-6 card-elevated lg:col-span-2">
          <h2 className="font-heading font-bold text-lg flex items-center gap-2 mb-4">
            <Gamepad2 size={18} className="text-chemistry" /> Match the Pairs
          </h2>
          <MatchPairsGame />
        </div>
      </div>
    </div>
  );
}

// Simple match pairs game
const pairs = [
  { term: "Heart", match: "Pumps blood" },
  { term: "Lungs", match: "Gas exchange" },
  { term: "Kidney", match: "Filters blood" },
  { term: "Brain", match: "Control center" },
  { term: "Stomach", match: "Digests food" },
  { term: "Liver", match: "Produces bile" },
];

function MatchPairsGame() {
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]);
  const shuffledMatches = useState(() => [...pairs].sort(() => Math.random() - 0.5))[0];

  const handleMatchClick = (match: string) => {
    if (!selectedTerm) return;
    const correct = pairs.find((p) => p.term === selectedTerm && p.match === match);
    if (correct) {
      setMatched((m) => [...m, selectedTerm]);
    }
    setSelectedTerm(null);
  };

  const reset = () => { setMatched([]); setSelectedTerm(null); };

  return (
    <div>
      {matched.length === pairs.length ? (
        <div className="text-center py-6">
          <p className="font-heading text-xl font-bold text-primary mb-2">All Matched! 🎉</p>
          <button onClick={reset} className="text-sm text-primary font-medium flex items-center gap-1 mx-auto">
            <RotateCcw size={14} /> Play Again
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Organs</p>
            <div className="space-y-2">
              {pairs.map((p) => (
                <button
                  key={p.term}
                  onClick={() => !matched.includes(p.term) && setSelectedTerm(p.term)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg text-sm border transition-all",
                    matched.includes(p.term) && "bg-primary/10 border-primary/30 opacity-60",
                    selectedTerm === p.term && "border-primary bg-primary/5 ring-2 ring-primary/20",
                    !matched.includes(p.term) && selectedTerm !== p.term && "border-border hover:border-primary/30"
                  )}
                  disabled={matched.includes(p.term)}
                >
                  {p.term}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Functions</p>
            <div className="space-y-2">
              {shuffledMatches.map((p) => (
                <button
                  key={p.match}
                  onClick={() => handleMatchClick(p.match)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg text-sm border transition-all",
                    matched.includes(p.term) && "bg-primary/10 border-primary/30 opacity-60",
                    !matched.includes(p.term) && "border-border hover:border-secondary/30"
                  )}
                  disabled={matched.includes(p.term)}
                >
                  {p.match}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
