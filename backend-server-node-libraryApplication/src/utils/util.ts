export const isEmpty = (value: any): boolean => {
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (value === 'undefined' || value === undefined) {
    return true;
  } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
    return true;
  } else {
    return false;
  }
};

export const ParamsToUploadToS3 = (image: Buffer, key: string, detectedMime: string, bucket: string, acl = 'public-read') => {
  const uploadParams = {
    Body: image,
    Key: key,
    ContentType: detectedMime,
    Bucket: bucket,
    ACL: acl,
  };

  return uploadParams;
};
