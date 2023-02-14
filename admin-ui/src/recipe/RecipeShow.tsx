import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { RECIPE_TITLE_FIELD } from "./RecipeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { FAMILY_TITLE_FIELD } from "../family/FamilyTitle";

export const RecipeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="Image" target="RecipeId" label="Images">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Height" source="height" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Recipe"
              source="recipe.id"
              reference="Recipe"
            >
              <TextField source={RECIPE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="URL" source="url" />
            <TextField label="Width" source="width" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Rating"
          target="RecipeId"
          label="Ratings"
        >
          <Datagrid rowClick="show">
            <TextField label="Comment" source="comment" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Posted By" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Recipe"
              source="recipe.id"
              reference="Recipe"
            >
              <TextField source={RECIPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Stars" source="stars" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
