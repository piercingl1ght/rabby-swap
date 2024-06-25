export default [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'chainId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'bridge',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'tokenBridged',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokensBridged',
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
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_partner',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'int64',
            name: 'relayerFeePct',
            type: 'int64',
          },
          {
            internalType: 'uint32',
            name: 'quoteTimestamp',
            type: 'uint32',
          },
          {
            internalType: 'bytes',
            name: 'message',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'maxCount',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'wrappedToken',
            type: 'address',
          },
        ],
        internalType: 'struct IOneTwoRouterFacet.AcrossData',
        name: '_acrossData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'sendingAsset',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'chainId',
            type: 'uint256',
          },
        ],
        internalType: 'struct StructInterface.BridgeData',
        name: '_bridgeData',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: '_destSwaps',
        type: 'bytes',
      },
    ],
    name: 'bridgeTokensAcross',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_partner',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'relayerFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'slippage',
            type: 'uint256',
          },
          {
            internalType: 'uint32',
            name: 'destDomainId',
            type: 'uint32',
          },
          {
            internalType: 'bool',
            name: 'isFeeNative',
            type: 'bool',
          },
        ],
        internalType: 'struct IOneTwoRouterFacet.ConnextData',
        name: '_connextData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'sendingAsset',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'chainId',
            type: 'uint256',
          },
        ],
        internalType: 'struct StructInterface.BridgeData',
        name: '_bridgeData',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: '_destSwaps',
        type: 'bytes',
      },
    ],
    name: 'bridgeTokensConnext',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_partner',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'bool',
            name: 'useAssetFee',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'nativeFee',
            type: 'uint256',
          },
          {
            internalType: 'uint32',
            name: 'refferalCode',
            type: 'uint32',
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
                name: 'flags',
                type: 'uint256',
              },
              {
                internalType: 'bytes',
                name: 'fallbackAddress',
                type: 'bytes',
              },
              {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes',
              },
            ],
            internalType: 'struct IDeBridgeGate.SubmissionAutoParamsTo',
            name: 'autoParams',
            type: 'tuple',
          },
        ],
        internalType: 'struct IOneTwoRouterFacet.DeBridgeData',
        name: '_deBridgeData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'sendingAsset',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'chainId',
            type: 'uint256',
          },
        ],
        internalType: 'struct StructInterface.BridgeData',
        name: '_bridgeData',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: '_destSwaps',
        type: 'bytes',
      },
    ],
    name: 'bridgeTokensDeBridge',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_partner',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'contract IHopBridge',
            name: 'hopBridge',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amountOutMin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationAmountOutMin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationDeadline',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'relayer',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'relayerFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'nativeFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'bonderFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct IOneTwoRouterFacet.HopData',
        name: '_hopData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'sendingAsset',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'chainId',
            type: 'uint256',
          },
        ],
        internalType: 'struct StructInterface.BridgeData',
        name: '_bridgeData',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: '_destSwaps',
        type: 'bytes',
      },
    ],
    name: 'bridgeTokensHopL1',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_partner',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'contract IHopBridge',
            name: 'hopBridge',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amountOutMin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationAmountOutMin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationDeadline',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'relayer',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'relayerFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'nativeFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'bonderFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct IOneTwoRouterFacet.HopData',
        name: '_hopData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'sendingAsset',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'chainId',
            type: 'uint256',
          },
        ],
        internalType: 'struct StructInterface.BridgeData',
        name: '_bridgeData',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: '_destSwaps',
        type: 'bytes',
      },
    ],
    name: 'bridgeTokensHopL2',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_partner',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'sendingAsset',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'chainId',
            type: 'uint256',
          },
        ],
        internalType: 'struct StructInterface.BridgeData',
        name: '_bridgeData',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: '_destSwaps',
        type: 'bytes',
      },
    ],
    name: 'bridgeTokensHyphen',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'sendingAsset',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'chainId',
            type: 'uint256',
          },
        ],
        internalType: 'struct StructInterface.BridgeData',
        name: '_bridgeData',
        type: 'tuple',
      },
    ],
    name: 'bridgeTokensRefuel',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_partner',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'uint16',
            name: 'destChainId',
            type: 'uint16',
          },
          {
            internalType: 'uint256',
            name: 'srcPoolId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destPoolId',
            type: 'uint256',
          },
          {
            internalType: 'address payable',
            name: 'refundAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'minAmountLD',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'lzFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct IOneTwoRouterFacet.StargateData',
        name: '_stargateData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'sendingAsset',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'chainId',
            type: 'uint256',
          },
        ],
        internalType: 'struct StructInterface.BridgeData',
        name: '_bridgeData',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: '_destSwaps',
        type: 'bytes',
      },
    ],
    name: 'bridgeTokensStargate',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_fromAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minAmout',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_weth',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_partner',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'fromToken',
            type: 'address',
          },
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
                internalType: 'bytes',
                name: 'payload',
                type: 'bytes',
              },
            ],
            internalType: 'struct IAdapter.Route',
            name: 'route',
            type: 'tuple',
          },
        ],
        internalType: 'struct LibSwap.SwapData[]',
        name: '_swaps',
        type: 'tuple[]',
      },
    ],
    name: 'oneTwoQuote',
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
        internalType: 'address payable',
        name: '_receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_fromAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minAmout',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_weth',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_partner',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'fromToken',
            type: 'address',
          },
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
                internalType: 'bytes',
                name: 'payload',
                type: 'bytes',
              },
            ],
            internalType: 'struct IAdapter.Route',
            name: 'route',
            type: 'tuple',
          },
        ],
        internalType: 'struct LibSwap.SwapData[]',
        name: '_swaps',
        type: 'tuple[]',
      },
    ],
    name: 'oneTwoSwap',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'chainId',
        type: 'uint256',
      },
      {
        internalType: 'uint16',
        name: 'destChainId',
        type: 'uint16',
      },
    ],
    name: 'quoteLayerZeroFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
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
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'weth',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'partner',
            type: 'address',
          },
        ],
        internalType: 'struct StructInterface.Swap',
        name: '_swapData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'int64',
            name: 'relayerFeePct',
            type: 'int64',
          },
          {
            internalType: 'uint32',
            name: 'quoteTimestamp',
            type: 'uint32',
          },
          {
            internalType: 'bytes',
            name: 'message',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'maxCount',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'wrappedToken',
            type: 'address',
          },
        ],
        internalType: 'struct IOneTwoRouterFacet.AcrossData',
        name: '_acrossData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'sendingAsset',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'chainId',
            type: 'uint256',
          },
        ],
        internalType: 'struct StructInterface.BridgeData',
        name: '_bridgeData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'fromToken',
            type: 'address',
          },
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
                internalType: 'bytes',
                name: 'payload',
                type: 'bytes',
              },
            ],
            internalType: 'struct IAdapter.Route',
            name: 'route',
            type: 'tuple',
          },
        ],
        internalType: 'struct LibSwap.SwapData[]',
        name: '_srcSwaps',
        type: 'tuple[]',
      },
      {
        internalType: 'bytes',
        name: '_destSwaps',
        type: 'bytes',
      },
    ],
    name: 'swapAndBridgeTokensAcross',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'weth',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'partner',
            type: 'address',
          },
        ],
        internalType: 'struct StructInterface.Swap',
        name: '_swapData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'relayerFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'slippage',
            type: 'uint256',
          },
          {
            internalType: 'uint32',
            name: 'destDomainId',
            type: 'uint32',
          },
          {
            internalType: 'bool',
            name: 'isFeeNative',
            type: 'bool',
          },
        ],
        internalType: 'struct IOneTwoRouterFacet.ConnextData',
        name: '_connextData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'sendingAsset',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'chainId',
            type: 'uint256',
          },
        ],
        internalType: 'struct StructInterface.BridgeData',
        name: '_bridgeData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'fromToken',
            type: 'address',
          },
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
                internalType: 'bytes',
                name: 'payload',
                type: 'bytes',
              },
            ],
            internalType: 'struct IAdapter.Route',
            name: 'route',
            type: 'tuple',
          },
        ],
        internalType: 'struct LibSwap.SwapData[]',
        name: '_srcSwaps',
        type: 'tuple[]',
      },
      {
        internalType: 'bytes',
        name: '_destSwaps',
        type: 'bytes',
      },
    ],
    name: 'swapAndBridgeTokensConnext',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'weth',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'partner',
            type: 'address',
          },
        ],
        internalType: 'struct StructInterface.Swap',
        name: '_swapData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'bool',
            name: 'useAssetFee',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'nativeFee',
            type: 'uint256',
          },
          {
            internalType: 'uint32',
            name: 'refferalCode',
            type: 'uint32',
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
                name: 'flags',
                type: 'uint256',
              },
              {
                internalType: 'bytes',
                name: 'fallbackAddress',
                type: 'bytes',
              },
              {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes',
              },
            ],
            internalType: 'struct IDeBridgeGate.SubmissionAutoParamsTo',
            name: 'autoParams',
            type: 'tuple',
          },
        ],
        internalType: 'struct IOneTwoRouterFacet.DeBridgeData',
        name: '_deBridgeData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'sendingAsset',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'chainId',
            type: 'uint256',
          },
        ],
        internalType: 'struct StructInterface.BridgeData',
        name: '_bridgeData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'fromToken',
            type: 'address',
          },
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
                internalType: 'bytes',
                name: 'payload',
                type: 'bytes',
              },
            ],
            internalType: 'struct IAdapter.Route',
            name: 'route',
            type: 'tuple',
          },
        ],
        internalType: 'struct LibSwap.SwapData[]',
        name: '_srcSwaps',
        type: 'tuple[]',
      },
      {
        internalType: 'bytes',
        name: '_destSwaps',
        type: 'bytes',
      },
    ],
    name: 'swapAndBridgeTokensDeBridge',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'weth',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'partner',
            type: 'address',
          },
        ],
        internalType: 'struct StructInterface.Swap',
        name: '_swapData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'contract IHopBridge',
            name: 'hopBridge',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amountOutMin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationAmountOutMin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationDeadline',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'relayer',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'relayerFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'nativeFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'bonderFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct IOneTwoRouterFacet.HopData',
        name: '_hopData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'sendingAsset',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'chainId',
            type: 'uint256',
          },
        ],
        internalType: 'struct StructInterface.BridgeData',
        name: '_bridgeData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'fromToken',
            type: 'address',
          },
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
                internalType: 'bytes',
                name: 'payload',
                type: 'bytes',
              },
            ],
            internalType: 'struct IAdapter.Route',
            name: 'route',
            type: 'tuple',
          },
        ],
        internalType: 'struct LibSwap.SwapData[]',
        name: '_srcSwaps',
        type: 'tuple[]',
      },
      {
        internalType: 'bytes',
        name: '_destSwaps',
        type: 'bytes',
      },
    ],
    name: 'swapAndBridgeTokensHopL1',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'weth',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'partner',
            type: 'address',
          },
        ],
        internalType: 'struct StructInterface.Swap',
        name: '_swapData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'contract IHopBridge',
            name: 'hopBridge',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amountOutMin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationAmountOutMin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destinationDeadline',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'relayer',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'relayerFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'nativeFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'bonderFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct IOneTwoRouterFacet.HopData',
        name: '_hopData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'sendingAsset',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'chainId',
            type: 'uint256',
          },
        ],
        internalType: 'struct StructInterface.BridgeData',
        name: '_bridgeData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'fromToken',
            type: 'address',
          },
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
                internalType: 'bytes',
                name: 'payload',
                type: 'bytes',
              },
            ],
            internalType: 'struct IAdapter.Route',
            name: 'route',
            type: 'tuple',
          },
        ],
        internalType: 'struct LibSwap.SwapData[]',
        name: '_srcSwaps',
        type: 'tuple[]',
      },
      {
        internalType: 'bytes',
        name: '_destSwaps',
        type: 'bytes',
      },
    ],
    name: 'swapAndBridgeTokensHopL2',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'weth',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'partner',
            type: 'address',
          },
        ],
        internalType: 'struct StructInterface.Swap',
        name: '_swapData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'sendingAsset',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'chainId',
            type: 'uint256',
          },
        ],
        internalType: 'struct StructInterface.BridgeData',
        name: '_bridgeData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'fromToken',
            type: 'address',
          },
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
                internalType: 'bytes',
                name: 'payload',
                type: 'bytes',
              },
            ],
            internalType: 'struct IAdapter.Route',
            name: 'route',
            type: 'tuple',
          },
        ],
        internalType: 'struct LibSwap.SwapData[]',
        name: '_srcSwaps',
        type: 'tuple[]',
      },
      {
        internalType: 'bytes',
        name: '_destSwaps',
        type: 'bytes',
      },
    ],
    name: 'swapAndBridgeTokensHyphen',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'weth',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'partner',
            type: 'address',
          },
        ],
        internalType: 'struct StructInterface.Swap',
        name: '_swapData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'sendingAsset',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'chainId',
            type: 'uint256',
          },
        ],
        internalType: 'struct StructInterface.BridgeData',
        name: '_bridgeData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'fromToken',
            type: 'address',
          },
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
                internalType: 'bytes',
                name: 'payload',
                type: 'bytes',
              },
            ],
            internalType: 'struct IAdapter.Route',
            name: 'route',
            type: 'tuple',
          },
        ],
        internalType: 'struct LibSwap.SwapData[]',
        name: '_srcSwaps',
        type: 'tuple[]',
      },
    ],
    name: 'swapAndBridgeTokensRefuel',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'weth',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'partner',
            type: 'address',
          },
        ],
        internalType: 'struct StructInterface.Swap',
        name: '_swapData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint16',
            name: 'destChainId',
            type: 'uint16',
          },
          {
            internalType: 'uint256',
            name: 'srcPoolId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'destPoolId',
            type: 'uint256',
          },
          {
            internalType: 'address payable',
            name: 'refundAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'minAmountLD',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'lzFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct IOneTwoRouterFacet.StargateData',
        name: '_stargateData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'sendingAsset',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'chainId',
            type: 'uint256',
          },
        ],
        internalType: 'struct StructInterface.BridgeData',
        name: '_bridgeData',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'fromToken',
            type: 'address',
          },
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
                internalType: 'bytes',
                name: 'payload',
                type: 'bytes',
              },
            ],
            internalType: 'struct IAdapter.Route',
            name: 'route',
            type: 'tuple',
          },
        ],
        internalType: 'struct LibSwap.SwapData[]',
        name: '_srcSwaps',
        type: 'tuple[]',
      },
      {
        internalType: 'bytes',
        name: '_destSwaps',
        type: 'bytes',
      },
    ],
    name: 'swapAndBridgeTokensStargate',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
] as const;
