type Props = React.ComponentPropsWithoutRef<"form">;

export const Form = (props: Props): JSX.Element => {
  return (
    <form {...props} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {props.children}
    </form>
  );
};