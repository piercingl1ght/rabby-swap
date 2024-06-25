export default [
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'fromToken',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'fromAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountOutMin',
            type: 'uint256',
          },
          {
            internalType: 'address payable',
            name: 'beneficiary',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'toToken',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'adapter',
                type: 'address',
              },
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'index',
                    type: 'uint256',
                  },
                  {
                    internalType: 'address',
                    name: 'targetExchange',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'percent',
                    type: 'uint256',
                  },
                  {
                    internalType: 'bytes',
                    name: 'payload',
                    type: 'bytes',
                  },
                  {
                    internalType: 'uint256',
                    name: 'networkFee',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct Utils.Route[]',
                name: 'route',
                type: 'tuple[]',
              },
            ],
            internalType: 'struct ICustomRouter.Path[]',
            name: 'path',
            type: 'tuple[]',
          },
          {
            internalType: 'uint256',
            name: 'feePercent',
            type: 'uint256',
          },
          {
            internalType: 'address payable',
            name: 'partner',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
        ],
        internalType: 'struct ICustomRouter.SwapData',
        name: 'data',
        type: 'tuple',
      },
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'swap',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'payloadSrc',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'payloadDest',
        type: 'bytes',
      },
      {
        internalType: 'enum IOneTwo.SwapType',
        name: 'swapTypeSrc',
        type: 'uint8',
      },
      {
        internalType: 'enum IOneTwo.SwapType',
        name: 'swapTypeDest',
        type: 'uint8',
      },
      {
        internalType: 'bytes',
        name: 'crosschainData',
        type: 'bytes',
      },
    ],
    name: 'swapAndBridgeTokens',
    outputs: [],
    stateMutability: 'payable',
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
        name: 'beneficiary',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'partner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'swapOnUniswapV2Fork',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'fromToken',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'fromAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountOutMin',
            type: 'uint256',
          },
          {
            internalType: 'address payable',
            name: 'beneficiary',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'toToken',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'adapter',
                type: 'address',
              },
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'index',
                    type: 'uint256',
                  },
                  {
                    internalType: 'address',
                    name: 'targetExchange',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'percent',
                    type: 'uint256',
                  },
                  {
                    internalType: 'bytes',
                    name: 'payload',
                    type: 'bytes',
                  },
                  {
                    internalType: 'uint256',
                    name: 'networkFee',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct Utils.Route[]',
                name: 'route',
                type: 'tuple[]',
              },
            ],
            internalType: 'struct IQuoter.Path[]',
            name: 'path',
            type: 'tuple[]',
          },
          {
            internalType: 'uint256',
            name: 'feePercent',
            type: 'uint256',
          },
          {
            internalType: 'address payable',
            name: 'partner',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
        ],
        internalType: 'struct IQuoter.SwapData',
        name: 'data',
        type: 'tuple',
      },
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'quote',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_partnerSharePercent',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxFeePercent',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minFeePercent',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
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
        name: '',
        type: 'bytes',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxFeePercent',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'minFeePercent',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'partnerSharePercent',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
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
            internalType: 'address',
            name: 'fromToken',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'fromAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountOutMin',
            type: 'uint256',
          },
          {
            internalType: 'address payable',
            name: 'beneficiary',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'toToken',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'adapter',
                type: 'address',
              },
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'index',
                    type: 'uint256',
                  },
                  {
                    internalType: 'address',
                    name: 'targetExchange',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'percent',
                    type: 'uint256',
                  },
                  {
                    internalType: 'bytes',
                    name: 'payload',
                    type: 'bytes',
                  },
                  {
                    internalType: 'uint256',
                    name: 'networkFee',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct Utils.Route[]',
                name: 'route',
                type: 'tuple[]',
              },
            ],
            internalType: 'struct CustomRouter.Pathh[]',
            name: 'path',
            type: 'tuple[]',
          },
          {
            internalType: 'uint256',
            name: 'feePercent',
            type: 'uint256',
          },
          {
            internalType: 'address payable',
            name: 'partner',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
        ],
        internalType: 'struct CustomRouter.SwapDataa',
        name: 'data',
        type: 'tuple',
      },
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'swap',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'permit',
        type: 'bytes',
      },
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'transferTokensFromProxy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
