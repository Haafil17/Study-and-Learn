import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

interface Card {
  front: string;
  back: string;
}

interface Props {
  cards: Card[];
}

export default function FlashcardDeck({ cards }: Props) {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const next = () => { setCurrent((c) => (c + 1) % cards.length); setFlipped(false); };
  const prev = () => { setCurrent((c) => (c - 1 + cards.length) % cards.length); setFlipped(false); };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        onClick={() => setFlipped(!flipped)}
        className="w-full max-w-md h-48 cursor-pointer perspective-1000"
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.4 }}
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <div className="absolute inset-0 bg-card rounded-xl card-elevated flex items-center justify-center p-6 backface-hidden border-2 border-primary/20">
            <div className="text-center">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2 block">Term</span>
              <p className="font-heading text-xl font-bold">{cards[current].front}</p>
              <span className="text-[10px] text-muted-foreground mt-3 block">Tap to flip</span>
            </div>
          </div>
          {/* Back */}
          <div
            className="absolute inset-0 bg-primary/5 rounded-xl card-elevated flex items-center justify-center p-6 border-2 border-primary/20"
            style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
          >
            <div className="text-center">
              <span className="text-[10px] uppercase tracking-wider text-primary mb-2 block">Definition</span>
              <p className="text-sm leading-relaxed">{cards[current].back}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={prev} className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition"><ChevronLeft size={18} /></button>
        <span className="text-sm text-muted-foreground">{current + 1} / {cards.length}</span>
        <button onClick={next} className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition"><ChevronRight size={18} /></button>
      </div>
    </div>
  );
}
