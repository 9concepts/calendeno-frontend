type Props = {
  title: string;
};

export const DailyEvent = ({ title }: Props): JSX.Element => {
  return (
    <div className="text-white bg-slate-400 text-center rounded">{title}</div>
  );
};
