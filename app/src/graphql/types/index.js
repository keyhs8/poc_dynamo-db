import { mergeTypeDefs } from '@graphql-tools/merge';

import util from './util.graphql';
import movie from './movie.graphql';
import character from './character.graphql';
import weapon from './weapon.graphql';

export default mergeTypeDefs(
    [util, movie, character, weapon],
    { all: true },
);
