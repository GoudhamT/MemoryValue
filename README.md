# 🧠 Simple Storage dApp (Anvil + Viem + MetaMask)

A simple full-stack Ethereum DApp built for **local Anvil network** using **Viem** and **MetaMask**.  
It allows users to connect their wallet, set and get a stored value, and fetch user-specific stored values.

---

## ⚙️ Features

- 🦊 **Connect Wallet** — Connects to MetaMask wallet  
- ✏️ **Update Value** — Sets a new numeric value in the smart contract  
- 📥 **Get Value** — Reads the latest global stored value  
- 👤 **User Value** — Reads the latest value stored by the connected account  
- 🔗 **Local Only** — Works exclusively with **Anvil (Hardhat local chain)**


## 🚀 Deployment Instructions

### 1️⃣ Start Anvil

```bash
anvil
```

This launches a local Ethereum test chain at:

```
http://localhost:8545
Chain ID: 31337
```

---

### 2️⃣ Deploy the Contract

Use **Foundry** to deploy:

```bash
forge create --rpc-url http://localhost:8545 --private-key <YOUR_PRIVATE_KEY> src/SimpleStorage.sol:SimpleStorage
```

✅ Copy the **deployed contract address** shown in the output — you’ll need it for your front-end.

---

## 💻 Frontend Setup

### 3️⃣ Configure Contract Details

In your `index.js` or `index.html` script, make sure to update:

```js
const contractAddress = "<YOUR_DEPLOYED_CONTRACT_ADDRESS>";
```

The code uses Viem’s `publicClient` and `walletClient` to interact with the contract.

---

### 4️⃣ Run the App

Simply open your **index.html** file in a browser:

```
file:///path/to/index.html
```

or run a local static server (optional):

```bash
npx serve .
```

Then, connect MetaMask (make sure MetaMask is connected to **Localhost 8545 / Anvil network**) and try:

1. **Connect Wallet** — to link your MetaMask  
2. **Update Value** — to set a new stored number  
3. **Get Value** — to read the global stored value  
4. **User Value** — to read your account-specific value

---

## 🔗 Requirements

- [Foundry](https://book.getfoundry.sh/getting-started/installation)
- [Anvil](https://book.getfoundry.sh/anvil/)
- [MetaMask](https://metamask.io/)
- [Viem](https://viem.sh/) JavaScript library
- A modern browser (Chrome / Brave / Edge)

---

## 🧰 Folder Structure

```
📦 simple-storage-dapp
 ┣ 📂 src
 ┃ ┗ 📜 MemoryValue.sol
 ┣ 📜 index.html
 ┣ 📜 index-js.js
 ┣ 📜 README.md
```

---

## 🧠 Notes

- Works **only** on Anvil local network (`chainId = 31337`)
- You can use pre-funded Anvil private keys for testing
- If “Stored value” updates slowly, wait a few seconds for the block to confirm

---

## 🧾 License

MIT © 2025 — Simple Storage Demo
