//todo update colors
const projectColors: Record<string, string> = {
  "Orange": "#FF8354",
  "Purple": "#511A5E",
  "Off Black": "#0B0B1B",
  "Dark Grey": "#322C2B",
  "Grey": "#C3B7AF",
  "White": "#F5F2F2",
  "Cream": "#F6EDE6",
  "light pink": "#E8C8F0",
  "deep pink": "#DF58D5",
  "muted pink": "#CA7FB7",
  "deep rose": "#C22477",
  "light purple": "#997DEC",
  "deep purple": "#6C2FD1",
  "light yellow": "#FFE874",
  "bright yellow": "#FFD42E",
  "muted orange": "#FFB865",
  "bright orange": "#FF874A",
  "muted salmon": "#FF9097",
  "deep salmon": "#FF5A5A",
  "light blue": "#9CDFE5",
  "bright blue": "#23A9D6",
  "muted blue": "#959CD6",
  "deep blue": "#2369D6",
  "muted green": "#9CD6A1",
  "bright green": "#23D66C",
};

export function getRandomProjectColor() {
  // Get a random color from the object
  const colors = Object.keys(projectColors);
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return projectColors[randomColor];
}

export function getProjectColor(color: string): string | undefined {
  // Check if the exact color is present in the object
  if (projectColors[color]) {
    return projectColors[color];
  }

  // If the exact color is not present, find the closest matching color
  let minDistance = Number.MAX_SAFE_INTEGER;
  let closestColor: string | undefined;
  for (const key of Object.keys(projectColors)) {
    const distance = computeStringDistance(color, key);
    if (distance < minDistance) {
      minDistance = distance;
      closestColor = projectColors[key];
    }
  }

  return closestColor;
}

function computeStringDistance(a: string, b: string): number {
  const distances: number[][] = [];
  for (let i = 0; i <= a.length; i++) {
    distances[i] = [];
    for (let j = 0; j <= b.length; j++) {
      distances[i][j] = 0;
    }
  }

  for (let j = 0; j <= b.length; j++) {
    distances[0][j] = j;
  }

  for (let i = 0; i <= a.length; i++) {
    distances[i][0] = i;
  }

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const substitutionCost = a[i - 1] === b[j - 1] ? 0 : 1;

      distances[i][j] = Math.min(
        distances[i - 1][j] + 1,
        distances[i][j - 1] + 1,
        distances[i - 1][j - 1] + substitutionCost
      );
    }
  }

  // Return the distance between the complete strings
  return distances[a.length][b.length];
}

export function getTextColor(color: string): string {
  if (!color || color === "none") {
    return projectColors["Black"];
  }

  // Extract the red, green, and blue components of the color
  const r = parseInt(color.substring(1, 3), 16) / 255;
  const g = parseInt(color.substring(3, 5), 16) / 255;
  const b = parseInt(color.substring(5, 7), 16) / 255;

  // Calculate the relative luminance
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // Return the appropriate text color
  return luminance > 0.3
    ? projectColors["Off Black"]
    : projectColors["White"];
}