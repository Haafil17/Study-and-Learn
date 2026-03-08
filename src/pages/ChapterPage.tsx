import { useParams, Link } from "react-router-dom";
import { getSubject, getChapter } from "@/data/subjects";
import { getChapterContent } from "@/data/chapterContent";
import { getAnalogiesForChapter } from "@/data/analogies";
import { getQuestionsForChapter } from "@/data/quizzes";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Car, Plane, Lightbulb, Brain, HelpCircle, Star, CheckCircle2 } from "lucide-react";
import QuizSection from "@/components/QuizSection";
import AnalogyCard from "@/components/AnalogyCard";
import FlashcardDeck from "@/components/FlashcardDeck";

export default function ChapterPage() {
  const { subjectKey, chapterId } = useParams<{ subjectKey: string; chapterId: string }>();
  const subject = getSubject(subjectKey || "");
  const chapter = getChapter(subjectKey || "", chapterId || "");
  const content = getChapterContent(chapterId || "");
  const chapterAnalogies = getAnalogiesForChapter(chapterId || "");
  const questions = getQuestionsForChapter(chapterId || "");

  if (!subject || !chapter) {
    return <div className="p-8 text-center text-muted-foreground">Chapter not found.</div>;
  }

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto pb-20">
      {/* Breadcrumb */}
      <Link to={`/subject/${subject.key}`} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft size={14} /> Back to {subject.name}
      </Link>

      {/* Header */}
      <div className="mb-8">
        <span className={`subject-badge ${subject.badgeClass} mb-3`}>
          <subject.icon size={13} /> {subject.name}
        </span>
        <h1 className="font-heading text-3xl font-extrabold mt-2">
          Chapter {chapter.number}: {chapter.title}
        </h1>
        <p className="text-muted-foreground mt-2">{chapter.description}</p>
      </div>

      {content ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
          {/* Introduction */}
          <section className="bg-card rounded-xl p-6 card-elevated">
            <h2 className="font-heading text-lg font-bold flex items-center gap-2 mb-3">
              <BookOpen size={18} className="text-primary" /> Introduction
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{content.introduction}</p>
          </section>

          {/* Sections */}
          {content.sections.map((sec, i) => (
            <section key={i} className="bg-card rounded-xl p-6 card-elevated">
              <h2 className="font-heading text-lg font-bold mb-3">{sec.heading}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{sec.content}</p>
            </section>
          ))}

          {/* Key Definitions */}
          <section className="bg-card rounded-xl p-6 card-elevated">
            <h2 className="font-heading text-lg font-bold flex items-center gap-2 mb-4">
              <Star size={18} className="text-secondary" /> Key Definitions
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {content.keyDefinitions.map((def) => (
                <div key={def.term} className="bg-muted/50 rounded-lg p-3">
                  <p className="font-semibold text-sm">{def.term}</p>
                  <p className="text-xs text-muted-foreground mt-1">{def.definition}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Flashcards */}
          {content.keyDefinitions.length > 0 && (
            <section>
              <h2 className="font-heading text-lg font-bold flex items-center gap-2 mb-4">
                <Brain size={18} className="text-accent" /> Flashcards
              </h2>
              <FlashcardDeck cards={content.keyDefinitions.map((d) => ({ front: d.term, back: d.definition }))} />
            </section>
          )}

          {/* Analogies */}
          {chapterAnalogies.length > 0 && (
            <section>
              <h2 className="font-heading text-lg font-bold flex items-center gap-2 mb-4">
                <Lightbulb size={18} className="text-secondary" /> Learn with Analogies
              </h2>
              <div className="space-y-4">
                {chapterAnalogies.map((a) => (
                  <AnalogyCard key={a.id} analogy={a} />
                ))}
              </div>
            </section>
          )}

          {/* Did You Know */}
          {content.didYouKnow.length > 0 && (
            <section className="bg-secondary/10 rounded-xl p-6 border border-secondary/20">
              <h2 className="font-heading text-lg font-bold flex items-center gap-2 mb-3 text-secondary">
                <Lightbulb size={18} /> Did You Know?
              </h2>
              <ul className="space-y-2">
                {content.didYouKnow.map((fact, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-secondary mt-0.5">✦</span>
                    <span className="text-muted-foreground">{fact}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Revision Summary */}
          <section className="bg-primary/5 rounded-xl p-6 border border-primary/10">
            <h2 className="font-heading text-lg font-bold flex items-center gap-2 mb-3 text-primary">
              <CheckCircle2 size={18} /> Revision Summary
            </h2>
            <ul className="space-y-2">
              {content.revisionSummary.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Quiz */}
          {questions.length > 0 && (
            <section>
              <h2 className="font-heading text-lg font-bold flex items-center gap-2 mb-4">
                <Brain size={18} className="text-primary" /> Chapter Quiz
              </h2>
              <QuizSection questions={questions} />
            </section>
          )}

          {/* Practice Questions */}
          <section className="bg-card rounded-xl p-6 card-elevated">
            <h2 className="font-heading text-lg font-bold flex items-center gap-2 mb-4">
              <HelpCircle size={18} className="text-accent" /> Practice Questions
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-sm mb-2">Short Answer Questions</h3>
                <ol className="list-decimal list-inside space-y-2">
                  {content.practiceQuestions.filter((q) => q.type === "short").map((q, i) => (
                    <li key={i} className="text-sm text-muted-foreground">{q.question}</li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-2">Long Answer Questions</h3>
                <ol className="list-decimal list-inside space-y-2">
                  {content.practiceQuestions.filter((q) => q.type === "long").map((q, i) => (
                    <li key={i} className="text-sm text-muted-foreground">{q.question}</li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
        </motion.div>
      ) : (
        /* Placeholder for chapters without detailed content */
        <div className="bg-card rounded-xl p-8 card-elevated text-center">
          <BookOpen size={40} className="mx-auto text-muted-foreground mb-4" />
          <h2 className="font-heading text-xl font-bold mb-2">Content Coming Soon</h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Detailed notes, quizzes, analogies, and practice questions for this chapter are being prepared. Check back soon!
          </p>
          <div className="mt-6">
            <h3 className="font-semibold text-sm mb-3">Key Topics in This Chapter</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {chapter.keyTopics.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-muted text-xs">{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
