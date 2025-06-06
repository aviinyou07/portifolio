import PropTypes from 'prop-types';

const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes = ''
}) => {
    
    const iconElement = icon ? (
        <span className='download-icon' aria-hidden="true">
            <i className={`fa-solid ${icon}`}></i>
        </span>
    ) : null;

    
    return href ? (
        <a href={href} target={target} className={`btn btn-primary ${classes}`}>
            {label}
            {iconElement}
        </a>
    ) : (
        <button className={`btn btn-primary ${classes}`}>
            {label}
            {iconElement}
        </button>
    );
};

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,  
    classes: PropTypes.string
};

const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes = ''
}) => {
    
    const iconElement = icon ? (
        <span className='download-icon' aria-hidden="true">
            <i className={`fa-solid ${icon}`}></i>
        </span>
    ) : null;

    
    return href ? (
        <a href={href} target={target} className={`btn btn-outline ${classes}`}>
            {label}
            {iconElement}
        </a>
    ) : (
        <button className={`btn btn-outline ${classes}`}>
            {label}
            {iconElement}
        </button>
    );
};

ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,  
    classes: PropTypes.string
};


export { ButtonPrimary, ButtonOutline };
