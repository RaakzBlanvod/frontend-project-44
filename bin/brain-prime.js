#!/usr/bin/env node
import gameBody from '../src/gameBody.js';
import {taskPrime} from '../src/games.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

gameBody(description, taskPrime);
