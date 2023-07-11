import React from "react"


interface FetchPiiFormProps {
  onSubmit: (data: string) => void;
}


export function FetchPiiForm({ onSubmit }: FetchPiiFormProps) {
  const [piiKey, setPiiKey] = React.useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  	setPiiKey(e.target.value);
	};


  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (piiKey === "") return;

    onSubmit(piiKey);

    setPiiKey("");
  };


  return (
    <form onSubmit={handleSubmit} className="fetch-pii-form">
      <div className="form-row">
        <label htmlFor="piiKey">Pii Key: </label>
        <input
        	value={piiKey}
          onChange={handleChange}
          type="text"
          id="piiKey"
        />
      </div>
      <button className="btn">Fetch</button>
    </form>
  )
}
