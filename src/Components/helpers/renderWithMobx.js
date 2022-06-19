import React from 'react';
import { render } from '@testing-library/react';

import { StoreContext } from '../../index';
import TodosStore from '../../store';

export function renderWithMobx(component) {
  return render(
    <StoreContext.Provider value={{
      store: new TodosStore()
    }}>
      {component}
    </StoreContext.Provider>
  );
}