import { FC, memo, useEffect, useState, useContext } from "react";

import { HomeHeaderLayout } from "../templates/HomeHeaderLayout";

export const Post: FC = memo(() => {
  return (
    <HomeHeaderLayout>
      <div>
        Postページです
      </div>
    </HomeHeaderLayout>

  )
})
