import React from "react";
import { LabelList, Input } from "./Filter.styled";

export const Filter = ({value, onChange}) => (
    <LabelList> 
        Find contact by Name
        <Input type="text" value={value} onChange={onChange}></Input>
    </LabelList>
);


export default Filter;