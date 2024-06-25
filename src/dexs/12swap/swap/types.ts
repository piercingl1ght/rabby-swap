import { Address } from "viem"
import { 
    ChainId, 
    DiamondSwapData, 
    PathType, 
    TypeV3Adapter, 
    TypeCurveAdapter, 
    BestWaysResponse, 
    TypeTx, 
    TxParams, 
    IToken 
} from "../types/index"
import { BigNumber } from "ethers"

export type RawDataToSwapData = (args: {
    bestWays: BestWaysResponse[],
    amount: BigNumber,
}) => Promise<QuoteResponse>;

export type HandledPathdata = (args: {
    path: PathType[],
    amount: BigNumber
}) => Promise<QuoteResponse>

export type GetCurveRouterAdapterType = (args: {
    chainId: ChainId;
    address: Address;
}) => Promise<TypeCurveAdapter>;

export type GetV3PairData = (props: {
    address: Address;
    fromAddress: Address;
    /*
     * there use eslint-disable because it name from API
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    ToAddress: Address;
    path: PathType;
}) => Promise<{ fee: number; from: Address; to: Address }>;

export type GetUniRouterAdapterType = (args: {
    chainId: ChainId;
    address: Address;
}) => Promise<TypeV3Adapter>;

export type GetV3PairFee = (address: Address, chainId: ChainId) => Promise<number>;

export type QuotePath = (args: {
    fromToken: Address,
    toToken: Address,
    amount: BigNumber,
    chainId: ChainId,
    routes: DiamondSwapData[]
}) => Promise<QuoteResponse>

export type QuoteResponse = {
    amountOutMin: BigNumber,
    routes: DiamondSwapData[]
}

export type GetRoute = (args: {
    path: PathType,
    routes: DiamondSwapData[],
    amount: BigNumber,
    deadline: number
}) => Promise<QuoteResponse>

export type swapParams = (args: {
    amount: BigNumber;
    isEstimate?: boolean;
    fromToken: IToken;
    toToken: IToken;
    slippage: number;
    // bridge?: BridgeTypes;
    // client?: boolean;
}) => Promise<GetPreparedTxResponse>;

export type GetPreparedTxResponse = {
    method?: TypeTx;
    data?: unknown[];
    params?: TxParams;
    description?: string[];
    amountOut?: BigNumber;
    calldata?: Address;
};