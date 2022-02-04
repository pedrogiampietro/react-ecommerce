import { Layout } from '../Shared/Layout';

export function NotFound() {
  const style = {
    fontWeight: 'bold',
    textAlign: 'center',
  };

  return (
    <Layout>
      <p style={style}>Unfortunately we can't find that page</p>
    </Layout>
  );
}
