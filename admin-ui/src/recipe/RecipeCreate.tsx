import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  NumberInput,
  ReferenceArrayInput,
} from "react-admin";

import { FamilyTitle } from "../family/FamilyTitle";
import { ImageTitle } from "../image/ImageTitle";
import { UserTitle } from "../user/UserTitle";
import { RatingTitle } from "../rating/RatingTitle";
import { SmartTagTitle } from "../smartTag/SmartTagTitle";

export const RecipeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
        <ReferenceInput source="family.id" reference="Family" label="Family">
          <SelectInput optionText={FamilyTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="ForHowMany" source="forHowMany" />
        <ReferenceArrayInput
          source="images"
          reference="Image"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ImageTitle} />
        </ReferenceArrayInput>
        <TextInput label="Ingredients" multiline source="ingredients" />
        <ReferenceArrayInput
          source="likedBy"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="PostedBy">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="ratings"
          reference="Rating"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RatingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="smartTags"
          reference="SmartTag"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SmartTagTitle} />
        </ReferenceArrayInput>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
