//component call inside other component
function App()
{
function User()
{
  return(
    <>
    <h1>i am other component </h1>
    </>
  )
}
    
    return(
        <>
        <h1>i am main component</h1>
        {/* //component calling here */}
        <User/> 
    

        
        </>



    );
}

  
export default App;
