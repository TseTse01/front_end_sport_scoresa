"use client";

import { useSelector } from 'react-redux';
import Favoris from '../components/Favoris';
import { RootState } from '../GlobalRedux/store';
import { useEffect } from 'react';

const FavorisPage = () => {
    const fullIds = useSelector((state: RootState) => state.counter.value.ids).join("-")
    useEffect(() => {
        console.log(fullIds);
    }, [fullIds])

    return (
        <div>
            <Favoris />
        </div>
    );
};

export default FavorisPage;