import React from "react";
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Episode from "../episodeCard";
import Grid from "@material-ui/core/Grid";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const EpisodeList = ( {episodes, action }) => {

  
  const classes = useStyles();

  let episodeRows = episodes.map((e) => (
      <TableRow key={e.id}>
        <TableCell component="th" scope="row">
          {e.name}
        </TableCell>
        <TableCell align="right">
          {e.air_date}
        </TableCell>
        <TableCell align="right">
          {e.vote_average}
        </TableCell>
      </TableRow>
  ));
  return(
  <>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Episode Title</StyledTableCell>
            <StyledTableCell align="right">
              <CalendarIcon fontSize="small" /> &nbsp;
              Air date
              </StyledTableCell>
            <StyledTableCell align="right">
              <StarRateIcon fontSize="small" /> &nbsp;
              Average Rating
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {episodeRows}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  );
};

export default EpisodeList;