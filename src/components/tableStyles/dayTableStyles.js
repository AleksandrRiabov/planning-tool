
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
   table: {
     minWidth: 350,
   },
   cell: {
      border: "1px solid red"
   },
   product: {
      fontWeight: 600,
      background: "teal",
      color: "white",
      textTransform: "capitalize"
   },
   tableTitle: {
      textAlign: "center",
      borderBottom: "1px solid #000",
      padding: "3%"
   },
   tableHead: {
      background: "#d0d0d04d"
   },
   flexWrapper: {
      display: "flex",
      flexDirection: "column"
   },
	predicted: {
		background: "#000",
		color: "#fff"
	}
 });
