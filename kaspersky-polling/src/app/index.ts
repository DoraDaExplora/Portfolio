import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';
import { STANDALONE_LANDING_NAME, KasperskyLanding } from './standalone-landing';
import { define } from 'teeqer-core';

declare var window: any;

setPassiveTouchGestures(true);

define(STANDALONE_LANDING_NAME, KasperskyLanding);

/** @TODO Read about process.env variable on the front-end */