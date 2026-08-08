# 🐷 Gullak

**A savings and budgeting companion for teens — built to make money make sense.**

Gullak (Urdu for "piggy bank") is a mobile app designed for teenagers aged 13–17 to help them understand, track, and grow the money that passes through their hands — allowance, gifts, pocket money — without judgment, jargon, or boring banking-app energy. Built initially for teens in Pakistan, with the goal of expanding globally.

---

## 💡 The Problem

Most teens don't have a "financial problem" in the traditional sense — they have a **visibility and habit problem**. They receive money irregularly (allowance, Eid money, gifts), spend it impulsively (food delivery, gaming, trends), and get told to "save more" by parents who never actually show them how.

Through user research (Team Avatar exercises, Money & Me reflection workshops, and pain-point mapping across Receiving, Spending, Saving, Budgeting, and Investing), a clear persona emerged:

> **Aisha Khan, 15** — a high school student who gets inconsistent pocket money, has no formal bank account, spends impulsively with friends, and has never been taught how to save or invest. Her own words: *"I always run out of money before the month ends, and I don't even know where it went. Everyone tells me to save, but no one's actually shown me how."*

Gullak exists to close that gap — not by lecturing teens about money, but by giving them a tool that fits how they actually live.

---

## ✨ Core Features

| Feature | What it does |
|---|---|
| **Home Dashboard** | At-a-glance balance, monthly received vs. spent snapshot, friendly greeting |
| **Receive Tracker** | Log pocket money, gifts, and allowance by source; set reminders for parents |
| **Smart Spending Tracker** | Auto-categorized spending (food, gaming, subscriptions, outings) with visual breakdowns |
| **Impulse Spend Alert** | Gentle "pause before you buy" prompt for likely impulsive purchases |
| **Subscription Watcher** | Flags forgotten recurring charges and in-app purchases |
| **Savings Goals** | Visual, goal-based saving (e.g. "new phone," "trip") with progress tracking |
| **Locked Savings Wallet** | A separate, protected space for savings so it doesn't blend with spending money |
| **Simple Budget Planner** | Slider-based split across spend/save/invest categories with overspend warnings |
| **Spending Reality Check** | Shows how a purchase affects the monthly budget *before* confirming it |
| **Peer Money Splitter** | Tracks shared expenses with friends so nobody forgets who owes what |
| **Beginner Investing Explainer** | Jargon-free "Investing 101" with a risk-free simulated investing mode |
| **Parent/Guardian Link** | Optional recurring pocket-money transfers directly from parents |
| **Money Mood Journal** | Short reflection prompts after big purchases to build self-awareness |
| **Achievements & Streaks** | Gamified badges for saving consistently and hitting goals |

---

## 🎯 Design Principles

- **No judgment.** The app never scolds — it nudges.
- **Passive over manual.** Teens abandon manual tracking fast; Gullak favors automatic categorization and set-and-forget budgeting over spreadsheets.
- **Social, not solitary.** Money habits are shaped by peers — features like splitting expenses and simplified investing lean into that instead of ignoring it.
- **Built for irregular income.** Unlike adult finance apps that assume a steady salary, Gullak is designed around unpredictable pocket money, gifts, and allowance timing.
- **Low-stakes learning.** Investing and saving are introduced through simulation and small amounts, not real risk, so mistakes are part of learning rather than something to fear.

---

## 🛠 Tech Stack

- **Framework:** [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/) (Expo Go for development)
- **Language:** JavaScript (no TypeScript)
- **Styling:** Custom `StyleSheet.create()` per component/screen — no utility-CSS frameworks
- **Navigation:** [React Navigation](https://reactnavigation.org/) (native-stack + bottom-tabs)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Local Storage:** `@react-native-async-storage/async-storage`
- **Forms:** `react-hook-form`
- **Charts:** `victory-native` + `react-native-svg`
- **Icons:** `@expo/vector-icons`

---

## 📁 Project Structure

```
gullak/
├── assets/                    # App icons, splash, favicon (root-level, required by app.json)
├── src/
│   ├── api/                   # API client setup
│   ├── assets/                # Images, icons, fonts, lottie files used in-app
│   ├── components/
│   │   ├── common/             # Button, Input, Avatar, Badge (+ .styles.js pairs)
│   │   ├── cards/               # BalanceCard, GoalCard, TransactionCard
│   │   ├── charts/              # SpendingPieChart, SavingsProgressBar
│   │   ├── forms/
│   │   └── modals/              # ImpulseAlertModal
│   ├── config/                 # Environment config
│   ├── constants/               # colors.js, theme.js, typography.js, config.js
│   ├── hooks/                   # useAuth, useWallet, useBudget
│   ├── navigation/               # RootNavigator, AuthNavigator, TabNavigator
│   ├── screens/
│   │   ├── Onboarding/
│   │   ├── Home/
│   │   ├── Receive/
│   │   ├── Spend/
│   │   ├── Save/
│   │   ├── Budget/
│   │   ├── Invest/
│   │   ├── Profile/
│   │   └── Auth/
│   ├── services/                 # authService, walletService, budgetService, storageService
│   ├── store/                    # Zustand stores: useUserStore, useWalletStore, useBudgetStore, useGoalsStore
│   ├── styles/                   # globalStyles.js, spacing.js
│   └── utils/                    # formatCurrency, dateHelpers, validators
├── App.js
├── app.json
└── package.json
```

Each screen and component is paired with its own `.styles.js` file, keeping layout logic separate from visual styling while avoiding a utility-CSS framework. Shared design tokens (colors, spacing, typography) live in `src/constants/` and `src/styles/` so styling stays consistent across the app.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS recommended)
- [Expo Go](https://expo.dev/go) app installed on your phone (Android/iOS)
- Git Bash or WSL if you're on Windows and want to run setup shell scripts

### Installation

```bash
# Clone the repo
git clone https://github.com/<your-username>/gullak.git
cd gullak

# Install dependencies
npm install

# Start the development server
npx expo start
```

Scan the QR code shown in the terminal using the Expo Go app to run Gullak on your device.

> **Note:** If Expo Go on your phone reports a version mismatch, make sure your installed Expo SDK matches a version currently supported by the Expo Go app store release. Run `npx expo install --fix` after aligning versions, then restart with `npx expo start -c` to clear the Metro cache.

---

## 🗺 Roadmap

- [ ] Core MVP: Receive, Spend, Save, Budget tracking
- [ ] Parent/Guardian linked accounts
- [ ] Peer expense splitting
- [ ] Simulated investing mode
- [ ] Gamification (streaks, badges)
- [ ] Localization beyond Pakistan for global expansion
- [ ] Optional real bank/wallet integrations

---

## 🧑‍🤝‍🧑 Team

Built during a hackathon by a team exploring how fintech can genuinely serve — not lecture — the next generation of savers.

---

## 📄 License

This project is currently unlicensed / private during hackathon development. Update this section before public release.