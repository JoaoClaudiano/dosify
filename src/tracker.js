let startTime = null;
let elapsed = 0;
let active = false;

export function startTracking() {
  if (!active) {
    startTime = Date.now();
    active = true;
  }
}

export function stopTracking() {
  if (active) {
    elapsed += Math.floor((Date.now() - startTime) / 1000);
    startTime = null;
    active = false;
  }
}

export function getElapsed() {
  if (active) {
    return elapsed + Math.floor((Date.now() - startTime) / 1000);
  }
  return elapsed;
}

export function isActive() {
  return active;
}
