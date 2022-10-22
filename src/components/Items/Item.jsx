import React from "react";
import { Paper } from "@mui/material";
import "./Item.css"

export default function Item({item, name})
{
    return (
        <Paper className="paperBanner">
            <p className="nameBanner">{name}</p>
            <img className="imagenBanner"
              width="auto"
              height={400}
              src={item} 
              alt="notdound"/>
        </Paper>
    )
}