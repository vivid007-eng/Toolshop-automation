# Toolshop Automation

![Playwright Tests](https://github.com/vivid007-eng/Toolshop-automation/actions/workflows/playwright.yml/badge.svg)

End-to-end test automation framework for [Practice Software Testing (Toolshop)](https://practicesoftwaretesting.com), built with **Playwright + TypeScript**.

## Tech stack
- Playwright Test (TypeScript)
- GitHub Actions CI (runs on every push and pull request)
- Cross-browser: Chromium, Firefox, WebKit

## Getting started
```bash
npm ci
npx playwright install
npm test
```

## Useful scripts
| Command | What it does |
|---|---|
| `npm test` | Run all tests on all browsers |
| `npm run test:chromium` | Run on Chromium only |
| `npm run test:headed` | Run with the browser visible |
| `npm run test:ui` | Open Playwright UI mode |
| `npm run report` | Open the last HTML report |

## Roadmap
- [x] Project setup, config, CI pipeline
- [ ] Locator strategies
- [ ] Page Object Model
- [ ] Sorting, filters, forms, checkout flows
- [ ] Custom fixtures and storageState login
- [ ] API testing and UI + API integration
- [ ] Multi-user contexts (customer + admin)
- [ ] Tags, data-driven tests, parallel runs
- [ ] Jenkins pipeline