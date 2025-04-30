import { createGlobalTheme } from '@vanilla-extract/css';

export const colorVars = createGlobalTheme(':root', {
  color: {
    primary: '#0A2F44',         // Harpoon Blue
    secondary: '#3E4A51',       // Whale Gray
    accent: '#C5A46D',          // Lantern Gold
    background: '#F6F1E7',      // Scrimshaw Bone
    surface: '#E0D7C7',         // Sailcloth Beige
    text: '#1A1A1A',            // Harpoon Black
    textMuted: '#6C7A89',       // Storm Horizon
    success: '#CBD8D3',         // Seafoam Mist
    warning: '#843B2A',         // Blood Rust
    error: '#5B1A1A',           // Leviathan Red
    info: '#5199B4',            // Charted Sky
  },
});
