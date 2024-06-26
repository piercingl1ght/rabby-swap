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
            name: 'toAmount',
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
                internalType: 'uint256',
                name: 'fromAmountPercent',
                type: 'uint256',
              },
              {
                components: [
                  {
                    internalType: 'address',
                    name: 'to',
                    type: 'address',
                  },
                  {
                    components: [
                      {
                        internalType: 'address payable',
                        name: 'adapter',
                        type: 'address',
                      },
                      {
                        internalType: 'uint256',
                        name: 'percent',
                        type: 'uint256',
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
                    internalType: 'struct Utils.Adapter[]',
                    name: 'adapters',
                    type: 'tuple[]',
                  },
                ],
                internalType: 'struct Utils.Path[]',
                name: 'path',
                type: 'tuple[]',
              },
            ],
            internalType: 'struct Utils.MegaSwapPath[]',
            name: 'path',
            type: 'tuple[]',
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
        internalType: 'struct Utils.MegaSwapSellData',
        name: 'data',
        type: 'tuple',
      },
    ],
    name: 'megaSwap',
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
            name: 'toAmount',
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
                name: 'to',
                type: 'address',
              },
              {
                components: [
                  {
                    internalType: 'address payable',
                    name: 'adapter',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'percent',
                    type: 'uint256',
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
                internalType: 'struct Utils.Adapter[]',
                name: 'adapters',
                type: 'tuple[]',
              },
            ],
            internalType: 'struct Utils.Path[]',
            name: 'path',
            type: 'tuple[]',
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
        internalType: 'struct Utils.SellData',
        name: 'data',
        type: 'tuple',
      },
    ],
    name: 'multiSwap',
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
];
