/* enrol.js — builds a prefilled forge issue URL from config. No backend, no storage, no fetch
   beyond the one config read. Nothing about the realm, repo, labels or templates is hardcoded. */
const CFG_PATH = 'config/enrolment.config.json';

export async function loadConfig(path = CFG_PATH) {
  const r = await window.fetch(path, { cache: 'no-store' });
  if (!r.ok) throw new Error('config ' + r.status);
  return r.json();
}

/* Pure — unit-tested in node without a DOM. */
export function issueUrl(cfg, kind, fields = {}) {
  const tmpl = cfg.templates && cfg.templates[kind];
  if (!tmpl) throw new Error('unknown enrolment kind: ' + kind);
  const base = (cfg.repo.forge_base || 'https://github.com').replace(/\/+$/, '');
  const u = new URL(`${base}/${cfg.repo.owner}/${cfg.repo.name}/issues/new`);
  u.searchParams.set('template', tmpl);
  for (const [k, v] of Object.entries(fields)) {
    if (v !== undefined && v !== null && String(v).trim() !== '') u.searchParams.set(k, String(v));
  }
  return u.toString();
}

export function tracks(cfg) {
  return Object.keys(cfg.templates || {});
}

/* Standing is derived, never stored: a pure function of what the House has accepted. */
export function standing(cfg, { enrolled = false, accepted = false, counterObservations = 0, relinquished = false } = {}) {
  const states = (cfg.standing && cfg.standing.states) || [];
  const byId = Object.fromEntries(states.map(s => [s.id, s]));
  let id = 'postulant';
  if (relinquished) id = 'honoured';
  else if (accepted && counterObservations > 0) id = 'erudite';
  else if (accepted) id = 'officer';
  else if (enrolled) id = 'postulant';
  return byId[id] || { id, title: id };
}

/* The decay mechanic is declared-and-disabled. This asserts it stays inert. */
export function decayEnabled(cfg) {
  return !!(cfg.standing && cfg.standing.decay && cfg.standing.decay.enabled);
}
