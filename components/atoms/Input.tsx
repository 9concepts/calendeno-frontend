type Props = React.ComponentPropsWithoutRef<"input">;

export const Input = (props: Props): JSX.Element => {
  return (
    <input
      {...props}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  );
};
