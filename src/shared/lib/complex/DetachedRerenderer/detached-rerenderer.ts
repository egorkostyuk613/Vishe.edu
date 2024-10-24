import { FC } from 'react';

class DetachedRerenderer {
  components: Array<FC> = [];

  public register(component: FC) {
    this.components.push(component);
  }
}

export const detachedRerenderer = new DetachedRerenderer();
