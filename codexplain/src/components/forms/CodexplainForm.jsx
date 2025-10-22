
 const CodexplainForm = () => {
    
   return (
     <div className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
        
        <form>
            <label className="block mb-2 font-semibold">Language:</label>
        <select
          name="language"
          className="border rounded-lg p-2 w-full mb-4 bg-transparent"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </select>
        <label className="block mb-2 font-semibold">Your Code:</label>
        <textarea
          name="code"
          required
          placeholder="Paste your code here..."
          className="border rounded-lg w-full p-3 font-mono text-sm bg-transparent min-h-[150px]"
        />
        <button
          type="submit"
          className="mt-4 px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-50"
        >
            Submit
        </button>
        </form>
        
     </div>
   )
 }
 
 export default CodexplainForm