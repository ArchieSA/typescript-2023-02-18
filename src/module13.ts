export let strConst = "";

const getProperty = <Structure extends {}, Key extends keyof Structure>(
  obj: Structure,
  key: Key
): Structure[Key] => obj[key];

function call<Args extends any[], ReturnType>(
  calledFunction: (...args: Args) => ReturnType,
  ...args: Args
): ReturnType {
  return calledFunction(...args);
}

const result1 = getProperty({ a: "", b: 132 }, "b");

const result = call(getProperty, { a: "", b: 132 }, "b");

type FunctionReturn<FunctionType extends (...args: any[]) => any> =
  FunctionType extends (...args: any[]) => infer ReturnType
    ? ReturnType
    : never;

// type ReturnType = FunctionReturn<typeof getProperty<{ a: 123 }, 'a'>>;
// type test = ReturnType;

// type GetComponentProps<
//   Component extends (props: { children: any }) => ReactNode
// > = Component extends (props: infer PropTypes) => ReactNode
//   ? Omit<PropTypes, "children">
//   : never;

// const ButtonContainer: FC<Omit<GetComponentProps<typeof Button>, "title">> = (
//   props
// ) => {
//   const title = useSelector((state) => selectBuyButtonTitle(state, userId));
//   return <Button {...props} title={title} />;
// };
