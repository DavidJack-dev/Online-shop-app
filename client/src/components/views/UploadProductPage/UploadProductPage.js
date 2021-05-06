import React from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';

import { useState } from 'react';
import Item from 'antd/lib/list/Item';
const { Title } = Typography;
const { TextArea } = Input;

const Continents = [
    { key: 1, value: "Africa" },
    { key: 2, value: "Europe" },
    { key: 3, value: "Asia" },
    { key: 4, value: "North America" },
    { key: 5, value: "South America" },
    { key: 6, value: "Australia" },
    { key: 7, value: "Antarctica" }
]

function UploadProductPage() {

    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDecriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [ContinentsValue, setContinentsValue] = useState(1)

    const onTitleChange = (e) =>{
        setTitleValue(e.currentTarget.value)
    }
    const onDescriptionChange = (e) =>{
        setDecriptionValue(e.currentTarget.value)
    }
    const onPriceChange = (e) =>{
        setPriceValue(e.currentTarget.value)
    }
    const onContinentsSelectChange = (e) => {
        setContinentsValue(e.currentTarget.value)
    }
    

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto'}}>
            <div style={{ textAlign: 'center', marginBottom: '2rem'}}>
                <Title level={2}> Upload Travel Product</Title>
            </div>


            <form onSubmit>

                  {/* DropZone */}
            <br />
            <br />
            <label>Title</label>
            <Input type="text" 
                    onChange={onTitleChange}
                    value={TitleValue}/>
            <br />
            <br />
            <label>Description</label>
            <TextArea
                onChange={onDescriptionChange}
                value={DescriptionValue} />
            <br />
            <br />
            <label>Price($)</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
            <br />
            <br />
            <select onChange={onContinentsSelectChange} value> 
            {Continents.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
            </select>
            <br />
            <br />
            <Button
                onClick>
                Sumbit
            </Button>


            </form>
        </div>

        
    )
}

export default UploadProductPage
