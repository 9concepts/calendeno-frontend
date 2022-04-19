type Props = React.ComponentPropsWithoutRef<"button">;

export const SubmitButton = (props: Props): JSX.Element => {
  return (
    <button
      {...props}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      {props.children}
    </button>
  );
};
