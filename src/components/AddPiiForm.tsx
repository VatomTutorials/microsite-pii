import React from "react"
import { Form, Button } from "rsuite";
import 'rsuite/dist/rsuite.min.css';


interface AddPiiFormProps {
  onSubmit: (data: AddPiiFormData) => void;
}


export interface AddPiiFormData {
  piiKey: string;
  piiValue: string;
}


export function AddPiiForm({ onSubmit }: AddPiiFormProps) {
  const [newItem, setNewItem] = React.useState<AddPiiFormData>({ piiKey: "", piiValue: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setNewItem(prevState => ({
				...prevState,
				[name]: value
		}));
	};


  function handleSubmit(checkStatus: boolean, event: React.FormEvent<HTMLFormElement>) {
    //e.preventDefault();
    console.log("AddPiiForm:handleSubmit(checkStatus, event) params:", checkStatus, event);
    
    if ((newItem.piiKey === "") && (newItem.piiValue === "")) return;

    onSubmit(newItem);

    setNewItem({ piiKey: "", piiValue: "" });
  };


  return (
    <Form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="piiKey">Pii Key: </label>
        <input
        	value={newItem.piiKey}
          onChange={handleChange}
          type="text"
          name="piiKey"
          id="piiKey"
        />
			</div>
      <div className="form-row">
        <label htmlFor="piiValue">Pii Value: </label>
        <input
        	value={newItem.piiValue}
          onChange={handleChange}
          type="text"
          name="piiValue"
         	id="piiValue"
        />
      </div>
      <br/>
      <div className="form-row">
      <Button
				color="cyan"
				appearance="primary"
      	className="btn"
      	type="submit"
      >
      	Add
      </Button>
      </div>
    </Form>
  )
}
