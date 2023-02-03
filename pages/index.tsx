import { HomeLayout } from "layout/home";
import { HomeProps } from "layout/home/types";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import path from 'path'
import fs from 'fs'

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  const pathFile = path.resolve(process.cwd())
  const file = fs.readFileSync(pathFile + '/server.json', 'utf-8')
  const json = JSON.parse(file)

  return {
    props: {
      data: json.nfts
    }
  }
}

export default function HomePage (props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <HomeLayout {...props} />
  )
}

