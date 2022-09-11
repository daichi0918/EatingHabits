// import {
//   Spinner,
//   Center,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   TableContainer,
//   Grid,
//   Flex
// } from "@chakra-ui/react";
// import { DeleteIcon } from "@chakra-ui/icons"
import { FC, memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAllLists } from "../../hooks/useAllLists";
import { HeaderLayout } from "../templates/HeaderLayout";
import { ListAdd } from "../organisms/list/ListAdd";
import { ListType } from "../../types/api/list";
import { ListDeleteDialog } from "../organisms/list/ListDeleteDialog";

export const List: FC = memo(() => {

  const [lists, setLists] = useState<Array<ListType>>([]);

  const [trigger, setTrigger] = useState(false);

  const { getLists, loading } = useAllLists();

  const { userId } = useParams();

  useEffect(() => getLists(userId, setLists), [trigger])


  return (
    <HeaderLayout>
      {/* {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>

      ) : (
          <>
            <Flex justify='center'>
              <div style={{ margin: "0 auto" }}>
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
                            <ListDeleteDialog userId={userId} id={list.id} setTrigger={setTrigger} />
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </div>
              <Center>
                <ListAdd userId={userId} lists={lists} setLists={setLists} setTrigger={setTrigger} />
              </Center>
          </>

        )
      } */}
    </HeaderLayout >
  )
})
