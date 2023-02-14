import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FamilyTitle } from "../family/FamilyTitle";
import { RecipeTitle } from "../recipe/RecipeTitle";

export const SmartTagEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="family.id" reference="Family" label="Family">
          <SelectInput optionText={FamilyTitle} />
        </ReferenceInput>
        <SelectInput
          source="lang"
          label="Lang"
          choices={[
            { label: "EN", value: "En" },
            { label: "HU", value: "Hu" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="recipe"
          reference="Recipe"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecipeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
