import React from 'react';
import { inject, observer } from 'mobx-react';
import cx from 'classnames';

import Button from '../../../../components/Button';
import ResultsStore from '../../../../stores/resultsStore';
import './ViewFilter.scss';

interface IProps {
  resultsStore?: ResultsStore;
  resultsSwitch?: boolean;
}

const ViewFilters: React.FunctionComponent<IProps> = ({ resultsStore, resultsSwitch }) => {
  if (!resultsStore) {
    return null;
  }

  return (
    <div
      className={cx('view-filter__search-bar', {
        'view-filter__results-bar': resultsSwitch,
      })}
    >
      <p
        className={cx('view-filter--header', {
          'view-filter--header--light': resultsSwitch,
        })}
      >
        {resultsSwitch ? ' View as:' : 'View As'}
      </p>
      <Button
        text="Grid"
        icon="th-large"
        size="small"
        light={resultsStore.view !== 'grid'}
        onClick={() => resultsStore.toggleView('grid')}
      />
      <Button
        text="Map"
        icon="map"
        size="small"
        light={resultsStore.view !== 'map'}
        onClick={() => resultsStore.toggleView('map')}
      />
    </div>
  );
};

export default inject('resultsStore')(observer(ViewFilters));