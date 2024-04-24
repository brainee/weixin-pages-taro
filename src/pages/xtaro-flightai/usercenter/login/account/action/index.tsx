
import { IAccountState } from '../state/interface';

export enum EAccountAction {
    modifyTripType = 'modifyTripType',
    updateOneWayDate = 'updateOneWayDate',
    updateRoundDate = 'updateRoundDate',
    updateDepartCity = 'updateDepartCity',
    updateArriveCity = 'updateArriveCity',
    exchangeCity = 'exchangeCity', // 城市交换
    updateLuggageCheck = 'updateLuggageCheck',
    changePassenger = 'changePassenger',
    updateHotelCityCheck = 'updateHotelCityCheck',
    updateHotelCity = 'updateHotelCity',
    updateHotelDate = 'updateHotelDate',
    loadHistory = 'loadHistory',
    closeTips = 'closeTips',
    removeHistory = 'removeHistory',
    changEye='changEye',
}

export interface IUpdateOneWayDateAction {
    type: EAccountAction.updateOneWayDate;
    payload: string;
}

export interface IUpdateRoundDateAction {
    type: EAccountAction.updateRoundDate;
    payload: [string, string];
}

export interface IUpdateLuggageCheckAction {
    type: EAccountAction.updateLuggageCheck;
    payload: boolean;
}

export interface IExchangeCityAction {
    type: EAccountAction.exchangeCity;
}
export interface IUpdateHotelCityCheckAction {
    type: EAccountAction.updateHotelCityCheck;
    payload: boolean;
}

export interface IUpdateHotelDateAction {
    type: EAccountAction.updateHotelDate;
    payload: [string, string];
}

export interface ILoadHistoryAction {
    type: EAccountAction.loadHistory;
    payload: Partial<IAccountState>;
}

export interface ICloseTipsAction {
    type: EAccountAction.closeTips;
}

export interface IRemoveHistoryAction {
    type: EAccountAction.removeHistory;
}
export interface IChangeEyeAction {
    type: EAccountAction.changEye;
    payload: boolean;
}

export type IAccountAction =
    | IUpdateOneWayDateAction
    | IUpdateRoundDateAction
    | IUpdateLuggageCheckAction
    | IExchangeCityAction
    | IUpdateHotelCityCheckAction
    | IUpdateHotelDateAction
    | ILoadHistoryAction
    | ICloseTipsAction
    | IChangeEyeAction
    | IRemoveHistoryAction;
