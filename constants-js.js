export const contractAddress = "0x0165878A594ca255338adfa4d48449f69242Eb8F"

export const abi = [
    {
        "type": "function",
        "name": "readValue",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "readValueForUser",
        "inputs": [
            {
                "name": "_user",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "setValue",
        "inputs": [
            {
                "name": "_value",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    }
]
