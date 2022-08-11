interface Props {
  contextProviders: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>;
  children: React.ReactNode;
}

export const ContextProviders = (props: Props) => {
  const { contextProviders: components = [], children, ...rest } = props;

  return (
    <>
      {components.reduceRight((acc, Comp) => {
        return <Comp {...rest}>{acc}</Comp>;
      }, children)}
    </>
  );
};
