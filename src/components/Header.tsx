import React, { FunctionComponent } from 'react';

type HeaderProps = {
    title: string;
};

export const Header: FunctionComponent<HeaderProps> = ({ title }) => {
    return <div>{title}</div>;
};
