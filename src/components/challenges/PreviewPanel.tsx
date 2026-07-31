'use client';

interface PreviewPanelProps {
  srcDoc?: string;
}

export function PreviewPanel({ srcDoc }: PreviewPanelProps) {
  return (
    <div className="flex-1 flex flex-col bg-white min-h-[350px]">
      <h3 className="px-[30px] py-[15px] bg-[#f5f5f5] border-b border-[#e0e0e0] text-[#333] font-bold text-base m-0">
        Live Preview
      </h3>
      <div id="previewContainer" className="flex-1 p-[30px] bg-[#f5f5f5] flex justify-center items-start overflow-auto transition-all duration-300">
        <iframe
          id="previewFrame"
          className="w-full h-full min-h-[300px] border-none bg-white rounded-[8px] shadow-sm"
          srcDoc={srcDoc}
        />
      </div>
    </div>
  );
}

export default PreviewPanel;
