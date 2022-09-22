import React, { useState } from "react";
import AddBoxIcon from '@material-ui/icons/AddBox';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  const [bool, setBool] = React.useState(false)

  return (
    <div>
      <form className="create-note" onSubmit={   submitNote }>

        <input
                  onClick={() => { setBool(true) }}

            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder={bool? "Title" : 'TAKE A NOTE .. :)'}
          />
                  {bool &&
          <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows= '3'
        />
        }

        
        <Zoom in={bool}>
          <Fab onClick={submitNote}><AddBoxIcon></AddBoxIcon></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
