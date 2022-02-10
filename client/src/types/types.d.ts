import React from "react";

export interface IDialog {
    isOpen: boolean;
    handleClouse: React.MouseEventHandler<HTMLButtonElement>;
    handleAccept: React.MouseEventHandler<HTMLButtonElement>;

}

export interface IEditDialog {
    isOpen: boolean;
    handleClouse: React.MouseEventHandler<HTMLButtonElement>;
    handleAccept: React.Dispatch<any>;
    isEdit: boolean;
    id?: string | false;
}

export interface IMenuElements {
    name: string;
    element: JSX.Element;
}
export interface IUserSelectItem {
    value: number;
    title: string;
    handlerApi: () => Promise<any>;
    fullWidth?: boolean;
    sx?: any;
}
export interface IDataSelectItem extends IUserSelectItem {
    onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}
