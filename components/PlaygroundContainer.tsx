import React from 'react';

import JsonSchemaFormSuite from './JsonSchemaFormSuite';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  header: {
    '& h1': {
      textAlign: 'center',
      margin: '1em',
    },
    '& p': {
      marginRight: '5em',
      marginLeft: '5em',
    },
  },
});

// Can be used to set initial schemas and mods (useful for development)
const initialJsonSchema = {};
const initialUiSchema = {};
const mods = {};

export default function PlaygroundContainer({ title }: { title: string }) {
  const [schema, setSchema] = React.useState(JSON.stringify(initialJsonSchema));
  const [uischema, setUischema] = React.useState(
    JSON.stringify(initialUiSchema),
  );
  const classes = useStyles();
  return (
    <div className='playground'>
      <h1>{title}</h1>
      <JsonSchemaFormSuite
        lang={'json'}
        schema={schema}
        uischema={uischema}
        mods={mods}
        schemaTitle='Data Schema'
        uischemaTitle='UI Schema'
        onChange={(newSchema: string, newUiSchema: string) => {
          setSchema(newSchema);
          setUischema(newUiSchema);
        }}
        width='95%'
        height='800px'
      />
    </div>
  );
}
