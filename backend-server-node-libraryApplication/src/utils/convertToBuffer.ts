import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile);
const deleteFile = util.promisify(fs.unlink);

export const convertToBuffer = async (filePath: string): Promise<Buffer> => {
  const fileData = await readFile(filePath);
  console.log(fileData);
  return fileData;
};

export const deleteImageFile = async (path: string): void => {
  await deleteFile(path);
};
