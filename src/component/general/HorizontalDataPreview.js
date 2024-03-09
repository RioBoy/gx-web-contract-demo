import { memo } from 'react';

const HorizontalDataPreview = memo(
  ({
    title = '',
    content = '',
    subTitle = '',
    isLayoutTitleDefault = true,
    isLayoutContentDefault = true,
    classNameTitleColumn = 'col-md-3',
    classNameContentColumn = 'col-md-8',
  }) => {
    return (
      <div className="row pb-md-3 pb-4">
        <div className={'mb-2 mb-md-0 ' + classNameTitleColumn}>
          {!isLayoutTitleDefault ? (
            <div className="fs-20 fw-300 text-neutral-100">{title}</div>
          ) : (
            title
          )}

          {subTitle ? (
            <div className="text-neutral-400 fs-12">{subTitle}</div>
          ) : null}
        </div>

        <div className={classNameContentColumn}>
          {isLayoutContentDefault ? (
            <div className="fs-20 fw-600 text-neutral-100">{content}</div>
          ) : (
            content
          )}
        </div>
      </div>
    );
  },
);

export default HorizontalDataPreview;
