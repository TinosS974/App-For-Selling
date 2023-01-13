import '../Styles/Banner.css'
import gojo from '../Assets/Graphiques/gojoraph.jpg'

function Banner() {
    const title = "My Art Sellings"
    return (<div className="art-banner">
                <img src={gojo} alt='My art Sellings' className='gojoraph' />
                <h1 className='title-site'>{title}</h1>
            </div>)
    }

    export default Banner


//exemple pour mettre du style avec l'attribut style (classname est mieux) :

//function Banner() {
//    const title = "My Art Sellings"
//      return (<div style={{
//        color: 'black',
//        textAlign: 'right',
//        padding: 32,
//        borderBottom: 'solid 3px black'
//      }}><h1>{title}</h1></div>)
//    }