import { Link } from "react-router-dom";
import '../styles/token-list.css'
import '../styles/token-list.css'
import { numberFormat } from "../utils";

function TokenItem({token}) {

    return (
        <Link className="list-item" to={`token/${token.id}`}>
            <div className="token-info">
                <p className="token-rank">{token.rank}</p>
                <img className="token-img" src={token.images['60x60']} loading="lazy" alt="" />
                <p>{token.name}</p>
                <p className="token-symbol">{token.symbol}</p>
            </div>
            <div className="values-list">
                <div className="value-item">{'$ ' + numberFormat(token.values.USD.price.toFixed(2))}</div>
                <div className={'value-item ' + (token.values.USD.percentChange24h > 0 ? 'green': 'red')}>
                    {numberFormat(token.values.USD.percentChange24h.toFixed(2)) + '%'}
                </div>
                <div className="value-item">{'$ ' + numberFormat(token.values.USD.marketCap.toFixed(2))}</div>
                <div className="value-item">{'$ ' + numberFormat(token.values.USD.volume24h.toFixed(2))}</div>
            </div>
        </Link>
    );
}

export default TokenItem;