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
  Box,
  Flex,
  Spacer,
  Button,
  IconButton
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon } from "@chakra-ui/icons"
import { FC, memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAllLists } from "../../hooks/useAllLists";
import { HeaderLayout } from "../templates/HeaderLayout";
import { ListAdd } from "../organisms/list/ListAdd";

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

          // </Wrap>
          // <Box w="100%">
          // <Flex justify='center' align='center' h="50vh" w="100%">
          <>
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
                      <Td>
                        {/* <Center> */}
                        <DeleteIcon />
                        {/* </Center> */}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
            <Center>
              <ListAdd />
            </Center>

          </>

        )
      }
    </HeaderLayout >
  )
})
