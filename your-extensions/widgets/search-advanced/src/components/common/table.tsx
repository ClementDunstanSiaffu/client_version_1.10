
import {React,jsx} from 'jimu-core';

type propsType = {list:any[],handleClick:(val:any)=>void,className?:any,locatingPosition:{status:boolean,error:boolean}}

export default function Table (props:propsType) {
    const { list, handleClick,locatingPosition } = props
    if (list?.length && !locatingPosition["status"] && !locatingPosition["error"]){
        const item = list[0].attributes;
        const keys = Object.keys(item);
        
        return (
            <table style={{width:"100%"}}>
                <caption></caption>
                <thead>
                    {/*TODO */}
                    {/* <tr>
                    <th>Comune</th>
                    <th>Codice Istat</th>
                    </tr> */}
                    <tr>
                    <th style={{marginRight:70}}>{keys[1]}</th>
                    <th  style={{marginRight:70}}>{keys[2]}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((sto, i) => {
                        const itemKeys = Object.keys(sto.attributes);
                        return(
                            <tr className="item-row" key={i}>
                            <td className="item-table" id={sto.attributes.FID} onClick={handleClick}>
                                {sto.attributes[itemKeys[1]]}
                            </td>
                            <td className="item-table" id={sto.attributes.FID} onClick={handleClick}>
                                {sto.attributes[itemKeys[2]]}
                            </td>
                            </tr>
                        )})
                    }
                    {/* TODO */}
                    {/* {list.map((sto, i) => (
                        <tr className="item-row" key={i}>
                        <td className="item-table" id={sto.attributes.OBJECTID} onClick={handleClick}>{sto.attributes.NOMECOMUNE}</td>
                        <td className="item-table" id={sto.attributes.OBJECTID} onClick={handleClick}>{sto.attributes.ISTAT}</td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
        )
    }
    return null;
  }