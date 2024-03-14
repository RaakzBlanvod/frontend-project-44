#!/usr/bin/env node
import gameBody from '../src/gameBody.js';
import { taskGcd } from '../src/games.js';

const description = 'Find the greatest common divisor of given numbers.';

gameBody(description, taskGcd);
