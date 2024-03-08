export const objectListDetail = (
  title,
  content,
  isLayoutContentDefault = true,
) => ({ title, content, isLayoutContentDefault });

export const objectListDetailCustom = (
  title = '',
  content = '',
  isLayoutContentDefault = false,
) => {
  return {
    isLayoutContentDefault,
    ...objectListDetail(
      <>
        <div className="wp-fs-20 wp-fw-300 text-neutral-100 d-flex justify-content-between">
          <p className="mb-0">{title}</p>
          <p className="mb-0">:</p>
        </div>
      </>,
      content,
    ),
  };
};
