import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FAMILY_TITLE_FIELD } from "../family/FamilyTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const RecipeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Recipes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Category1" source="category1" />
        <TextField label="Category2" source="category2" />
        <TextField label="Category3" source="category3" />
        <TextField label="Category4" source="category4" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Difficulty" source="difficulty" />
        <ReferenceField label="Family" source="family.id" reference="Family">
          <TextField source={FAMILY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ForHowMany" source="forHowMany" />
        <TextField label="ID" source="id" />
        <TextField label="Ingredients" source="ingredients" />
        <ReferenceField label="PostedBy" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
