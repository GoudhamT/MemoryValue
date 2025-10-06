import { createWalletClient, custom } from "https://esm.sh/viem@2.0.0"

const updateButton = document.getElementById('updateValue')
const connectButton = document.getElementById("connectButton")

let userValue = document.getElementById('value')

let walletClient

async function connect() {
    if (typeof window.ethereum != "undefined") {
        //forcing to anvil
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x7A69" }], // 31337
        })
        walletClient = createWalletClient({
            transport: custom(window.ethereum)

        })
        await walletClient.requestAddresses()
        connectButton.innerHTML = "Connected!"
    }
    else {
        connectButton.innerHTML = "Please install MetaMask"
    }
}
function setValue() {
    console.log(userValue.value)
}
connectButton.onclick = connect
updateButton.onclick = setValue