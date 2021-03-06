import { createAction, props } from '@ngrx/store';
import { BasicProfile } from './basic-profile';

export const idxConnect = createAction('[Idx] Idx Connect');
export const idxConnectSuccess = createAction('[Idx] Idx Connect Success', props<{ did: string }>());

export const idxDisconnect = createAction('[Idx] Idx Disconnect');

export const idxLoadBasicProfile = createAction('[Idx] Idx Load Basic Profile');
export const idxLoadBasicProfileSuccess = createAction('[Idx] Idx Load Basic Profile Success', props<{ basicProfile: BasicProfile }>());

export const idxUpdateBasicProfile = createAction('[Idx] Idx Update Basic Profile', props<{ name: string }>());
export const idxUpdateBasicProfileSuccess = createAction('[Idx] Idx Update Basic Profile Success', props<{ name: string }>());

export const authenticationRedirect = createAction('[Idx] Authentication Redirect');
