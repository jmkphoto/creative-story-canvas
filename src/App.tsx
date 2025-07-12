import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import Originals from "./pages/Originals";
import Games from "./pages/Games";
import Blog from "./pages/Blog";
import Store from "./pages/Store";
import About from "./pages/About";
import ClientPortal from "./pages/ClientPortal";
import Links from "./pages/Links";
import Freebies from "./pages/Freebies";
import Roadmap from "./pages/Roadmap";
import StyleGuide from "./pages/StyleGuide";
import PressKit from "./pages/PressKit";
import BehindTheBrand from "./pages/BehindTheBrand";
import CSMMiniDocs from "./pages/CSMMiniDocs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/originals" element={<Originals />} />
            <Route path="/games" element={<Games />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/client-portal" element={<ClientPortal />} />
            <Route path="/links" element={<Links />} />
            <Route path="/freebies" element={<Freebies />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/style-guide" element={<StyleGuide />} />
            <Route path="/press-kit" element={<PressKit />} />
            <Route path="/behind-the-brand" element={<BehindTheBrand />} />
            <Route path="/csm-mini-docs" element={<CSMMiniDocs />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
