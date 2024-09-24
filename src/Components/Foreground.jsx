import React, { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [doc, setdoc] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    setdoc([...doc, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(doc);
  };

  const handleDelete = (index) => {
    const updatedDoc = [...doc];
    updatedDoc.splice(index, 1);
    setdoc(updatedDoc);
  };

  let renderDoc = <h2 className="text-white">No Doc to render</h2>;


  renderDoc = doc.map((t, i)=>{
    return(
      <div className="">
        <Card reference={ref} key={i} title={t.title} desc={t.desc} onDelete={() => handleDelete(i)} />
      </div>
    )
  })

  return (
    <>
      <div ref={ref} className="top-0 left-0 z-[3] h-full w-full">
        <div className="input-container fixed input  top-7 right-10">
          <form className="input-form flex gap-5" onSubmit={SubmitHandler}>
            <input
              type="text"
              className="input-text text-center p-1 border-2 border-zinc-600 text-white bg-zinc-800 rounded-lg"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
            <input
              type="text"
              className="input-text text-center p-1 border-2 border-zinc-600 text-white bg-zinc-800 rounded-lg"
              placeholder="Enter Description"
              value={desc}
              onChange={(e) => {
                setdesc(e.target.value);
              }}
            />
            <button className="input-button bg-blue-600 w-28 rounded-lg text-white">
              Let's do it
            </button>
          </form>
        </div>

        <div className="Card-display-wrapper p-4">
          <div className="Card-display grid grid-cols-5 grid-rows-5 w-full h-[120rem] p-2">{renderDoc}</div>
        </div>
      </div>
    </>
  );
}

export default Foreground;
