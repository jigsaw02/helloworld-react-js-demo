import { useState } from 'react'
import './App.css'

function App() {
  const [htmlInput, setHtmlInput] = useState('<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Sample Page</title>\n</head>\n<body>\n  <h1>Hello from your HTML!</h1>\n  <p>This is a sample paragraph.</p>\n</body>\n</html>');

  const handleInputChange = (event) => {
    setHtmlInput(event.target.value);
  };

  return (
    <div className="container">
      <div className="editor-pane">
        <h2>HTML Input</h2>
        <textarea
          value={htmlInput}
          onChange={handleInputChange}
          placeholder="Paste your HTML here"
        />
      </div>
      <div className="render-pane">
        <h2>Rendered Output</h2>
        <div
          className="render-view"
          dangerouslySetInnerHTML={{ __html: htmlInput }}
        />
      </div>
    </div>
  )
}

export default App