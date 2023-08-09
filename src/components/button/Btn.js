import { Button } from "antd";

export default function Btn({size, text}){
    return(
        <Button type='primary' style={{background: 'var(--orange)', borderRadius: '0', width: '10rem', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '2px'}} size={size}>{text}</Button>
    );
}