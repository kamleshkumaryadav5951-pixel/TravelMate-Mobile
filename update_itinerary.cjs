const fs = require('fs');

let content = fs.readFileSync('src/screens/Itinerary.tsx', 'utf-8');

// Add imports
if (!content.includes('html2canvas')) {
  content = content.replace("import type { ScreenProps } from '../types';", "import type { ScreenProps } from '../types';\nimport html2canvas from 'html2canvas';\nimport jsPDF from 'jspdf';");
}

// Add state for exporting
if (!content.includes('isExporting')) {
  content = content.replace("const [activeDay, setActiveDay] = useState(0);", "const [activeDay, setActiveDay] = useState(0);\n  const [isExporting, setIsExporting] = useState(false);");
}

// Add export function
if (!content.includes('const exportPDF')) {
  const exportFn = `
  const exportPDF = async () => {
    setIsExporting(true);
    try {
      const el = document.getElementById('itinerary-content');
      if (!el) return;
      
      // We temporarily adjust the element to full height to capture everything
      const originalHeight = el.style.height;
      const originalOverflow = el.style.overflow;
      el.style.height = 'max-content';
      el.style.overflow = 'visible';
      
      const canvas = await html2canvas(el, { scale: 2, useCORS: true, logging: false });
      
      el.style.height = originalHeight;
      el.style.overflow = originalOverflow;
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('TravelMate-Itinerary.pdf');
    } catch (e) {
      console.error('Failed to export PDF', e);
    } finally {
      setIsExporting(false);
    }
  };
`;
  content = content.replace("const day = days[activeDay];", exportFn + "\n  const day = days[activeDay];");
}

// Attach ID to root container
content = content.replace('<div className="absolute inset-0 flex flex-col overflow-hidden" style={{ background: \'#f8faff\' }}>', '<div id="itinerary-content" className="absolute inset-0 flex flex-col overflow-hidden" style={{ background: \'#f8faff\' }}>');

// Modify the button to call exportPDF and show loading state
content = content.replace(
  '<button className="rounded-full flex items-center justify-center" style={{ width: 36, height: 36, background: \'rgba(255,255,255,0.2)\' }}>',
  '<button onClick={exportPDF} disabled={isExporting} className="rounded-full flex items-center justify-center active:scale-90 transition-all" style={{ width: 36, height: 36, background: \'rgba(255,255,255,0.2)\', opacity: isExporting ? 0.5 : 1 }}>'
);

fs.writeFileSync('src/screens/Itinerary.tsx', content);
