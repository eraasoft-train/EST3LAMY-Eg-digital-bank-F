# 🛡️ Security Guidelines & Policy

Finovia treats client security as the highest priority. This document summarizes internal web application security standards and vulnerability reporting.

---

## 🔒 Internal Security Practices

### Content Security Policy (CSP)
*   Deploy with headers restricting source origins for scripts, styles, images, and frames.
*   Prevent inline scripting dynamically via HTML headers.

### Cross-Site Scripting (XSS) Prevention
*   React automatically encodes strings rendered in the virtual DOM.
*   Avoid using `dangerouslySetInnerHTML` unless input is strictly sanitized via libraries like `DOMPurify`.
*   Sanitize all values collected via contact forms.

### Cross-Site Request Forgery (CSRF) Mitigation
*   API sessions must implement `SameSite=Strict` cookies.
*   Include CSRF tokens when communicating with transactional backends.

---

## ⚠️ Reporting Vulnerabilities

If you discover a potential security vulnerability within the Finovia system, please report it immediately:

1.  **Email**: Send detail logs and reproducibility steps to `security@finovia.com`.
2.  **Encrypted Report**: If possible, encrypt your report details using PGP keys.
3.  **Do Not Disclose Publicly**: Give our internal team at least 30 days to mitigate the issue before publishing details.

---

## 🔍 Security Audit Checklist

When implementing new API integrations or forms:
- [ ] Ensure all API endpoints utilize TLS v1.3.
- [ ] Mask sensitive numbers (e.g. show `**** **** **** 1234` for card numbers).
- [ ] Enforce strong passwords and OTP parameters during auth.
- [ ] Log off inactive user sessions after 15 minutes of inactivity.
