import React from 'react';

const Map = () => {
    return (
        <div className="google-map-code">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.826582061173!2d-39.015673324199824!3d-4.968475450739148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7be9fcf3059700d%3A0xe7abc200e322757c!2zRG9uYXMgROKAmWx1eG8!5e0!3m2!1spt-BR!2sbr!4v1765240047752!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                aria-hidden="false"
            />
        </div>
    );
}

export default  Map ;
