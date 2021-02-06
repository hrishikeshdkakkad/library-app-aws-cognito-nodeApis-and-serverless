import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile);

export const convertToBuffer = async (filePath: string): Buffer => {
  const fileData = await readFile(filePath);
  console.log(fileData);
  return fileData;
};
