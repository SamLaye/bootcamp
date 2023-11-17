const root = document.getElementById('root')

        const MyCompo = function (props) {
            return (
                <section>
                    <h1>{props.data}</h1>
                </section>
            )
        }
function Template  (){
    const title = "Hello world"
    return (
        <main>
            <MyCompo data = {title}/>
        </main>  
    )      
} 
    
ReactDOM.render(<Template />, root)