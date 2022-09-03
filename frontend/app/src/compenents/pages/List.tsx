import { Spinner, Center, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo, useEffect } from "react";
import { useAllLists } from "../../hooks/useAllLists";
import { HeaderLayout } from "../templates/HeaderLayout";

export const List: FC = memo(() => {

  const { getLists, lists, loading } = useAllLists();

  useEffect(() => getLists(), [])
  return (
    <HeaderLayout>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>

      ) : (
          <Wrap p={{ base: 4, md: 10 }}>
            {lists.map((list) => (
              <WrapItem mx="auto">
                {list.name}
              </WrapItem>

            ))}

          </Wrap>
        )
      }

    </HeaderLayout >
  )
})
