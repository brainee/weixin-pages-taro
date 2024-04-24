

export interface IAccountProps{ 
    account: string; 
}
export interface IFormData{ 
    account: string; 
}
export interface INavigatorProps{ 
    url: string; 
}

export interface IAccountState {
    formData: IFormData;//15600000000/Qqun@1438
    showPassword: boolean;
    accountLogin: string;
    stepDisabled: boolean;
    readedPolicy: boolean;
    isChecked: boolean;
    navigatorProps?:INavigatorProps;
    sourceFrom?: string;
}
type IAccountStateOptional=Partial<IAccountState>;

export interface IUrlParams {
    account: string;
    sourceFrom: string;
}
