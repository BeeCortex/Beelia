# **🐝 BeeliaTools — Honeypot & Scam Scanner**

**Theme**: Honeypot detection, AI-powered security analysis, digital bee.
**Beelia** is an **AI-powered honeypot and scam detection tool** designed to protect DeFi traders on the **Solana/BSC** blockchains. With a simple, minimalist interface and powerful risk analysis, **Beelia** helps users spot and avoid scams before they get stung.

---

## **🔑 Features:**

- **🔍 Honeypot Detection**  
  Automatically identifies tokens with sell restrictions (**honeypots**).

- **⚠️ Risk Flags**  
  Flags tokens with high tax, unverified contracts, recent deploys, and other risk indicators.

- **📈 DexScreener Integration**  
  Real-time price, volume, and chart data from the **DexScreener API**.

- **🤖 AI-powered Analysis**  
  Uses **machine learning** to detect and predict scam patterns and anomalies.

- **🐝 BeeScore**  
  A **trust index** (0-100) that visually represents the safety of a token.

- **⚡ Bzzt Radar**  
  Alerts users when token behavior changes, such as sudden sell restrictions or tax hikes.

---

## ✅ **NOW (Ready / MVP / In Development):**

- **Honeypot Detector**  
  Detects whether a token can be sold or is a honeypot trap.

- **Basic Token Safety Flags**  
  Flags such as "High transaction fee," "Contract not verified," "Newly created," etc.

- **DexScreener API Integration**  
  Market data and charts directly pulled from **DexScreener**.

- **Risk Tag Generator**  
  Auto-tagging for tokens: **Low Risk**, **Medium Risk**, **High Risk** + warnings.

- **Auto-token Address Parsing**  
  Automatic token address detection when entered (for **Solana** and **BSC**).

- **Fast UI for Analysis**  
  A simple minimalist interface in the brand palette **"Bee like Bee good"**.

---

## 🔜 **Q2 2025 (In Development):**

- **AI HiveMind**  
  A machine learning-based algorithm using basic templates to detect anomalies.

- **Phishing Link Blocker**  
  Identifies dangerous links in token descriptions.

- **Token Movement Tracker**  
  Tracks contract wallet activity to detect abnormal patterns.

- **BeeScore**  
  A trust score index for tokens (0-100), visualized in a **honeycomb**.

- **Blacklist API**  
  External blacklist database integration for improved token safety.

- **"Bzzt Radar" Notifications**  
  Alerts when a token changes its characteristics (e.g., suddenly becomes a honeypot).

---

## 🌌 **Q3–Q4 2025 (Planned):**

- **HoneyMap**  
  A visual map of suspicious tokens on **Solana** and **BSC**.

- **BeeSwarm Watchlist**  
  Your personal watchlist with alerts for specific tokens.

- **Token Clone Detector**  
  Identifies clones of popular tokens with minor differences.

- **"BuzzPress" Insights Feed**  
  An auto-feed with alert messages (e.g., new honeypots, mass clones, etc.).

- **AI-Driven Scam Pattern Recognizer**  
  Training on real-world rug pull and honeypot cases for predictive detection.

---


## **🛠️ Technologies Used:**

- **Solana & BSC**  
  Supported blockchain platforms for token scanning.

- **DexScreener API**  
  Real-time price and volume data for tokens.

- **JavaScript**  
  For frontend functionality and UI.

- **AI/ML Models**  
  For **scam pattern recognition** and **anomaly detection**.

---

## 📊 **Inner logic**

### **1. Honeypot Detection** 🛑

Detects if a token has **honeypot** behavior, where you can buy but cannot sell (trap-like behavior).

```javascript
function detectHoneypot(txLimit, sellBlocked, liquidityMovable) {
  return (txLimit > 95 && sellBlocked && liquidityMovable);
}
```
1. txLimit → Maximum transaction percentage (simulated contract value)

2. sellBlocked → Indicates if the token does not allow swapExactTokensForETH

3. liquidityMovable → If the contract allows the owner to remove LP (Liquidity Pool)

Returns: true if the token exhibits trap-like behavior (honeypot).

## 2. **LP Status Analysis 🔒**
Analyzes the liquidity pool (LP) lock status, indicating the security of the token's liquidity.


