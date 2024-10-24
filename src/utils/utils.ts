import { STARS_COLORS } from "./constants";

/**
 * Generates a layer of stars with specified size, total number of stars, and animation duration.
 * The stars are positioned randomly within the viewport and assigned random colors from a predefined set.
 * The generated layer is then applied to the specified container element using CSS custom properties.
 * 
 * @param size - The size of each star in the layer (e.g., "2px").
 * @param selector - The CSS selector of the container element where the star layer will be applied.
 * @param totalStars - The total number of stars to generate in the layer.
 * @param duration - The duration of the animation for the stars (e.g., "25s").
 * @returns void
 */
export const generateSpaceLayer = (size: string, selector: string, totalStars: number, duration: string) => {
  const layer = [];
  for (let i = 0; i < totalStars; i++) {
    const color = STARS_COLORS[~~(Math.random() * STARS_COLORS.length)];
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`);
  }
  const container = document.querySelector(selector) as HTMLElement;
  if (!container) return;
  container.style.setProperty("--size", size);
  container.style.setProperty("--duration", duration);
  container.style.setProperty("--space-layer", layer.join(","));
}