const STORAGE_KEY = "nave_sessions";

export function loadSessions() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveSession(session) {
  const sessions = loadSessions();
  sessions.push(session);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
}

export function clearSessions() {
  localStorage.removeItem(STORAGE_KEY);
}
