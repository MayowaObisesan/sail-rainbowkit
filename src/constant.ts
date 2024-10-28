export const contractAddress = "0xCF5CD0144087419ec376Fc45F2984dc5D6C955AA";

export const contractAbi = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_noOfStudents",
                "type": "uint256"
            }
        ],
        "name": "createClass",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "newName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "newGender",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "newAge",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "newClass",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "newWalletAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "newHouseAddress",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "newStateOfOrigin",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "newRegNo",
                "type": "string"
            }
        ],
        "name": "createStudentInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "class",
        "outputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "noOfStudents",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "classCounter",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "customStudent",
        "outputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "gender",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "age",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "class",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "walletAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "houseAddress",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "stateOfOrigin",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "regNo",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllClasses",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "noOfStudents",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct SchoolContract.Class[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllStudents",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "gender",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "age",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "class",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "walletAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "houseAddress",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "stateOfOrigin",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "regNo",
                        "type": "string"
                    }
                ],
                "internalType": "struct SchoolContract.Student[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "studentCounter",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]