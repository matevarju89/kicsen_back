import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { RecipeTitle } from "../recipe/RecipeTitle";

export const RatingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Comment" multiline source="comment" />
        <ReferenceInput source="user.id" reference="User" label="Posted By">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="recipe.id" reference="Recipe" label="Recipe">
          <SelectInput optionText={RecipeTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Stars" source="stars" />
      </SimpleForm>
    </Create>
  );
};
