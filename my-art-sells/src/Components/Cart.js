import '../Styles/Cart.css'

function Cart() {
    const Peintures = 20
    const DessinFusain = 10
    const DessinGraphique = 8
    return (<div className="cart">
            <h2>Panier</h2>
        <ul>
            <li>Peintures : {Peintures}€ / H de travail</li>
            <li>Dessin Fusain : {DessinFusain}€ / H de travail</li>
            <li>Dessin Graphique : {DessinGraphique}€ / H de travail</li>
        </ul>
            Total : {Peintures + DessinFusain + DessinGraphique }€ /H de travail
        </div>)
    }

export default Cart