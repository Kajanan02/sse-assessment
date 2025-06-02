import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import CustomButton from '../atoms/CustomButton.jsx';

function LinkButton({item}) {
    const location = useLocation();
    const isActive = location.pathname === item?.path;

    return (
        <Link to={item?.path} className="w-100">
            <CustomButton
                justifyContent="flex-start"
                mb={5}
                bg={isActive ? 'purple.300' : 'transparent'}
            >
                {item?.label}
            </CustomButton>
        </Link>
    );
}

export default LinkButton;
