import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const RecipeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="category1"
          label="Category1"
          choices={[
            { label: "appetizer", value: "appetizer" },
            { label: "soup", value: "soup" },
            { label: "main", value: "main" },
            { label: "dessert", value: "dessert" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="category2"
          label="Category2"
          choices={[
            { label: "salty", value: "salty" },
            { label: "sweet", value: "sweet" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="category3"
          label="Category3"
          choices={[
            { label: "vegan", value: "vegan" },
            { label: "non-vegan", value: "nonvegan" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectArrayInput
          label="Category4"
          source="category4"
          choices={[
            { label: "chicken", value: "chicken" },
            { label: "seafood", value: "seafood" },
            { label: "beef", value: "beef" },
            { label: "veal", value: "veal" },
            { label: "lamb", value: "lamb" },
            { label: "vegetable", value: "vegetable" },
            { label: "fruit", value: "Fruit" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Description" multiline source="description" />
        <SelectInput
          source="difficulty"
          label="Difficulty"
          choices={[
            { label: "easy", value: "easy" },
            { label: "medium", value: "medium" },
            { label: "hard", value: "hard" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Ingredients" multiline source="ingredients" />
        <ReferenceInput source="user.id" reference="User" label="PostedBy">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
