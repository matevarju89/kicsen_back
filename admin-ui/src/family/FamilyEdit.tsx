import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FamilyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Country" source="country" />
        <TextInput label="Description" multiline source="description" />
      </SimpleForm>
    </Edit>
  );
};
