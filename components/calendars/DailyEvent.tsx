type Props = {
  title: string;
};

export const DailyEvent = ({ title }: Props): JSX.Element => {
  return (
    <div className="text-white bg-slate-400 pl-2 pr-2 rounded">{title}</div>
  );
};
