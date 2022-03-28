import { Layout } from "../layouts/layout";

export const HomeTemplate = (): JSX.Element => {
  return (
    <Layout>
      <div>
        <h1 role="heading" className="text-3xl font-bold underline">
          Hello
        </h1>
      </div>
    </Layout>
  );
};
