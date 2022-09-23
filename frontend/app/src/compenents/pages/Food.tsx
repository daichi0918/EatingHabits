import { FC, memo, useEffect, useState, useContext } from "react";

import { HomeHeaderLayout } from "../templates/HomeHeaderLayout";


export const Food: FC = memo(() => {

  return (
    <HomeHeaderLayout>
      <div>消費期限管理ページ</div>
    </HomeHeaderLayout>
  )
})
