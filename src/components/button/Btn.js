import { Button, message } from "antd";

export default function Btn({ size, text, bg, color, ghost, brColor, link, click }) {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Item added to cart',
        });

    };
    return (
        <>
            {contextHolder}
            <Button
                href={link}
                type='primary'
                ghost={ghost}
                onClick={click ? success : null}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: `var(--${bg})`,
                    borderRadius: '0',
                    height: "2.5rem",
                    width: '10rem',
                    color: color,
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    letterSpacing: '2px',
                    borderColor: brColor,
                }}
                size={size}>
                {text}
            </Button >
        </>
    );
}