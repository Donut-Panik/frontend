import { FC, memo } from "react";

import { Navbar } from 'ui/components/Navbar'

const _Home: FC = () => {
  return (
    <>
    <Navbar />
    <div>Здарова мир</div>
    </>
  )
}

export const Home = memo(_Home);