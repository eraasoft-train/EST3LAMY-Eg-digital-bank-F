# 🌟 Core Features & Modules

Finovia provides a modern suite of personal and commercial banking interfaces designed with ease of use and premium presentation in mind.

---

## 💵 Interactive Loan Payment Estimator

Found under the `/finovia` path, this interactive loan estimator lets users customize and simulate their financing conditions instantly.

*   **Dynamic Loan Slider**: Slide between `$0` and `$1,000,000` to adjust principal.
*   **State Persistence**: Utilizing the custom `useLocalStorage` hook, the selected loan value is stored in the browser. Refreshing or navigating back to the page restores the user's last input.
*   **Real-time Math**: Calculates:
    *   Estimated Monthly Payment (using a 30-year fixed rate at 5.0% APR standard mortgage formula).
    *   Total Principal + Interest paid over the lifetime.
    *   Total standalone Interest paid.
*   **Responsive Application**: Click to prequalify or directly choose custom loan products (Mortgage, Auto Loans, Personal Loans, Business Financing).

---

## 💳 Personal Accounts & Cards Offerings

Located at `/accounts`, showcasing Finovia's personal banking products.

*   **Diverse Checking & Savings Tiers**: Compare interest rates (APY), minimum opening balances, monthly fees, and distinct features.
*   **Card Tier Options**: Showcase cards ranging from checking debit up to exclusive premium metal credit cards.
*   **Onboarding Path**: Step-by-step guidance to open checking or savings accounts online in minutes.

---

## 🏢 Commercial & Business Banking

Located at `/business`, customized for corporate, startup, and small-business owners.

*   **Treasury & Capital Management**: Insights into cash flow forecasting, liquidity investments, and wire management.
*   **Commercial Lending & Lines of Credit**: Scalable credit lines for machinery, commercial real estate, or payroll financing.
*   **Custom Merchant Processing**: Point-of-Sale (POS) and API-driven web checkout integrations.

---

## 🔒 Advanced Security & Encryption Showcase

Securing user data and transactions is at the center of Finovia.

*   **256-Bit SSL/TLS Encryption**: Protects all communication between clients and APIs.
*   **Multifactor Authentication (MFA)**: Built-in structures to enable security keys, authenticator apps, and SMS OTP codes.
*   **Zero Liability Guarantees**: Complete coverage for unauthorized card activities.

---

## 🎨 Theme Customization & Accessibility

*   **Dark & Light Mode Integration**: Seamlessly switch themes via the `ThemeProvider` wrapping the system. Custom Tailwind classes handle clean color translations.
*   **Radix UI Accessibility**: Interactive widgets (accordions, dialogs, sheets) are strictly keyboard navigable and screen-reader accessible.
*   **High Performance Page Loader**: Interactive visual loading animation keeps transitions smooth and seamless.
