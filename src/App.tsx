import { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import HubScreen from './components/HubScreen';
import TranslationWorkspace from './components/TranslationWorkspace';
import VisionWorkspace from './components/VisionWorkspace';

export type Screen = 'login' | 'hub' | 'translation' | 'vision';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');

  return (
    <div className="min-h-screen bg-background text-on-surface font-sans selection:bg-secondary/20 overflow-x-hidden">
      {currentScreen === 'login' && <LoginScreen onNavigate={setCurrentScreen} />}
      {currentScreen === 'hub' && <HubScreen onNavigate={setCurrentScreen} />}
      {currentScreen === 'translation' && <TranslationWorkspace onNavigate={setCurrentScreen} />}
      {currentScreen === 'vision' && <VisionWorkspace onNavigate={setCurrentScreen} />}
    </div>
  );
}
