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
        internalType: 'struct Utils.MegaSwapSellData',
        name: 'data',
        type: 'tuple',
      },
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
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
        internalType: 'struct Utils.SellData',
        name: 'data',
        type: 'tuple',
      },
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'enum UniversalRouter.SwapType',
        name: 'swapType',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'chainId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenBridged',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'payload',
        type: 'bytes',
      },
    ],
    name: 'Bridged',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'payload',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'crosschainData',
        type: 'bytes',
      },
      {
        internalType: 'enum UniversalRouter.SwapType',
        name: 'swapTypeSrc',
        type: 'uint8',
      },
      {
        internalType: 'enum UniversalRouter.SwapType',
        name: 'swapTypeDest',
        type: 'uint8',
      },
    ],
    name: 'swapAndBridgeTokens',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
];
