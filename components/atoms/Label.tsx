type Props = React.ComponentPropsWithoutRef<"label">;

export const Label = (props: Props): JSX.Element => {
  return (
    <label {...props} className="block text-gray-700 text-sm font-bold mb-2">
      {props.children}
    </label>
  );
};
