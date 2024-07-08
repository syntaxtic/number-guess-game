import {
  Container,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
} from '@mui/material';
import { deepOrange, green } from '@mui/material/colors';

const History = ({ history }) => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '280px',
        overflow: 'scroll',
      }}
    >
      <Table>
        <TableBody>
          {history.map((h, i) => (
            <TableRow
              key={`h${i}`}
              sx={{
                width: '50%',
                display: 'inline-flex',
                '&:nth-of-type(2n+1)': {
                  justifyContent: 'flex-end',
                },
              }}
            >
              <TableCell
                sx={{
                  borderBottom: 'none',
                  justifyContent: 'flex-end',
                  fontSize: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.5rem',
                }}
              >
                <Avatar
                  sx={{
                    display: 'inline-flex',
                    bgcolor: green[500],
                    marginRight: '0.5rem',
                  }}
                  variant="rounded"
                >
                  {`+${h.plus}`}
                </Avatar>
                <Avatar
                  sx={{
                    display: 'inline-flex',
                    bgcolor: deepOrange[500],
                  }}
                  variant="rounded"
                >
                  {`-${h.minus}`}
                </Avatar>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: 'none',
                  fontSize: '2rem',
                  padding: '0.5rem',
                }}
              >
                {h.inputs.join('')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default History;
