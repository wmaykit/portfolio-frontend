export interface AsmResultModel {
  compiled: boolean;
  championName: string
  errorCompileMsg: string;
  file: Blob;
}