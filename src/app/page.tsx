"use client";

import { useState, useEffect } from "react";
import SideBar from "./components/main/SideBar";
import TopBar from "./components/main/TopBar";
import FunsPanel from "./components/main/FunsPanel";
import AIAssistant from "./components/main/AIAssistant";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState<string>("RollUpConfiguration");
  const [isVisibleAIAssistant, setIsVisibleAIAssistant] = useState<boolean>(true);

  useEffect(() => {
    dynamicLayout();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      dynamicLayout();
    });
  });

  const dynamicLayout = () => {
    if ( window.innerWidth < 1100) {
      setIsVisibleAIAssistant(false);
      document.querySelector(".funs-panel")?.setAttribute("style", "grid-column-end: 25");
    } else {
      if (isVisibleAIAssistant) document.querySelector(".funs-panel")?.setAttribute("style", "grid-column-end: 20");
      else document.querySelector(".funs-panel")?.setAttribute("style", "grid-column-end: 25");
    }
  };

  const toggleAIAssistantVisibility = () => {
    if (window.innerWidth >= 1100) {
      const newVisibilityState = !isVisibleAIAssistant;
      setIsVisibleAIAssistant(!isVisibleAIAssistant);
      setFunsPanelLayout(newVisibilityState);
    }
  };

  const setFunsPanelLayout = (newVisibilityState: boolean) => {
    const funsPanel = document.querySelector(".funs-panel") as HTMLElement;
    if (funsPanel != null) {
      if (newVisibilityState) funsPanel.style.gridColumnEnd = "20";
      else funsPanel.style.gridColumnEnd = "25";
    } 
  };

  return (
    <div className="spa h-screen">
      <SideBar 
        setActiveComponent={ setActiveComponent }
      />
      <TopBar 
        toggleAIAssistantVisibility={ toggleAIAssistantVisibility }
      />
      <FunsPanel 
        activeComponent={ activeComponent }
      />
      { isVisibleAIAssistant && <AIAssistant /> }
    </div>
  );
}
