import React from "react";
import { projects } from "../constants/projects";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";

const Projects = () => {
  return (
    <div className="w-[95%] md:w-[75vw] mx-auto mt-20">
      <h1 className=" text-gray-50 font-bold text-4xl">All Projects</h1>
      <TableContainer
        component={Paper}
        style={{
          backgroundColor: "transparent",
          border: "none",
          marginTop: "20px",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                "& th": { color: "white", fontWeight: "600", fontSize: "18px" },
              }}
            >
              <TableCell>Year</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Built with</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>GitHub</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "& td": {
                    color: "lightgray",
                    borderColor: "#0c225c",
                    paddingY: "30px",
                  },
                }}
              >
                <TableCell>{row.year}</TableCell>
                <TableCell style={{ fontSize: "16px", fontWeight: "600" }}>
                  {row.title}
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-4">
                    {row.tech.map((item, index) => (
                      <span
                        key={index}
                        style={{ backgroundColor: "#143051", color: "cyan" }}
                        className=" px-4 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <a
                    href={row.link}
                    target="_blank"
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                    className="hover:text-cyan-400"
                  >
                    {row.link ? "Visit" : ""}
                    {row.link ? <RiShareBoxLine /> : ""}
                  </a>
                </TableCell>
                <TableCell>
                  <a
                    href={row.github}
                    target="_blank"
                    style={{
                      display: "flex",
                      gap: "6px",
                      alignItems: "center",
                    }}
                    className="hover:text-cyan-400"
                  >
                    <FaGithub style={{ width: "20px", height: "20px" }} />
                    GitHub
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Projects;
