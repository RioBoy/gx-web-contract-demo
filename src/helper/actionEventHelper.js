export const eventChange = (event = () => {}) => {
  const target = event.target;
  let isChecked = null;

  const value = target?.type === 'number' ? Number(target.value) : target.value;
  const name = target.name;

  if (target?.type === 'checkbox') {
    isChecked = target.checked ? 1 : 0;
  }

  return { name, value, isChecked };
};

export const eventUploadFile = (event = {}, maxSize = 10240000) => {
  const target = event.target;
  const files = target.files || event.dataTransfer.files;
  const name = target.name;
  let filesOverSize = [];

  if (!files.length) {
    return { name, files: [], filesOverSize };
  }

  let fileSizeUnder10MB = [];

  Array.from(event.target.files).map((fileSize10MB, orderFile) => {
    const fileSize = event.target.files[orderFile].size;

    if (fileSize <= maxSize) {
      fileSizeUnder10MB.push(event.target.files[orderFile]);
    } else {
      filesOverSize.push(event.target.files[orderFile].name);
      // notify.info(
      //    `Size file ${event.target.files[orderFile].name} <b>> 10MB</b>`,
      // )
    }
  });
  // let isMain = 0

  return { name, files: fileSizeUnder10MB, filesOverSize };
};
