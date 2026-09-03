const fs = require('fs');
let content = fs.readFileSync('src/screens/Itinerary.tsx', 'utf-8');

content = content.replace("import html2canvas from 'html2canvas';\nimport jsPDF from 'jspdf';", "");

const newExportFn = `
  const exportPDF = () => {
    // We add a class to the body before printing so we can style the print layout
    document.body.classList.add('print-mode');
    window.print();
    document.body.classList.remove('print-mode');
  };
`;

content = content.replace(/const exportPDF = async \(\) => \{[\s\S]*?\}\;/m, newExportFn.trim());

// Also remove disabled={isExporting} etc since we don't need it.
content = content.replace("opacity: isExporting ? 0.5 : 1", "opacity: 1");
content = content.replace("disabled={isExporting}", "");
content = content.replace("const [isExporting, setIsExporting] = useState(false);", "");

fs.writeFileSync('src/screens/Itinerary.tsx', content);
