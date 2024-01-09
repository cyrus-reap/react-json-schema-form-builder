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
  submitButton: {
    backgroundColor: 'red',
    color: 'black',
    '&:hover': {
      backgroundColor: '#0069d9',
    },
    border: 'none',
    borderRadius: '4px',
    padding: '10px 15px',
    fontSize: '16px',
    cursor: 'pointer',
  },
});

const initialJsonSchema = {};
const initialUiSchema = {
  submitButton: {
    'ui:widget': 'button',
    'ui:options': {
      classNames: 'submitButton',
    },
  },
};
const mods = {};

export default function PlaygroundContainer({ title }) {
  const [schema, setSchema] = React.useState(JSON.stringify(initialJsonSchema));
  const [uischema, setUischema] = React.useState(
    JSON.stringify(initialUiSchema),
  );

  const classes = useStyles();
  initialUiSchema.submitButton['ui:options'].classNames = classes.submitButton;

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
