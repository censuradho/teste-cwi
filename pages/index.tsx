import { HomeLayout } from "layout/home";
import { HomeProps } from "layout/home/types";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { nftService } from "services/nft";

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  const { data } = await nftService.findMany()

  if (!data) return {
    notFound: true,
    revalidate: 10
  }
  
  return {
    props: {
      data
    },
    revalidate: 10
  }
}

export default function HomePage (props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <HomeLayout {...props} />
  )
}

