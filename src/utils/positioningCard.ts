
/**
 * Ajuste la position d'une carte pour qu'elle reste visible dans les limites de l'écran.
 * @param cx - Position X initiale du centre.
 * @param cy - Position Y initiale du centre.
 * @param cardWidth - Largeur de la carte.
 * @param cardHeight - Hauteur de la carte.
 * @param windowWidth - Largeur de la fenêtre.
 * @param windowHeight - Hauteur de la fenêtre.
 * @param padding - Marge à laisser autour des bords.
 * @returns Coordonnées ajustées { x, y }.
 */
export function adjustCardPosition(
  cx: number,
  cy: number,
  cardWidth: number,
  cardHeight: number,
  windowWidth: number,
  windowHeight: number,
  padding: number
): { x: number; y: number } {
  let adjustedX = cx;
  let adjustedY = cy;

  // Vérifie si la carte dépasse à droite
  if (cx + cardWidth / 2 > windowWidth - padding) {
    adjustedX = windowWidth - cardWidth / 2 - padding;
  }
  // Vérifie si la carte dépasse à gauche
  if (cx - cardWidth / 2 < padding) {
    adjustedX = cardWidth / 2 + padding;
  }
  // Vérifie si la carte dépasse en bas
  if (cy + cardHeight / 2 > windowHeight -padding) {
    adjustedY = windowHeight - cardHeight / 2 - padding;
  }
  // Vérifie si la carte dépasse en haut
  if (cy - cardHeight / 2 < padding) {
    adjustedY = cardHeight / 2 + padding;
  }

  return { x: adjustedX, y: adjustedY };
}
