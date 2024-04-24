import { IAccountState, IUrlParams } from './interface';

export const defaultState: IAccountState = {
    formData: { account: "" },//15600000000/Qqun@1438
    showPassword: false,
    accountLogin: "账号登录",
    stepDisabled: true,
    readedPolicy: false,
    isChecked: false,
    navigatorProps: {
      url: "/pages/usercenter/register/account/index"
    }
};

export function getInitState(params?: IUrlParams) {
    const state: IAccountState = {
        ...defaultState,
        formData: {account:params?.account??""},
        sourceFrom: params?.sourceFrom
    };

    return state;
}
