import '../styles/token-list.css'
import { memo } from 'react';

function InfoPanel() {
    return (  
        <div className="list-item">
                <div className="token-info">
                    <p>#</p>
                    <p className='token-name'>Название</p>
                </div>
                <div className="values-list">
                    <p className="value-item">Цена</p>
                    <p className="value-item">Изм.(24ч)</p>
                    <p className="value-item">Капитализ.</p>
                    <p className="value-item">Объём(24ч)</p>
                </div>
            </div>
    );
}

export default memo(InfoPanel);