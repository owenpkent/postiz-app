import { parse } from 'tldts';

// GR9: host-only cookie. tldts ignores private suffixes, so for
// owen-gr9.tail220e4e.ts.net it returns ".ts.net", which is on the Public
// Suffix List, and browsers drop the cookie (login loop).
export function getCookieUrlFromDomain(domain: string) {
  return parse(domain).hostname!;
}
