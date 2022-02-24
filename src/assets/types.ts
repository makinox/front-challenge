import dataMock from './dataMock.json';
import formattedMock from './formattedMock.json';

export type FormattedType = typeof formattedMock;
export type CryptoType = typeof dataMock;
export type CryptoKeyType = keyof typeof dataMock;
