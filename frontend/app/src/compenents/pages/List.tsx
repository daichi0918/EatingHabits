import {
  Spinner,
  Center,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons"
import { FC, memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAllLists } from "../../hooks/useAllLists";
import { HeaderLayout } from "../templates/HeaderLayout";
import { ListAdd } from "../organisms/list/ListAdd";
import { ListType } from "../../types/api/list";

export const List: FC = memo(() => {

  const [lists, setLists] = useState<Array<ListType>>([]);

  const [trigger, setTrigger] = useState(false);

  const { getLists, loading } = useAllLists();

  const { userId } = useParams();

  useEffect(() => getLists(userId, setLists), [])


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
              <ListAdd userId={userId} lists={lists} setLists={setLists} />
            </Center>

          </>

        )
      }
    </HeaderLayout >
  )
})
