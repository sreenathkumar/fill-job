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