export default [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes16',
        name: 'uuid',
        type: 'bytes16',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'initiator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'beneficiary',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'srcToken',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'destToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'srcAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'receivedAmount',
        type: 'uint256',
      },
    ],
    name: 'Bought',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes16',
        name: 'uuid',
        type: 'bytes16',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'feePercent',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'initiator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'beneficiary',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'srcToken',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'destToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'srcAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'receivedAmount',
        type: 'uint256',
      },
    ],
    name: 'Bought2',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes16',
        name: 'uuid',
        type: 'bytes16',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'feePercent',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'initiator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'beneficiary',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'srcToken',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'destToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'srcAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'receivedAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'expectedAmount',
        type: 'uint256',
      },
    ],
    name: 'BoughtV3',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'partnerShare',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'paraswapShare',
        type: 'uint256',
      },
    ],
    name: 'FeeTaken',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'tokenIn',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountIn',
        type: 'uint256',
      },
    ],
    name: 'LogInputData',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'tokenOut',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountOut',
        type: 'uint256',
      },
    ],
    name: 'LogOutputData',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes16',
        name: 'uuid',
        type: 'bytes16',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'initiator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'beneficiary',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'srcToken',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'destToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'srcAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'receivedAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'expectedAmount',
        type: 'uint256',
      },
    ],
    name: 'Swapped',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes16',
        name: 'uuid',
        type: 'bytes16',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'feePercent',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'initiator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'beneficiary',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'srcToken',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'destToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'srcAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'receivedAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'expectedAmount',
        type: 'uint256',
      },
    ],
    name: 'Swapped2',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes16',
        name: 'uuid',
        type: 'bytes16',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'feePercent',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'initiator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'beneficiary',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'srcToken',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'destToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'srcAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'receivedAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'expectedAmount',
        type: 'uint256',
      },
    ],
    name: 'SwappedV3',
    type: 'event',
  },
  {
    inputs: [],
    name: 'ROUTER_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'WHITELISTED_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address[]',
            name: 'tokenIn',
            type: 'address[]',
          },
          {
            internalType: 'uint256',
            name: 'amountIn',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountOutMinBefore',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountOutMinAfter',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'wethBefore',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'wethAfter',
            type: 'address',
          },
          {
            internalType: 'uint256[]',
            name: 'poolsBeforeSend',
            type: 'uint256[]',
          },
          {
            internalType: 'uint256[]',
            name: 'poolsAfterSend',
            type: 'uint256[]',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'executionFee',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'chainId',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'beneficiary',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'bridge',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'partner',
                type: 'address',
              },
            ],
            internalType: 'struct Utils.CrosschainData',
            name: 'crosschainData',
            type: 'tuple',
          },
        ],
        internalType: 'struct Utils.UniswapV2Fork',
        name: 'data',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'tokensBought',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'tokenBought',
        type: 'address',
      },
    ],
    name: 'crossChainSend',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getKey',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tokenIn',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amountIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMin',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'weth',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: 'pools',
        type: 'uint256[]',
      },
      {
        internalType: 'address',
        name: 'partner',
        type: 'address',
      },
    ],
    name: 'swapOnUniswapV2Fork',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address[]',
            name: 'tokenIn',
            type: 'address[]',
          },
          {
            internalType: 'uint256',
            name: 'amountIn',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountOutMinBefore',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountOutMinAfter',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'wethBefore',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'wethAfter',
            type: 'address',
          },
          {
            internalType: 'uint256[]',
            name: 'poolsBeforeSend',
            type: 'uint256[]',
          },
          {
            internalType: 'uint256[]',
            name: 'poolsAfterSend',
            type: 'uint256[]',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'executionFee',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'chainId',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'beneficiary',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'bridge',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'partner',
                type: 'address',
              },
            ],
            internalType: 'struct Utils.CrosschainData',
            name: 'crosschainData',
            type: 'tuple',
          },
        ],
        internalType: 'struct Utils.UniswapV2Fork',
        name: '_data',
        type: 'tuple',
      },
    ],
    name: 'swapOnUniswapV2ForkCrosschain',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
];
