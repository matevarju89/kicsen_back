import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FamilyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Country" source="country" />
        <TextInput label="Description" multiline source="description" />
      </SimpleForm>
    </Create>
  );
};
