import React from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// Generate Order Data
function createData(id, date, name, historia, estudio) {
  return { id, date, name, historia, estudio };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "176H1231",
    "Rayos X",
    "VISA ⠀•••• 3719"
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "176H1232",
    "Tomografia",
    "VISA ⠀•••• 2574"
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "176H1233",
    "Ecografia",
    "MC ⠀•••• 1253"
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "176H1234",
    "Rayos X",
    "AMEX ⠀•••• 2000"
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "176H1235",
    "Tomografia",
    "VISA ⠀•••• 5919"
  ),
];
function preventDefault(event) {
  event.preventDefault();
}

const ColaComponent = () => {
  return (
    <div>
      <h2> Últimos Estudios </h2>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fehca</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Historia</TableCell>
            <TableCell>Estudio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.historia}</TableCell>
              <TableCell>{row.estudio}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link to={"Estudios"} className="link-2">
        Ver más estudios
      </Link>
    </div>
  );
};

export default ColaComponent;
