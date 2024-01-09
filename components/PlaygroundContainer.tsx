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

const initialJsonSchema = {};
const initialUiSchema = {};
const mods = {};

export default function PlaygroundContainer({ title }) {
  const [schema, setSchema] = React.useState(JSON.stringify(initialJsonSchema));
  const [uischema, setUischema] = React.useState(
    JSON.stringify(initialUiSchema),
  );

  const classes = useStyles();

  return (
    <div className='playground' style={{ padding: '2em' }}>
      <div className={classes.header}>
        <h1>{title}</h1>
      </div>
      <JsonSchemaFormSuite
        lang={'json'}
        schema={schema}
        uischema={uischema}
        mods={mods}
        schemaTitle='Data Schema'
        uischemaTitle='UI Schema'
        onChange={(newSchema, newUiSchema) => {
          setSchema(newSchema);
          setUischema(newUiSchema);
        }}
        width='95%'
        height='800px'
      />
    </div>
  );
}
