import React from 'react';

import { Select } from 'antd'
const { Option } = Select;

const SelectLanguage = () => {

    return (
        <Select onChange={languageChange}>
            <Option></Option>
            <Option value='pt-BR'>PT</Option>
            <Option value='en-US'>EN</Option>
        </Select>
    );
};

export default SelectLanguage;