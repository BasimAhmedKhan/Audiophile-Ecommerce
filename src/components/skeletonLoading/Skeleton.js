import { Skeleton } from 'antd';

export default function SkeletonLoading() {
    return (
        <div className="flex flex-column marginTB center" style={{ justifyContent: "space-between", height: '35rem', width: 'auto' }}>
            <div className="height100" style={{ width: '50%' }}>
                <Skeleton.Image active={true} className="height100 width100" />
            </div>
            <div className="flex center childsMargin height100 resWidth resCenter" style={{ flexDirection: 'column', width: '45%' }}>
                <Skeleton active={true} className="" />
                <Skeleton.Button active={true} size={'default'} shape={'square'} block={false} />
            </div>
        </div>
    );
}