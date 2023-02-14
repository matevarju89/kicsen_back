import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { FAMILY_TITLE_FIELD } from "./FamilyTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const FamilyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="User" target="FamilyId" label="Users">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <ReferenceField
              label="Own_Family"
              source="family.id"
              reference="Family"
            >
              <TextField source={FAMILY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Roles" source="roles" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Recipe"
          target="FamilyId"
          label="Recipes"
        >
          <Datagrid rowClick="show">
            <TextField label="Category1" source="category1" />
            <TextField label="Category2" source="category2" />
            <TextField label="Category3" source="category3" />
            <TextField label="Category4" source="category4" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="Difficulty" source="difficulty" />
            <ReferenceField
              label="Family"
              source="family.id"
              reference="Family"
            >
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="SmartTag"
          target="FamilyId"
          label="SmartTags"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Family"
              source="family.id"
              reference="Family"
            >
              <TextField source={FAMILY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Lang" source="lang" />
            <TextField label="Name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
