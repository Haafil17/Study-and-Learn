import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import HomePage from "@/pages/HomePage";
import SubjectPage from "@/pages/SubjectPage";
import ChapterPage from "@/pages/ChapterPage";
import DashboardPage from "@/pages/DashboardPage";
import AnalogiesPage from "@/pages/AnalogiesPage";
import GamesPage from "@/pages/GamesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/subject/:subjectKey" element={<SubjectPage />} />
            <Route path="/subject/:subjectKey/chapter/:chapterId" element={<ChapterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/analogies" element={<AnalogiesPage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
