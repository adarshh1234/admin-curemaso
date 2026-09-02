export type ToastVariant = 'info' | 'success' | 'error';

export interface ToastData {
  id: string;
  message: string;
  variant: ToastVariant;
}
