import Head from "next/head"

export const MetaTitle = ({title}) => {
  return <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
  </Head>
}
