export const PageTitleMain = ({ title = '', extraClass = '' }) => {
  return (
    <h1 className={'h2 fw-600 text-neutral-100 ' + extraClass}>{title}</h1>
  );
};

export const PageSubTitle = ({ title = '', extraClass = '' }) => {
  return (
    <h5 className={'fs-24 fw-600 text-neutral-100 py-3 mb-4 ' + extraClass}>
      {title}
    </h5>
  );
};
