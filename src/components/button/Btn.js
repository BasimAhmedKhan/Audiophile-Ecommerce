import { Button } from "antd";

export default function Btn({ size, text, bg, color, ghost, brColor }) {
    return (
        <Button type='primary'
            ghost={ghost}
            style={{
                background: `var(--${bg})`,
                borderRadius: '0', 
                width: '10rem', 
                color: color,
                fontSize: '0.8rem', 
                fontWeight: '700', 
                letterSpacing: '2px',
                borderColor: brColor
            }}
            size={size}>{text}
        </Button>
    );
}