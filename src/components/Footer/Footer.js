import './Footer.css';

const buttons = ['Escrever', 'Alimentar-se', 'Exercitar-se'];

export default function Footer() {

    return (

        <footer>
            {buttons.map((button, index) => (
                <div key={index} className='footer-button'>{button}</div>
            ))}
        </footer>
    );
}