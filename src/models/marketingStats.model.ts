export interface IMarketingStat {
    'last': string;
}

export interface IMarketingStats {
    USD: IMarketingStat,
    EUR: IMarketingStat,
    GBP: IMarketingStat,
}