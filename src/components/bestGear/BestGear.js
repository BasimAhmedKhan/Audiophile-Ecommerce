import Image from "next/image";

export default function BestGear() {
    return (
        <div className="bestGear flex marginTB" style={{height: '37rem'}} >
            <div className="detail flex height100 childsMargin" style={{flexDirection: 'column', justifyContent: 'center', width: '50%'}}>
                <h2 style={{ fontSize: '2.5rem' }}>BRINGING YOU THE <span style={{ color: 'var(--orange)' }}>BEST</span> AUDIO GEAR</h2>
                <p style={{color: 'rgba(0,0,0,0.5)', width: '90%'}}>
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers,and audio accessories. 
                    We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products.
                    Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
            <Image
                style={{width: '50%'}}
                className="height100 b-radius"
                src="/images/shared/desktop/image-best-gear.jpg"
                width={500}
                height={500}
            />
        </div>
    );
}