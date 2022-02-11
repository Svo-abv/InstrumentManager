import ClientsList from "../components/dictionaryUI/ClientsList";
import ItemsList from "../components/dictionaryUI/ItemsList";
import ObjectsList from "../components/dictionaryUI/ObjectsList";
import OrganizationList from "../components/dictionaryUI/OrganizationList";
import PersonsList from "../components/dictionaryUI/PersonsList";
import UnitsList from "../components/dictionaryUI/UnitsList";
import WarehousesList from "../components/dictionaryUI/WarehousesList";
import DocumentPymentList from "../components/documentUI/DocumentPymentList";
import DocumentStatusList from "../components/documentUI/DocumentStatusList";
import DocumentStockList from "../components/documentUI/DocumentStockList";
import DocumentTypesList from "../components/documentUI/DocumentTypesList";
import { IMenuElements } from "../types/types";

export const documentsMenuElements: IMenuElements[] = [
    { name: "Движения", element: <DocumentStockList /> },
    { name: "Платежы", element: <DocumentPymentList /> },
];

export const dictionaryMenuElements: IMenuElements[] = [
    { name: "Организации", element: <OrganizationList /> },
    { name: "Клиенты", element: <ClientsList /> },
    { name: "Объекты", element: <ObjectsList /> },
    { name: "Физ. лица", element: <PersonsList /> },
    { name: "Склады", element: <WarehousesList /> },
    { name: "Номенклатура", element: <ItemsList /> },
    { name: "Единицы измерения", element: <UnitsList /> },
    { name: "Виды операций", element: <DocumentTypesList /> },
    { name: "Статусы документов", element: <DocumentStatusList /> },
];


export const reportsMenuElements: IMenuElements[] = [];
