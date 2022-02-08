export interface IDialog {
    isOpen: boolean;
    handleClouse: React.MouseEventHandler<HTMLButtonElement>;
    handleAccept: React.MouseEventHandler<HTMLButtonElement>;
    isEdit?: boolean;
}
