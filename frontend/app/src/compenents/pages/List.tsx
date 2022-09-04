import {
  Spinner, Center, Wrap, WrapItem, Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons"
import { FC, memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAllLists } from "../../hooks/useAllLists";
import { HeaderLayout } from "../templates/HeaderLayout";

export const List: FC = memo(() => {

  const { getLists, lists, loading } = useAllLists();

  const { userId } = useParams();

  useEffect(() => getLists(userId), [])


  return (
    <HeaderLayout>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>

      ) : (
          // <Wrap p={{ base: 4, md: 10 }}>
          //   {lists.map((list) => (
          //     <WrapItem mx="auto">
          //       {list.name}
          //     </WrapItem>

          //   ))}

          // </Wrap>
          <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {lists.map((list) => (
                  <Tr>
                    <Td>{list.name}</Td>
                    <Td><DeleteIcon /></Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )
      }

    </HeaderLayout >
  )
})
