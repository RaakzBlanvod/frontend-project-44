#!/usr/bin/env node
import gameBody from '../src/gameBody.js';
import { taskProgression } from '../src/games.js';

const description = 'What number is missing in the progression?';

gameBody(description, taskProgression);
