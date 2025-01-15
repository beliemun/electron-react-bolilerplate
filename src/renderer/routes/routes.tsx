import { HomePage } from '@pages';
import { PATH } from './constants';
import { Route } from './types';
import FoundationPage, {
  AlertPage,
  ButtonPage,
  CheckboxPage,
  ColorPalletPage,
  DrawerPage,
  FormPage,
  ImagePage,
  InputPage,
  MessagePage,
  ModalPage,
  RadioPage,
  SelectPage,
  SwitchPage,
  TablePage,
  TagPage,
  TextPage,
  TitlePage,
  TooltipPage,
  TransferPage,
} from '@pages/FoundationPage';

export const publicRoutes: Route[] = [
  { path: PATH.HOME, element: <HomePage />, label: 'Home' },
];

export const privateRoutes: Route[] = [];

export const foundationRoutes: Route[] = [
  { path: PATH.FOUNDATION, element: <FoundationPage /> },
  { path: PATH.FOUNDATION_ALERT, element: <AlertPage /> },
  { path: PATH.FOUNDATION_BUTTON, element: <ButtonPage /> },
  // { path: PATH.FOUNDATION_CHECKBOX, element: <CheckboxPage /> },
  { path: PATH.FOUNDATION_COLOR_PALLET, element: <ColorPalletPage /> },
  { path: PATH.FOUNDATION_DRAWER, element: <DrawerPage /> },
  { path: PATH.FOUNDATION_FORM, element: <FormPage /> },
  { path: PATH.FOUNDATION_IMAGE, element: <ImagePage /> },
  { path: PATH.FOUNDATION_INPUT, element: <InputPage /> },
  { path: PATH.FOUNDATION_MESSAGE, element: <MessagePage /> },
  { path: PATH.FOUNDATION_MODAL, element: <ModalPage /> },
  { path: PATH.FOUNDATION_RADIO, element: <RadioPage /> },
  { path: PATH.FOUNDATION_SELECT, element: <SelectPage /> },
  { path: PATH.FOUNDATION_SWITCH, element: <SwitchPage /> },
  { path: PATH.FOUNDATION_TABLE, element: <TablePage /> },
  { path: PATH.FOUNDATION_TAG, element: <TagPage /> },
  { path: PATH.FOUNDATION_TEXT, element: <TextPage /> },
  { path: PATH.FOUNDATION_TITLE, element: <TitlePage /> },
  { path: PATH.FOUNDATION_TOOLTIP, element: <TooltipPage /> },
  { path: PATH.FOUNDATION_TRANSFER, element: <TransferPage /> },
];
