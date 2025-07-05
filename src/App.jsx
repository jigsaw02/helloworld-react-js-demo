import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [htmlInput, setHtmlInput] = useState(
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Sample Page</title>\n</head>\n<body>\n  <h1>Hello from your HTML!</h1>\n  <p>This is a sample paragraph.</p>\n  <script>alert("Hello from your script!");</script>\n</body>\n</html>'
  );
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    const blob = new Blob([htmlInput], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    setIframeSrc(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [htmlInput]);

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
        <iframe
          className="render-view"
          src={iframeSrc}
          title="Rendered HTML"
          sandbox="allow-scripts"
        />
      </div>
    </div>
  );
}

export default App;
