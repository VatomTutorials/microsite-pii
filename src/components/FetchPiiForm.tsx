import React from "react";
import { Form, Button } from "rsuite";
import 'rsuite/dist/rsuite.min.css';


interface FetchPiiFormProps {
  onSubmit: (data: string) => void;
}


export function FetchPiiForm({ onSubmit }: FetchPiiFormProps) {
  const [piiKey, setPiiKey] = React.useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  	setPiiKey(e.target.value);
	};


  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    //e.preventDefault();
    if (piiKey === "") return;

    onSubmit(piiKey);

    setPiiKey("");
  };


  return (
    <Form onSubmit={handleSubmit} className="fetch-pii-form">
      <div className="form-row">
        <label htmlFor="piiKey">Pii Key: </label>
        <input
        	value={piiKey}
          onChange={handleChange}
          type="text"
          id="piiKey"
        />
      </div>
      <Button
				color="cyan"
				appearance="primary"
      	className="btn"
      	type="submit"
      >
      	Fetch
      </Button>
    </Form>
  )
}
