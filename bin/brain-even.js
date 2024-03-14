#!/usr/bin/env node
import gameBody from '../src/gameBody.js';
import {taskEven} from '../src/games.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

gameBody(description, taskEven);
