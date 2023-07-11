import React from "react"


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


  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if ((newItem.piiKey === "") && (newItem.piiValue === "")) return;

    onSubmit(newItem);

    setNewItem({ piiKey: "", piiValue: "" });
  };


  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="piiKey">Pii Key: </label>
        <input
        	value={newItem.piiKey}
          onChange={handleChange}
          type="text"
          name="piiKey"
          id="piiKey"
        />
        <br/>
        <label htmlFor="piiValue">Pii Value: </label>
        <input
        	value={newItem.piiValue}
          onChange={handleChange}
          type="text"
          name="piiValue"
         	id="piiValue"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}
