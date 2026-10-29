import React from 'react';
import { createRoot } from 'react-dom/client';
import PatternWaves from './components/PatternWaves.jsx';
import FolderFloat from './components/FolderFloat.jsx';
import './site.css';

const wavesMount = document.getElementById('waves-root');
if (wavesMount) createRoot(wavesMount).render(<AppWaves />);
function AppWaves() {
  return (
    <PatternWaves
      preset="silk"
      color="#fff7f8"
      backgroundColor="rgba(0,0,0,0)"
      fade="edges"
      interactive
      cursorSize={50}
      cursorStrength={0.6}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
const folderMount = document.getElementById('folder-root');
if (folderMount) createRoot(folderMount).render(
  <FolderFloat
    items={['比预期提前', '比预期推迟', '暂时不来了']}
    label="这次月经和预期不一样"
    sublabel="3 个分支"
    trigger="hover"
    closeOnSelect
    physics
    drift={0.5}
    onSelect={(value, index) => {
      const keys = ['early', 'late', 'absent'];
      if (typeof window.showBranch === 'function') window.showBranch(keys[index]);
    }}
    folderColor="#761e32"
    frontColor="#8d3046"
    paperColor="#f7dfe3"
    itemColor="#fff4f4"
    itemTextColor="#6b1c30"
    labelColor="#fff7f8"
    width={230}
    height={164}
    radius={5}
    spread={245}
    lift={28}
    tilt={8}
    flapAngle={34}
    restAngle={16}
    openDuration={520}
    stagger={45}
    bounce={0.3}
  />
);
