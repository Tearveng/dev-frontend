export interface ActionProp {
  number: number;
  name: string;
}

export interface DropZoneProps {
  openInputFile: boolean;
  setOpenInputFile: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ExpandArr {
  addDocument: boolean;
  addRecipient: boolean;
  addMessage: boolean;
}
