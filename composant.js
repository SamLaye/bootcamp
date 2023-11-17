const root = document.getElementById('root')
const title = "Hello world"

const MyCompo = function () {
    return (
        <section>
            <h1>{title}</h1>
        </section>
    )
}

// Autres façons d'écrire le composant 'MyCompo'
// const MyCompo =  () =>
//          (
//             <section>
//                 <h1>{title}</h1>
//             </section>
//         )

// function MyCompo  () {
//     return (
//         <section>
//             <h1>{title}</h1>
//         </section>
//         )
//     }        

const Template = (
    <main>
        <MyCompo></MyCompo>
    </main>        
) 
// Comment fonctionne React
// const div = React.createElement('mai', null, React.createElement('section', null, React.createElement('h1', null, "Hella warld")))
