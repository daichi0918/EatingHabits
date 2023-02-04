import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';


const StyledFab = styled(Fab)({
  position: 'fixed',
  zIndex: 1,
  // top: 650,
  // left: 1180,
  bottom: 20,
  right: 20,
  margin: '0 auto',
});

type Props = {
  onClick: VoidFunction;
}


export const AddButton = (props: Props) => {
  const { onClick } = props;
  return (
    <StyledFab
      aria-label="add"
      sx={{
        bgcolor: "#117768",
        color: "white",
        '&:hover': {
          bgcolor: "#117768",
          color: "white",
          opacity: "0.8"
        },

      }}>
      <AddIcon onClick={onClick} />
    </StyledFab>
  )
}
