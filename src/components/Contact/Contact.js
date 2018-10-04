import React from 'react';
import {Route, Link} from 'react-router-dom';

import FAQ from './FAQ/FAQ';

const contact = () => {
    return(
        <div>
            <p>Contact Page</p>
            <Link to = "/contact/faq">FAQs</Link>
            <Route path = "/contact/faq" component = {FAQ}/>
        </div>
    )
}

export default contact;