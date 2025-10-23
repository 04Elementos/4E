import { reactive } from "vue";

const spawned = reactive([]);
let hasSpawned = false;

export function useAnfitriaoPopup() {
  // margem para manter o popup dentro da tela
  const headerOffset = 85;
  const compWidth = 250;
  const compHeight = 50;

  function spawnAnfitriao(qtd = 20) {
    if (hasSpawned) return;
    hasSpawned = true;

    // identifica o tamanho máximo da tela
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // limite pra saber se é mobile
    const isMobile = screenWidth <= 500;

    const maxX = isMobile ? 450 : Math.min(screenWidth, 1800);
    const maxY = Math.min(screenHeight, 900);

    for (let i = 0; i < qtd; i++) {

      const spreadX = maxX * 0.7;
      const spreadY = maxY * 0.8;

      const centerX = maxX / 2;
      const centerY = (maxY + headerOffset) / 2;

      const x = Math.floor(
        centerX + (Math.random() - 0.5) * spreadX - compWidth / 2
      );
      const y = Math.floor(
        centerY + (Math.random() - 0.5) * spreadY - compHeight / 2
      );

      const safeX = Math.max(0, Math.min(x, maxX - compWidth));
      const safeY = Math.max(headerOffset, Math.min(y, maxY - compHeight));

      spawned.push({
        id: Math.random().toString(36).slice(2),
        x: safeX,
        y: safeY,
      });
    }
  }

  function killAnfitriao(id) {
    const index = spawned.findIndex((i) => i.id === id);
    if (index !== -1) spawned.splice(index, 1);
  }

  return { spawned, spawnAnfitriao, killAnfitriao };
}
