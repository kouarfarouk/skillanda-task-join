
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TaskExplorer from "./pages/TaskExplorer";
import TaskDetail from "./pages/TaskDetail";
import CreateTask from "./pages/CreateTask";
import MyTasks from "./pages/MyTasks";
import Projects from "./pages/Projects";
import CreateProject from "./pages/CreateProject";
import ProjectDetail from "./pages/ProjectDetail";
import Skillers from "./pages/Skillers";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tasks" element={<TaskExplorer />} />
          <Route path="/tasks/:id" element={<TaskDetail />} />
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/my-tasks" element={<MyTasks />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/skillers" element={<Skillers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
