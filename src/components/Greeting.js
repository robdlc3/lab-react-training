const Greeting = ({ lang, children }) => {
    let salutation = '';

    switch (lang) {
        case 'de':
            salutation = 'Hallo';
            break;
        case 'fr':
            salutation = 'Bonjour';
            break;
        case 'en':
            salutation = 'Hello';
            break;
        case 'es':
            salutation = 'Hola';
            break;
        default:
            salutation = '';
    }
    return (
        <div>
            <p>{salutation} {children}</p>
        </div>
    )
}

export default Greeting;
