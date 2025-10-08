import { createWalletClient, custom, createPublicClient, defineChain } from "https://esm.sh/viem@2.0.0"
import { contractAddress, abi } from "./constants-js.js"
const updateButton = document.getElementById('updateValue')
const connectButton = document.getElementById("connectButton")
const getValueButton = document.getElementById('getValue')
const userValueButton = document.getElementById('getValueforaddress')

let walletClient
let publicClient

async function connect() {
    if (typeof window.ethereum != "undefined") {
        //forcing to anvil
        // await window.ethereum.request({
        //     method: "wallet_switchEthereumChain",
        //     params: [{ chainId: "0x7A69" }], // 31337
        // })
        walletClient = createWalletClient({
            transport: custom(window.ethereum)

        })
        const [connectedAccount] = await walletClient.requestAddresses()
        connectButton.innerHTML = "Connected!"
        console.log(connectedAccount)
    }

    else {
        connectButton.innerHTML = "Please install MetaMask"
    }

}

async function setValue() {
    if (!walletClient) {
        console.error("Wallet not connected");
        return;
    }
    const [connectedAccount] = await walletClient.getAddresses();
    const chainId = await getCurrentChain(walletClient)

    publicClient = createPublicClient({
        transport: custom(window.ethereum)
    })

    const userValue = document.getElementById("value").value;
    const bigIntValue = BigInt(userValue);
    const { result } = await publicClient.simulateContract({
        address: contractAddress,
        abi,
        functionName: "setValue",
        account: connectedAccount,
        chain: chainId,
        args: [bigIntValue],
    })
    const hash = await walletClient.writeContract({
        address: contractAddress,
        abi,
        functionName: "setValue",
        account: connectedAccount,
        chain: chainId,
        args: [bigIntValue],
    })
    console.log("Transaction Hash:", hash)
}

async function getValue() {

    if (!walletClient) {
        walletClient = createWalletClient({
            transport: custom(window.ethereum),
        });

    }
    if (!publicClient) {
        publicClient = createPublicClient({
            transport: custom(window.ethereum),
        });

    }
    const [connectedAccount] = await walletClient.getAddresses();
    const chainId = await getCurrentChain(walletClient)
    const hash = await publicClient.readContract({
        address: contractAddress,
        abi,
        functionName: "readValue",
        account: connectedAccount,
        chain: chainId,
    })
    console.log(hash)
}

async function getUserValue() {
    console.log("user value testing")
    if (!walletClient) {
        walletClient = createWalletClient({
            transport: custom(window.ethereum),
        });

    }
    if (!publicClient) {
        publicClient = createPublicClient({
            transport: custom(window.ethereum),
        });
    }

    const [connectedAccount] = await walletClient.getAddresses();
    const chainId = await getCurrentChain(walletClient)

    const hash = await publicClient.readContract({
        address: contractAddress,
        abi,
        functionName: "readValueForUser",
        account: connectedAccount,
        chain: chainId,
        args: [connectedAccount],
    })
    console.log(hash)

}
async function getCurrentChain(client) {
    const chainId = await client.getChainId()
    // console.log(chainId)
    const currentChain = defineChain({
        id: chainId,
        // id: 31337,
        name: "Custom Chain",
        // name: "Anvil Localhost",
        // network: "anvil",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: {
            default: {
                http: ["http://localhost:8545"],
            },
        },
    })
    return currentChain
}



connectButton.onclick = connect
updateButton.onclick = setValue
getValueButton.onclick = getValue
userValueButton.onclick = getUserValue
