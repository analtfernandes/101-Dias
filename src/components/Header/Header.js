import Icons from '../Icons';

import './Header.css';

export default function Header() {

    return (

        <header>
            <div className='menu'>
                <div>
                    <h1>Tempo</h1>
                    <span>0 / 960</span>
                </div>
                <div>
                    <h1>Dias</h1>
                    <span>1 / 101</span>
                </div>
            </div>
            <div>
                <div>
                    <Icons type='create' />
                    <span>0</span>
                </div>
                <div>
                    <Icons type='barbell-outline' />
                    <span>0</span>
                </div>
                <div>
                    <Icons type='restaurant' />
                    <span>0 / 10</span>
                </div>
                <div>
                    <Icons type='happy' />
                    <span>50 / 50</span>
                </div>
                <div>
                    <Icons type='medkit' />
                    <span>0 / 5</span>
                </div>
            </div>
        </header>
    );
}