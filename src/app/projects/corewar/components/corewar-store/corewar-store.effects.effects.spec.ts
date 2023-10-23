import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CorewarStore.EffectsEffects } from './corewar-store.effects.effects';

describe('CorewarStore.EffectsEffects', () => {
  let actions$: Observable<any>;
  let effects: CorewarStore.EffectsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CorewarStore.EffectsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CorewarStore.EffectsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
