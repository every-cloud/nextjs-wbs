import Head from "next/head";
import Layout from "./components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>제목표시줄 입니다</title>
        <meta name="description" content="WBS 만들자!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1> 홈입니다</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </Layout>
  );
}
