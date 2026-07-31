import { ReactNode } from 'react';

interface ReferenceImageProps {
  title: string;
  children?: ReactNode;
}

export function ReferenceImage({ title, children }: ReferenceImageProps) {
  return (
    <div className="mb-[30px]">
      <h3 className="text-white text-lg font-bold mb-[15px]">{title}</h3>
      <div className="bg-[#2d2d2d] rounded-[8px] p-[20px] border-2 border-dashed border-[#3c3c3c]">
        {children}
      </div>
    </div>
  );
}

export default ReferenceImage;
