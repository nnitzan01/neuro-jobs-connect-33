import { Job } from "@/types/job";

export const parseCSV = (csvText: string): Job[] => {
  const lines = csvText.trim().split('\n');
  const headers = lines[0].split(',').map(header => header.replace(/"/g, ''));
  
  return lines.slice(1).map(line => {
    // Handle CSV parsing with quoted values
    const values: string[] = [];
    let currentValue = '';
    let insideQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      
      if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === ',' && !insideQuotes) {
        values.push(currentValue);
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
    values.push(currentValue); // Add the last value
    
    const jobData: any = {};
    headers.forEach((header, index) => {
      const value = values[index]?.replace(/"/g, '') || '';
      
      switch (header) {
        case 'id':
          jobData[header] = parseInt(value);
          break;
        case 'featured':
          jobData[header] = value.toLowerCase() === 'true';
          break;
        default:
          jobData[header] = value;
      }
    });
    
    return jobData as Job;
  });
};

export const fetchJobsFromCSV = async (): Promise<Job[]> => {
  try {
    const response = await fetch('/jobs-data.csv');
    if (!response.ok) {
      throw new Error('Failed to fetch CSV data');
    }
    const csvText = await response.text();
    return parseCSV(csvText);
  } catch (error) {
    console.error('Error loading CSV data:', error);
    return [];
  }
};
