import { useState } from "react";
import { generateReply } from "./api/gemini";

function App() {
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);

    const emailContent =
      document.querySelector(".a3s")?.innerText || "";

    const reply = await generateReply(emailContent);

    const composeBox = document.querySelector(
      '[role="textbox"][g_editable="true"]'
    );

    if (composeBox) {
      composeBox.focus();
      document.execCommand("insertText", false, reply);
    }

    setLoading(false);
  };

  return (
        <button
            onClick={handleGenerate}
            style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "10px 16px",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            zIndex: 9999,
            fontSize: "14px",
        }}>
            {loading ? "Generating..." : "✨ AI Reply"}
        </button>
  );
}

export default App;