```javascript
function checkLPStatus(lpLocked, lockDuration, lockSource) {
  if (!lpLocked) return "Unlocked";
  if (lockDuration > 180 && lockSource === "trusted") return "Locked";
  return "Weak Lock";
}
```
1. lpLocked → Boolean indicating if LP is locked

2. lockDuration → Duration in days for which the LP is locked

3. lockSource → Source of the lock, such as DXLock, Mudra, or Unknown

Returns: "Unlocked", "Locked", or "Weak Lock" based on the liquidity pool status.

## 3. **Owner Risk Score ⚠️**
Calculates a risk score for the token's owner based on the contract’s renouncement, transaction history, and token creation frequency.


```javascript
function ownerRiskScore(isRenounced, txHistory, tokenCreationFreq) {
  let score = 100;
  if (!isRenounced) score -= 40;
  if (txHistory < 10) score -= 30;
  if (tokenCreationFreq > 5) score -= 30;
  return Math.max(score, 0);
}
```
1. isRenounced → Indicates if the contract ownership has been renounced

2. txHistory → Number of historical transactions

3. tokenCreationFreq → Frequency at which the deployer creates new tokens

Returns: A score between 0 and 100, with lower scores indicating higher risk.

## 4. **BuzzRate Index 🐝**
Evaluates the level of activity (buzz) around a token by analyzing the number of buys, sells, unique wallets, and timeframe.

```javascript
function buzzRate(buyTxs, sellTxs, uniqueWallets, timeframeMins) {
  const txPerMin = (buyTxs + sellTxs) / timeframeMins;
  const activityFactor = uniqueWallets / 10;
  return Math.round(txPerMin * activityFactor);
}
```
1. buyTxs → Number of buy transactions in the timeframe

2. sellTxs → Number of sell transactions in the timeframe

3. uniqueWallets → Number of unique wallets involved in the token's transactions

4. timeframeMins → Timeframe in minutes over which to calculate the activity

Returns: A numeric score representing the level of activity ("low", "medium", "high", or "spike").

## 5. **Security Flags Count ⚠️**
Counts the number of critical or high security flags associated with a token.

```javascript
function getSecurityFlags(contractFlags) {
  return contractFlags.filter(flag => flag.critical || flag.high).length;
}
```
contractFlags → Array of flags, each containing risk indicators such as:
- maxTx set too low
- fee set too high
- hidden functions
- blacklist() or removeLimits()
Returns: The number of critical or high security flags for a token.

## 6.** BeeTrust Score 🐝**
Calculates the overall trust score of a token based on several key factors such as honeypot risk, LP status, owner risk, and more.


```javascript
function beeTrustScore(metrics) {
  const {
    honeypotRisk, lpStatus, ownerScore, buzzRate, flags
  } = metrics;

  let score = 100;
  if (honeypotRisk) score -= 30;
  if (lpStatus === "Unlocked") score -= 20;
  if (ownerScore < 50) score -= 20;
  if (buzzRate < 3) score -= 10;
  if (flags > 2) score -= 20;

  return Math.max(score, 0);
}
```
1. honeypotRisk → Boolean value indicating if the token is a honeypot risk
2. lpStatus → The liquidity pool status (e.g., "Unlocked")
3. ownerScore → The calculated risk score of the owner (from the Owner Risk Score formula)
4. buzzRate → Activity level (from the BuzzRate Index formula)

5. flags → The number of critical or high security flags (from the Security Flags Count formula)

Returns: A score between 0 and 100, representing the overall trustworthiness of the token.

---
## **🔧 Installation & Setup:**
1. Add **BeeliaTools** to your browser by installing it from the **Chrome Web Store**.
2. Once installed, click the extension icon in your browser to access the dashboard.
3. Set your preferences and start receiving **AI-powered scam alerts** and **risk assessments**.
---

### 📎 **Official Links**

- **Website**: [YourWebsiteLink](https://www.example.com)
- **GitHub**: [BeeliaTools GitHub Repository](https://github.com/yourusername/BeeliaTools)
- **Twitter**: [@BeeliaTools](https://twitter.com/BeeliaTools)


**Stay safe with BeeliaTools** — Your personal crypto security assistant.
