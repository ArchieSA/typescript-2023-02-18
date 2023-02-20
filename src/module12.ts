export interface IdLabel {
  id: number;
}

interface NameLabel {
  name: string;
}

type NameId<Label extends string | number> = Label extends number
  ? IdLabel
  : NameLabel;

const createLabel = <Label extends string | number>(
  label: Label
): NameId<Label> => {
  throw "";
};

const a = createLabel(123);
const b = createLabel("123");
a.id;
b.name;
