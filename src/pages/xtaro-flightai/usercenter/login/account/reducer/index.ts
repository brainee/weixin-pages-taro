import { Reducer } from 'react';
import dayjs from 'dayjs';
import { IAccountState } from '../state/interface';
import { EAccountAction, IAccountAction } from '../action';

export const reducer: Reducer<IAccountState, IAccountAction> = (prevState: IAccountState, action: IAccountAction) => {
    switch (action.type) {
        case EAccountAction.changEye: {
            const showPassword = action.payload;

            return {
                ...prevState,
                showPassword:!showPassword
            };
        }
        case EAccountAction.loadHistory: {
            const history = action.payload;

            return {
                ...prevState,
                ...history
            };
        }
        case EAccountAction.updateOneWayDate: {
            const departDate = action.payload;
            const returnDate = dayjs(departDate).add(1, 'day').format('YYYY-MM-DD');
            return {
                ...prevState,
                departDate,
                returnDate,
                checkInDate: departDate,
                checkOutDate: returnDate,
                modifyHotelDate: false
            };
        }
        case EAccountAction.updateRoundDate: {
            const [departDate, returnDate] = action.payload;
            return {
                ...prevState,
                departDate,
                returnDate,
                checkInDate: departDate,
                checkOutDate: returnDate,
                modifyHotelDate: false
            };
        }

        case EAccountAction.updateLuggageCheck:
            return {
                ...prevState,
                checkLuggage: action.payload
            };
        
        case EAccountAction.updateHotelDate: {
            const [checkInDate, checkOutDate] = action.payload;
            return {
                ...prevState,
                modifyHotelDate: true,
                checkInDate,
                checkOutDate
            };
        }
        case EAccountAction.closeTips: {
            return {
                ...prevState,
                hideTips: true
            };
        }
        case EAccountAction.removeHistory:
            return {
                ...prevState,
                historyList: []
            };
        default:
            return prevState;
    }
};
