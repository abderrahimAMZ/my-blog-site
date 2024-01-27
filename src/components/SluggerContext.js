import React from 'react';

const SluggerContext = React.createContext({
    slug: (text) => text.replace(/\s+/g, '-').toLowerCase()
});

export default SluggerContext;