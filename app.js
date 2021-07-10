var contractAbi = [{
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
        }],
        "name": "Added",
        "type": "event"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "_productId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "info",
                "type": "string"
            }
        ],
        "name": "addState",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "_a",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_b",
                "type": "string"
            }
        ],
        "name": "concat",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "_text",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_date",
                "type": "string"
            }
        ],
        "name": "newItem",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_productId",
            "type": "uint256"
        }],
        "name": "searchProduct",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
var contractAddress = '0x65F7c90f433CB7ef83E5Cb5Db6984D2ed438c47B'; // Paste Address here