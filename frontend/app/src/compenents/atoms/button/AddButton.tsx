import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';


const StyledFab = styled(Fab)({
  position: 'fixed',
  zIndex: 1,
  // top: 650,
  // left: 1180,
  bottom: 10,
  right: 10,
  margin: '0 auto',
});

type Props = {
  onClick: VoidFunction;
}


export const AddButton = (props: Props) => {
  const { onClick } = props;
  return (
    <StyledFab color="primary" aria-label="add">
      <AddIcon onClick={onClick} />
    </StyledFab>
  )
}
