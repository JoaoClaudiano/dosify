let startTime = null;
let elapsed = 0;

export function startTracking() {
  if (!startTime) {
    startTime = Date.now();
  }
}

export function stopTracking() {
  if (startTime) {
    elapsed += Math.floor((Date.now() - startTime) / 1000);
    startTime = null;
  }
}

export function getElapsed() {
  if (startTime) {
    return elapsed + Math.floor((Date.now() - startTime) / 1000);
  }
  return elapsed;
}
