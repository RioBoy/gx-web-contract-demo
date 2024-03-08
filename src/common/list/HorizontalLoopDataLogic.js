import { memo } from 'react';
import * as _ from 'lodash';
import HorizontalDataPreview from '@/component/general/HorizontalDataPreview';

const HorizontalLoopDataLogic = memo(
  ({ list = [], config = {}, className = '', isLastMarginBottom = false }) => {
    const { titleColumn = 'col-md-3', contentColumn = 'col-md-8' } = config;

    return (
      <div
        className={
          (isLastMarginBottom ? 'wrap-last-child-mb-0 ' : '') + className
        }
      >
        {list.map((vm = {}, index) => {
          if (!_.isEmpty(vm)) {
            return (
              <HorizontalDataPreview
                key={index}
                classNameTitleColumn={titleColumn}
                classNameContentColumn={contentColumn}
                {...vm}
              />
            );
          }
        })}
      </div>
    );
  },
);

export default HorizontalLoopDataLogic;
