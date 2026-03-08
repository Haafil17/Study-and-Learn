import { Analogy } from "@/data/analogies";
import { Car, Plane } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  analogy: Analogy;
}

export default function AnalogyCard({ analogy }: Props) {
  const [expanded, setExpanded] = useState(false);
  const isCar = analogy.analogyType === "car";

  return (
    <div className={cn(
      "rounded-xl border overflow-hidden transition-all",
      isCar ? "border-secondary/30 bg-secondary/5" : "border-physics/30 bg-physics/5"
    )}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-5 flex items-start gap-4"
      >
        <div className={cn(
          "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
          isCar ? "bg-secondary/15 text-secondary" : "bg-physics/15 text-physics"
        )}>
          {isCar ? <Car size={20} /> : <Plane size={20} />}
        </div>
        <div className="flex-1">
          <span className={cn("text-[10px] uppercase tracking-wider font-semibold", isCar ? "text-secondary" : "text-physics")}>
            {isCar ? "Car Analogy" : "Airplane Analogy"}
          </span>
          <h3 className="font-heading font-bold text-sm mt-0.5">{analogy.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{analogy.explanation}</p>
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 grid sm:grid-cols-2 gap-3">
              <div className="bg-card rounded-lg p-4">
                <p className="text-[10px] uppercase tracking-wider font-semibold text-primary mb-1">🔬 The Concept</p>
                <p className="text-xs text-muted-foreground">{analogy.conceptSide}</p>
              </div>
              <div className="bg-card rounded-lg p-4">
                <p className="text-[10px] uppercase tracking-wider font-semibold mb-1" style={{ color: isCar ? "hsl(var(--secondary))" : "hsl(var(--physics))" }}>
                  {isCar ? "🚗 The Car" : "✈️ The Airplane"}
                </p>
                <p className="text-xs text-muted-foreground">{analogy.analogySide}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
