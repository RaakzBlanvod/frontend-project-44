#!/usr/bin/env node
import gameBody from '../src/gameBody.js';
import {taskCalc} from '../src/games.js';

const description = 'What is the result of the expression?';

gameBody(description, taskCalc);
