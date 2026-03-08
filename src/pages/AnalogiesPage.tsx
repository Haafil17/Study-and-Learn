import { analogies } from "@/data/analogies";
import AnalogyCard from "@/components/AnalogyCard";
import { Lightbulb, Car, Plane } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function AnalogiesPage() {
  const [filter, setFilter] = useState<"all" | "car" | "airplane">("all");
  const filtered = filter === "all" ? analogies : analogies.filter((a) => a.analogyType === filter);

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto pb-16">
      <div className="flex items-center gap-3 mb-2">
        <Lightbulb size={28} className="text-secondary" />
        <h1 className="font-heading text-3xl font-extrabold">Learn with Analogies</h1>
      </div>
      <p className="text-muted-foreground text-sm mb-6">
        Difficult science concepts explained using cars and airplanes — making learning relatable and fun!
      </p>

      <div className="flex gap-2 mb-8">
        {(["all", "car", "airplane"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5",
              filter === f ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            {f === "car" && <Car size={14} />}
            {f === "airplane" && <Plane size={14} />}
            {f === "all" ? "All" : f === "car" ? "Car" : "Airplane"}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filtered.map((a) => (
          <AnalogyCard key={a.id} analogy={a} />
        ))}
      </div>
    </div>
  );
}
