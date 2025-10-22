import CodexplainForm from "./forms/CodexplainForm"
import Header from "./Header"

  
 const CodeEntry = () => {
   return (
     <div className="min-h-screen flex flex-col items-center p-6" >
        <Header />
        <CodexplainForm />
     </div>
   )
 }
 
 export default CodeEntry