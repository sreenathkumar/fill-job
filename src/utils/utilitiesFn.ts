export const convertImage = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}
export const setDynamicData = (fieldNameKey: string, fieldValue: string) => {
  let val = ''
  const element = <HTMLSelectElement>document.getElementById(`${fieldNameKey}`);
  const fieldOptions = element?.options;

  [...fieldOptions]?.forEach((option) => {
    if (option.innerText === fieldValue.trim()) {
      val = option.value;
    }
  })
  return val
}

export const makeBase64 = (data: string) => {
  return `data:image/png;base64,${data}`
}

export const checkValidImage = async (file: File, maxWidth: number, maxHeight: number) => {
  const validImageTypes = ['image/jpeg',];
  if (!validImageTypes.includes(file.type)) {
    return { status: 'failed', message: 'Only JPG images are allowed' };
  }
  if (file.size > 1 * 1024 * 1024) {
    return { status: 'failed', message: 'Image size should be less than 1 MB' };
  }
  //checking image dimensions if it is in correct size
  const isValidImageDimensions = await checkImageDimensions(file, maxWidth, maxHeight);

  return isValidImageDimensions ? { status: 'success', message: 'Image is valid' } : { status: 'failed', message: `Image dimensions should be ${maxWidth}x${maxHeight}` };
}

const checkImageDimensions = (file: File, maxWidth: number, maxHeight: number) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);

    try {
      img.onload = function () {
        event?.preventDefault();
        // Check image dimensions
        if (img.width == maxWidth && img.height == maxHeight) {
          resolve(true);
        } else {
          resolve(false);
        }
      };
    } catch (error) {
      reject(error);
    }
  })
}

// Helper function to generate prefix based on fieldset legend
export function getPrefix(legendText: string) {
  if (legendText.includes('SSC')) {
    return "SSC "
  }
  if (legendText.includes('HSC')) {
    return "HSC "
  }
  if (legendText.includes('Graduation')) {
    return "Graduation "
  }
  if (legendText.includes('Masters')) {
    return "Masters"
  }
  return ''
}
