import React from 'react';
import { apiBase } from '../../config/api';

import './PersonasCard.scss';
import { IPersona } from '../../types/types';
import { inject, observer } from 'mobx-react';
import WindowSizeStore from '../../stores/windowSizeStore';

interface IProps {
  persona: IPersona;
  action: () => void;
  windowSizeStore?: WindowSizeStore;
}

const PersonasCard: React.FunctionComponent<IProps> = ({ persona, action, windowSizeStore }) => (
  <section className="flex card" onClick={action}>
    <img src={`${apiBase}/collections/personas/${persona.id}/image.png`} />
    <div className="card__description">
      <h3 className="card__heading">{persona.name}</h3>
      {!windowSizeStore!.isMobile && <p>{persona.intro}</p>}
    </div>
  </section>
);

export default inject('windowSizeStore')(observer(PersonasCard));
