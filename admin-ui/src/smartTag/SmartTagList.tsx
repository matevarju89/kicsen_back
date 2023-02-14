import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FAMILY_TITLE_FIELD } from "../family/FamilyTitle";

export const SmartTagList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SmartTags"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Family" source="family.id" reference="Family">
          <TextField source={FAMILY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Lang" source="lang" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
