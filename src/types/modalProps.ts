export interface FormInModalProps {
  notificationHandler: (_submitFn: SubmitFnType) => Promise<void>;
}
export type SubmitFnType = () => Promise<void>;
