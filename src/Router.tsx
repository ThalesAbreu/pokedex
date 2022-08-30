import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Bio } from "./pages/Bio";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/> 
      <Route path="/bio/:id" element={<Bio />}/>
    </Routes>
  );
}