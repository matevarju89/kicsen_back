import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { FAMILY_TITLE_FIELD } from "../family/FamilyTitle";

export const SmartTagShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Family" source="family.id" reference="Family">
          <TextField source={FAMILY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Lang" source="lang" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
